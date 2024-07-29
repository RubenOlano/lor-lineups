/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_DJOPdXwg.mjs';
import { a as mapMap, g as getMapImage } from '../chunks/maps_CYZOqi39.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CIkxwUQa.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const maps = Object.keys(mapMap).map(
    (key) => `${key[0].toUpperCase()}${key.slice(1)}`
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Valorant Setups" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto p-4 md:p-5"> <div class="text-center mb-8"> <h1 class="text-4xl font-extrabold text-gray-900">Select a Map</h1> <p class="text-lg text-gray-700">
Explore setups by selecting a map below.
</p> </div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"> ${maps.map((map) => renderTemplate`<a${addAttribute(`/maps/${map.toLowerCase()}`, "href")} class="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"${addAttribute(`View setups for ${map}`, "aria-label")}> <div class="relative overflow-hidden rounded-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": getMapImage(map), "alt": map, "class": "w-full h-48 object-cover transition-transform duration-500 transform group-hover:scale-110", "height": "250", "width": "350" })} <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div> <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg"> <h2 class="text-xl font-bold text-white"> ${map} </h2> </div> </div> </a>`)} </div> </div> ` })}`;
}, "/Users/ruben/lor-lineups/src/pages/maps/index.astro", void 0);

const $$file = "/Users/ruben/lor-lineups/src/pages/maps/index.astro";
const $$url = "/maps";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
