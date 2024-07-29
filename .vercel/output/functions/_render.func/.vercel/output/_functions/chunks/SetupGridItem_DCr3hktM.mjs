import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, d as createAstro } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import { g as getAgentImage } from './agents_xbrzBIL9.mjs';
import { g as getMapImage } from './maps_CYZOqi39.mjs';
import { $ as $$Image } from './_astro_assets_DJOPdXwg.mjs';

const $$Astro = createAstro();
const $$SetupGridItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SetupGridItem;
  const { title, agent, site, map, isAttacking, isUlt, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="bg-white pb-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"${addAttribute(`/setup/${slug}`, "href")}${addAttribute(`View details for ${title}`, "title")}> <div class="relative mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": getMapImage(map), "alt": map, "class": "w-full h-full rounded-t-lg object-cover mb-4 shadow-md", "width": "400", "height": "200" })} ${renderComponent($$result, "Image", $$Image, { "src": getAgentImage(agent), "alt": agent, "class:list": ["w-20 h-20 rounded-full shadow-md absolute -bottom-10 left-1/2 transform -translate-x-1/2 border-4 border-white", [
    { "bg-red-400": isAttacking, "bg-blue-300": !isAttacking },
    {
      "border-red-400": isAttacking,
      "border-blue-300": !isAttacking
    }
  ]], "width": "80", "height": "80" })} </div> <div class="pt-10 text-center"> <h2 class="text-2xl font-bold text-gray-900 text-center line-clamp-2 mb-2"> ${title} </h2> <p class="text-lg font-bold mb-1 text-gray-800"> ${agent} - ${map} - Site ${site} </p> <p class="text-base text-gray-600"> ${isAttacking ? "Attacking" : "Defending"} - ${isUlt ? "Ultimate" : "Regular"} Setup
</p> </div> </a>`;
}, "/Users/ruben/lor-lineups/src/components/SetupGridItem.astro", void 0);

export { $$SetupGridItem as $ };
