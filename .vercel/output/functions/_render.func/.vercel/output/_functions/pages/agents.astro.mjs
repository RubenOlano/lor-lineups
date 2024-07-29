/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_DJOPdXwg.mjs';
import { a as agentMap, g as getAgentImage } from '../chunks/agents_xbrzBIL9.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CIkxwUQa.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const agents = Object.keys(agentMap).map(
    (key) => `${key[0].toUpperCase()}${key.slice(1)}`
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Valorant Setups" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto p-4"> <div class="text-center mb-8"> <h1 class="text-4xl font-extrabold text-gray-900">
Select an Agent
</h1> <p class="text-lg text-gray-700">
Explore setups by selecting an agent below.
</p> </div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"> ${agents.map((agent) => renderTemplate`<a${addAttribute(`/agents/${agent.toLowerCase()}`, "href")} class="group block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"${addAttribute(`View setups for ${agent}`, "aria-label")}> <div class="relative overflow-hidden rounded-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": getAgentImage(agent), "alt": agent, "class": "w-full h-48 object-cover transition-transform duration-500 transform group-hover:scale-110", "width": "250", "height": "250" })} <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div> </div> <h2 class="mt-4 text-2xl font-bold text-gray-900 text-center"> ${agent} </h2> </a>`)} </div> </div> ` })}`;
}, "/Users/ruben/lor-lineups/src/pages/agents/index.astro", void 0);

const $$file = "/Users/ruben/lor-lineups/src/pages/agents/index.astro";
const $$url = "/agents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
