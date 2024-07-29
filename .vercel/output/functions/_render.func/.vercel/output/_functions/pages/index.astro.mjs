/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CIkxwUQa.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DJOPdXwg.mjs';
import { g as getAgentImage } from '../chunks/agents_xbrzBIL9.mjs';
import { g as getMapImage } from '../chunks/maps_CYZOqi39.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featuredAgents = ["Kayo", "Sova", "Gekko", "Phoenix"];
  const featuredMaps = ["Ascent", "Bind", "Haven", "Split"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Valorant Setups" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto text-center p-4 md:p-8"> <h1 class="text-5xl font-extrabold text-gray-900 mb-8">
Welcome to Valorant Setups
</h1> <p class="text-xl text-gray-700 mb-12">
Your ultimate resource for Valorant lineups and setups. Find the
            best strategies for your favorite agents and maps.
</p> <h2 class="text-4xl font-extrabold text-gray-900 mb-8">
Explore Agents
</h2> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-12"> ${featuredAgents.map((agent) => renderTemplate`<a${addAttribute(`/agents/${agent.toLowerCase()}`, "href")} class="group block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"${addAttribute(`View setups for ${agent}`, "aria-label")}> <div class="relative overflow-hidden rounded-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": getAgentImage(agent), "alt": agent, "class": "w-full h-48 object-cover transition-transform duration-500 transform group-hover:scale-110", "width": "250", "height": "250" })} <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div> </div> <h2 class="mt-4 text-2xl font-bold text-gray-900 text-center"> ${agent} </h2> </a>`)} </div> <h2 class="text-4xl font-extrabold text-gray-900 mb-8">Explore Maps</h2> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"> ${featuredMaps.map((map) => renderTemplate`<a${addAttribute(`/maps/${map.toLowerCase()}`, "href")} class="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"${addAttribute(`View setups for ${map}`, "aria-label")}> <div class="relative overflow-hidden rounded-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": getMapImage(map), "alt": map, "class": "w-full h-48 object-cover transition-transform duration-500 transform group-hover:scale-110", "height": "250", "width": "350" })} <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div> <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg"> <h2 class="text-xl font-bold text-white"> ${map} </h2> </div> </div> </a>`)} </div> </div> ` })}`;
}, "/Users/ruben/lor-lineups/src/pages/index.astro", void 0);

const $$file = "/Users/ruben/lor-lineups/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
