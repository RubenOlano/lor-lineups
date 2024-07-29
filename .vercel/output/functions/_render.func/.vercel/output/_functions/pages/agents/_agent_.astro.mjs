/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Fdmy5O8i.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CIkxwUQa.mjs';
import { $ as $$SetupGridItem } from '../../chunks/SetupGridItem_DCr3hktM.mjs';
import { $ as $$MapSearch } from '../../chunks/MapSearch_BqzJKoMT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { agent } = Astro2.params;
  if (!agent) throw new Error("Missing agent parameter");
  const setups = await getCollection(
    "setup",
    (entry) => entry.data.agent.toLowerCase() === agent.toLowerCase()
  );
  const title = `Setups for ${agent[0].toUpperCase()}${agent.slice(1)}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto p-4 md:p-8"> <h1 class="text-4xl font-extrabold text-gray-900 mb-8 text-center"> ${title} </h1> <div class="mb-8"> ${renderComponent($$result2, "MapSearch", $$MapSearch, {})} </div> ${setups.length === 0 && renderTemplate`<p class="text-center text-gray-600">
No setups found for
${agent[0].toUpperCase() + agent.slice(1)}.
</p>`} <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"> ${setups.map((setup) => renderTemplate`${renderComponent($$result2, "SetupGridItem", $$SetupGridItem, { ...setup.data, "slug": setup.slug })}`)} </div> </div> ` })}`;
}, "/Users/ruben/lor-lineups/src/pages/agents/[agent]/index.astro", void 0);

const $$file = "/Users/ruben/lor-lineups/src/pages/agents/[agent]/index.astro";
const $$url = "/agents/[agent]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
