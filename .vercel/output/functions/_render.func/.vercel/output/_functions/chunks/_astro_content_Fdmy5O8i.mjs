import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_BPrcw36v.mjs';
import { c as createComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/setup/CYPHER-B-ASCENT.md": () => import('./CYPHER-B-ASCENT_-bfqTjKS.mjs'),"/src/content/setup/Cypher Lotus C Setup 2023.md": () => import('./Cypher Lotus C Setup 2023_1xPEfFdR.mjs'),"/src/content/setup/Cypher Lotus a Setup 2023.md": () => import('./Cypher Lotus a Setup 2023_DIuWMFe2.mjs'),"/src/content/setup/Cypher One Way Setup for B Site on the New Map Sunset valorant.md": () => import('./Cypher One Way Setup for B Site on the New Map Sunset valorant_HXorZ7q6.mjs'),"/src/content/setup/Cypher Pearl a Setup 2023.md": () => import('./Cypher Pearl a Setup 2023_DA4-OmzR.mjs'),"/src/content/setup/Cypher Split B Setup 2023.md": () => import('./Cypher Split B Setup 2023_B4j_GITA.mjs'),"/src/content/setup/Fracture - Cypher Defender - B Main & Canteen Setup.md": () => import('./Fracture - Cypher Defender - B Main _ Canteen Setup_uMjQ8PuQ.mjs'),"/src/content/setup/How to Do Brim Lineups from Drop Fracture A.md": () => import('./How to Do Brim Lineups from Drop Fracture A_C6ANHTXH.mjs'),"/src/content/setup/How to Oneway Split B Main with Cypher.md": () => import('./How to Oneway Split B Main with Cypher_C0uPlBHT.mjs'),"/src/content/setup/KJ-BMAIN-ASCENT.md": () => import('./KJ-BMAIN-ASCENT_C3CyJrXG.mjs'),"/src/content/setup/Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff【 Valorant Gekko 】.md": () => import('./Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff【 Valorant Gekko 】_BBGPLVgb.mjs'),"/src/content/setup/Mosh Pit Lineup on Icebox Used by Fpx Aaaay in VCT 2024 Masters Madrid【 Valorant Gekko 】.md": () => import('./Mosh Pit Lineup on Icebox Used by Fpx Aaaay in VCT 2024 Masters Madrid【 Valorant Gekko 】_B7oAP1mg.mjs'),"/src/content/setup/Nanoswarm Setup on Ascent Used by GEN Meteor in VCT 2024 Masters Madrid【 Valorant Killjoy 】.md": () => import('./Nanoswarm Setup on Ascent Used by GEN Meteor in VCT 2024 Masters Madrid【 Valorant Killjoy 】_CdcLLfTW.mjs'),"/src/content/setup/Phoenix Lineups Ascent A Site.md": () => import('./Phoenix Lineups Ascent A Site_C_oPscqH.mjs'),"/src/content/setup/Phoenix Lineups Bind A Site.md": () => import('./Phoenix Lineups Bind A Site_Tu9fGw3f.mjs'),"/src/content/setup/Sova Lineup - Bind, Attacker Side Post Plant (a Site).md": () => import('./Sova Lineup - Bind_ Attacker Side Post Plant (a Site)_BucOPahV.mjs'),"/src/content/setup/Sova Lineup - Icebox, Defender Side Plant Denial (a Site).md": () => import('./Sova Lineup - Icebox_ Defender Side Plant Denial (a Site)_Bg1Tezmh.mjs'),"/src/content/setup/Split Kayo Super Easy Ct a Push Popflash from Heaven.md": () => import('./Split Kayo Super Easy Ct a Push Popflash from Heaven_DjXwXkLX.mjs'),"/src/content/setup/The *Only* Cypher Setup Haven You Need in 2023.md": () => import('./The _Only_ Cypher Setup Haven You Need in 2023_DKWwEdf4.mjs'),"/src/content/setup/The Most Op Kj Setup in Fracture.md": () => import('./The Most Op Kj Setup in Fracture_D4MHtuZu.mjs'),"/src/content/setup/Unbreakable Kayo Knife Lineup Split a Defense.md": () => import('./Unbreakable Kayo Knife Lineup Split a Defense_B9JKl1yq.mjs'),"/src/content/setup/Use This Fade Haunt Lineup on the a Site Pearl A.md": () => import('./Use This Fade Haunt Lineup on the a Site Pearl A_CT3QPCO3.mjs'),"/src/content/setup/Valorant Cypher Setup (Fracture A Site).md": () => import('./Valorant Cypher Setup (Fracture A Site)_KqYlu50m.mjs'),"/src/content/setup/Valorant Cypher Setup (Fracture B Site) (Defensive).md": () => import('./Valorant Cypher Setup (Fracture B Site) (Defensive)_C8awPbnr.mjs'),"/src/content/setup/Valorant Cypher Setup (Icebox a Site) (Defensive).md": () => import('./Valorant Cypher Setup (Icebox a Site) (Defensive)_BgeWzK2t.mjs'),"/src/content/setup/ZERO point Lineup on Sunset Used by PRX f0rsakeN in VCT 2024 Masters Madrid【 Valorant Kayo 】.md": () => import('./ZERO point Lineup on Sunset Used by PRX f0rsakeN in VCT 2024 Masters Madrid【 Valorant Kayo 】_BcJ9rrAs.mjs'),"/src/content/setup/nAts Shows Perfect Radiant Cypher Setup on Split nAts.md": () => import('./nAts Shows Perfect Radiant Cypher Setup on Split nAts_XbdUxij-.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"setup":{"type":"content","entries":{"cypher-b-ascent":"/src/content/setup/CYPHER-B-ASCENT.md","cypher-lotus-c-setup-2023":"/src/content/setup/Cypher Lotus C Setup 2023.md","cypher-one-way-setup-for-b-site-on-the-new-map-sunset-valorant":"/src/content/setup/Cypher One Way Setup for B Site on the New Map Sunset valorant.md","cypher-lotus-a-setup-2023":"/src/content/setup/Cypher Lotus a Setup 2023.md","cypher-pearl-a-setup-2023":"/src/content/setup/Cypher Pearl a Setup 2023.md","cypher-split-b-setup-2023":"/src/content/setup/Cypher Split B Setup 2023.md","fracture---cypher-defender---b-main--canteen-setup":"/src/content/setup/Fracture - Cypher Defender - B Main & Canteen Setup.md","how-to-oneway-split-b-main-with-cypher":"/src/content/setup/How to Oneway Split B Main with Cypher.md","how-to-do-brim-lineups-from-drop-fracture-a":"/src/content/setup/How to Do Brim Lineups from Drop Fracture A.md","kj-bmain-ascent":"/src/content/setup/KJ-BMAIN-ASCENT.md","phoenix-lineups-ascent-a-site":"/src/content/setup/Phoenix Lineups Ascent A Site.md","phoenix-lineups-bind-a-site":"/src/content/setup/Phoenix Lineups Bind A Site.md","nanoswarm-setup-on-ascent-used-by-gen-meteor-in-vct-2024-masters-madrid-valorant-killjoy-":"/src/content/setup/Nanoswarm Setup on Ascent Used by GEN Meteor in VCT 2024 Masters Madrid【 Valorant Killjoy 】.md","sova-lineup---bind-attacker-side-post-plant-a-site":"/src/content/setup/Sova Lineup - Bind, Attacker Side Post Plant (a Site).md","split-kayo-super-easy-ct-a-push-popflash-from-heaven":"/src/content/setup/Split Kayo Super Easy Ct a Push Popflash from Heaven.md","sova-lineup---icebox-defender-side-plant-denial-a-site":"/src/content/setup/Sova Lineup - Icebox, Defender Side Plant Denial (a Site).md","the-only-cypher-setup-haven-you-need-in-2023":"/src/content/setup/The *Only* Cypher Setup Haven You Need in 2023.md","the-most-op-kj-setup-in-fracture":"/src/content/setup/The Most Op Kj Setup in Fracture.md","mosh-pit-lineup-on-icebox-used-by-fpx-aaaay-in-vct-2024-masters-madrid-valorant-gekko-":"/src/content/setup/Mosh Pit Lineup on Icebox Used by Fpx Aaaay in VCT 2024 Masters Madrid【 Valorant Gekko 】.md","mosh-pit-lineup-on-bind-used-by-drx-stax-in-vct-pacific-kickoff-valorant-gekko-":"/src/content/setup/Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff【 Valorant Gekko 】.md","use-this-fade-haunt-lineup-on-the-a-site-pearl-a":"/src/content/setup/Use This Fade Haunt Lineup on the a Site Pearl A.md","valorant-cypher-setup-fracture-a-site":"/src/content/setup/Valorant Cypher Setup (Fracture A Site).md","valorant-cypher-setup-fracture-b-site-defensive":"/src/content/setup/Valorant Cypher Setup (Fracture B Site) (Defensive).md","valorant-cypher-setup-icebox-a-site-defensive":"/src/content/setup/Valorant Cypher Setup (Icebox a Site) (Defensive).md","unbreakable-kayo-knife-lineup-split-a-defense":"/src/content/setup/Unbreakable Kayo Knife Lineup Split a Defense.md","zero-point-lineup-on-sunset-used-by-prx-f0rsaken-in-vct-2024-masters-madrid-valorant-kayo-":"/src/content/setup/ZERO point Lineup on Sunset Used by PRX f0rsakeN in VCT 2024 Masters Madrid【 Valorant Kayo 】.md","nats-shows-perfect-radiant-cypher-setup-on-split-nats":"/src/content/setup/nAts Shows Perfect Radiant Cypher Setup on Split nAts.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/setup/CYPHER-B-ASCENT.md": () => import('./CYPHER-B-ASCENT_CCGIS_l4.mjs'),"/src/content/setup/Cypher Lotus C Setup 2023.md": () => import('./Cypher Lotus C Setup 2023_CFSuIsmM.mjs'),"/src/content/setup/Cypher Lotus a Setup 2023.md": () => import('./Cypher Lotus a Setup 2023_DcQWPv0O.mjs'),"/src/content/setup/Cypher One Way Setup for B Site on the New Map Sunset valorant.md": () => import('./Cypher One Way Setup for B Site on the New Map Sunset valorant_c8f8enBr.mjs'),"/src/content/setup/Cypher Pearl a Setup 2023.md": () => import('./Cypher Pearl a Setup 2023_CHb_WEoK.mjs'),"/src/content/setup/Cypher Split B Setup 2023.md": () => import('./Cypher Split B Setup 2023_HKRmNVmw.mjs'),"/src/content/setup/Fracture - Cypher Defender - B Main & Canteen Setup.md": () => import('./Fracture - Cypher Defender - B Main _ Canteen Setup_CnH-5lzH.mjs'),"/src/content/setup/How to Do Brim Lineups from Drop Fracture A.md": () => import('./How to Do Brim Lineups from Drop Fracture A_qTkHf9AR.mjs'),"/src/content/setup/How to Oneway Split B Main with Cypher.md": () => import('./How to Oneway Split B Main with Cypher_juJIkHVS.mjs'),"/src/content/setup/KJ-BMAIN-ASCENT.md": () => import('./KJ-BMAIN-ASCENT_GmCONNLf.mjs'),"/src/content/setup/Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff【 Valorant Gekko 】.md": () => import('./Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff【 Valorant Gekko 】_DGYB6hQy.mjs'),"/src/content/setup/Mosh Pit Lineup on Icebox Used by Fpx Aaaay in VCT 2024 Masters Madrid【 Valorant Gekko 】.md": () => import('./Mosh Pit Lineup on Icebox Used by Fpx Aaaay in VCT 2024 Masters Madrid【 Valorant Gekko 】_RhaUs4c2.mjs'),"/src/content/setup/Nanoswarm Setup on Ascent Used by GEN Meteor in VCT 2024 Masters Madrid【 Valorant Killjoy 】.md": () => import('./Nanoswarm Setup on Ascent Used by GEN Meteor in VCT 2024 Masters Madrid【 Valorant Killjoy 】_DvArND9t.mjs'),"/src/content/setup/Phoenix Lineups Ascent A Site.md": () => import('./Phoenix Lineups Ascent A Site_s_ODPXOP.mjs'),"/src/content/setup/Phoenix Lineups Bind A Site.md": () => import('./Phoenix Lineups Bind A Site_BElmqP8m.mjs'),"/src/content/setup/Sova Lineup - Bind, Attacker Side Post Plant (a Site).md": () => import('./Sova Lineup - Bind_ Attacker Side Post Plant (a Site)_W_wVIXyQ.mjs'),"/src/content/setup/Sova Lineup - Icebox, Defender Side Plant Denial (a Site).md": () => import('./Sova Lineup - Icebox_ Defender Side Plant Denial (a Site)_BqJ2NniL.mjs'),"/src/content/setup/Split Kayo Super Easy Ct a Push Popflash from Heaven.md": () => import('./Split Kayo Super Easy Ct a Push Popflash from Heaven_CBL-zQ6w.mjs'),"/src/content/setup/The *Only* Cypher Setup Haven You Need in 2023.md": () => import('./The _Only_ Cypher Setup Haven You Need in 2023_C5dm9N1o.mjs'),"/src/content/setup/The Most Op Kj Setup in Fracture.md": () => import('./The Most Op Kj Setup in Fracture_DoaDnUNg.mjs'),"/src/content/setup/Unbreakable Kayo Knife Lineup Split a Defense.md": () => import('./Unbreakable Kayo Knife Lineup Split a Defense_D47HjjUK.mjs'),"/src/content/setup/Use This Fade Haunt Lineup on the a Site Pearl A.md": () => import('./Use This Fade Haunt Lineup on the a Site Pearl A_h4cLBZnL.mjs'),"/src/content/setup/Valorant Cypher Setup (Fracture A Site).md": () => import('./Valorant Cypher Setup (Fracture A Site)_CnQaoaiI.mjs'),"/src/content/setup/Valorant Cypher Setup (Fracture B Site) (Defensive).md": () => import('./Valorant Cypher Setup (Fracture B Site) (Defensive)_DVVpvx-8.mjs'),"/src/content/setup/Valorant Cypher Setup (Icebox a Site) (Defensive).md": () => import('./Valorant Cypher Setup (Icebox a Site) (Defensive)_m1vWVd8W.mjs'),"/src/content/setup/ZERO point Lineup on Sunset Used by PRX f0rsakeN in VCT 2024 Masters Madrid【 Valorant Kayo 】.md": () => import('./ZERO point Lineup on Sunset Used by PRX f0rsakeN in VCT 2024 Masters Madrid【 Valorant Kayo 】_Be3x_Ghq.mjs'),"/src/content/setup/nAts Shows Perfect Radiant Cypher Setup on Split nAts.md": () => import('./nAts Shows Perfect Radiant Cypher Setup on Split nAts_BnQRcx0S.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

export { getEntry as a, getCollection as g };
