/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Fdmy5O8i.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CIkxwUQa.mjs';
import { $ as $$SetupGridItem } from '../../chunks/SetupGridItem_DCr3hktM.mjs';
import { $ as $$AgentSearch } from '../../chunks/AgentSearch_pqnz6GEW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { map } = Astro2.params;
  if (!map) throw new Error("No map param provided");
  const setups = await getCollection(
    "setup",
    (entry) => entry.data.map.toLowerCase() === map.toLowerCase()
  );
  const title = `Setups for ${map[0].toUpperCase()}${map.slice(1)}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto p-4 md:p-8"> <h1 class="text-4xl font-extrabold text-gray-900 mb-8 text-center"> ${title} </h1> <div class="mb-8"> ${renderComponent($$result2, "AgentSearch", $$AgentSearch, {})} </div> ${setups.length === 0 && renderTemplate`<p class="text-center text-gray-600">
No setups found for ${map[0].toUpperCase() + map.slice(1)} </p>`} <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"> ${setups.map((setup) => renderTemplate`${renderComponent($$result2, "SetupGridItem", $$SetupGridItem, { ...setup.data, "slug": setup.slug })}`)} </div> </div> ` })}`;
}, "/Users/ruben/lor-lineups/src/pages/maps/[map]/index.astro", void 0);

const $$file = "/Users/ruben/lor-lineups/src/pages/maps/[map]/index.astro";
const $$url = "/maps/[map]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
