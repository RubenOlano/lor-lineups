import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';
import { m as mapList } from './maps_CYZOqi39.mjs';

const $$Astro = createAstro();
const $$MapSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MapSearch;
  const uniqueMaps = mapList.map((map) => map[0].toUpperCase() + map.slice(1));
  const { currentMap } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-4"> <label for="agent" class="text-lg font-semibold text-gray-800">Map</label> <div class="relative"> <input type="text" list="maps"${addAttribute(currentMap ? `${currentMap[0].toUpperCase()}${currentMap.slice(1)}` : "", "value")} class="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-500" placeholder="Select a Map" autofocus autocomplete="maps" tabindex="0"> <datalist id="maps"> <option value="" disabled>Select a Map</option> <option value=""> All Maps </option> ${uniqueMaps.map((map) => renderTemplate`<option${addAttribute(map, "value")}${addAttribute(map.toLowerCase() === currentMap, "selected")}> ${map} </option>`)} </datalist> </div> </div> `;
}, "/Users/ruben/lor-lineups/src/components/MapSearch.astro", void 0);

export { $$MapSearch as $ };
