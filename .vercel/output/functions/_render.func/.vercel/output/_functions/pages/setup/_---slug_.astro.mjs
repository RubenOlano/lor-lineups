/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, e as renderSlot } from '../../chunks/astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CIkxwUQa.mjs';
import { a as getEntry } from '../../chunks/_astro_content_Fdmy5O8i.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SetupLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SetupLayout;
  const { agent, map, site, isAttacking, isUlt, video, images, title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${agent} Setup on ${map} - ${site} Site`, "keywords": [agent, map, site] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl mx-auto py-5 px-5 md:px-0"> <header class="text-center mb-8"> <h1 class="text-xl md:text-3xl font-extrabold text-gray-800 mb-4"> ${title} </h1> <p class="text-lg md:text-xl text-gray-700 font-light"> ${isAttacking ? "Attacking" : "Defending"} - ${isUlt ? "Ultimate" : "Regular"} Setup
</p> </header> <section class="mb-10"> <h2 class="text-2xl font-semibold mb-6 text-gray-900 text-center">
Video Guide
</h2> <div class="relative pb-[56.25%] h-0 overflow-hidden"> <iframe class="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"${addAttribute(video, "src")} allowfullscreen${addAttribute(`Video guide for ${agent} on ${map} site ${site}`, "title")}></iframe> </div> </section> ${renderSlot($$result2, $$slots["default"])} ${images.length > 0 && renderTemplate`<section class="bg-white p-8 rounded-lg shadow-lg mb-10"> <h2 class="text-3xl font-semibold mb-6 text-gray-900 text-center">
Image References
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> ${images.map((image, index) => renderTemplate`<div class="overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"> <img${addAttribute(image, "src")}${addAttribute(`Reference image ${index + 1} for ${agent} on ${map} site ${site}`, "alt")} class="w-full h-auto"> </div>`)} </div> </section>`} </div> ` })}`;
}, "/Users/ruben/lor-lineups/src/layouts/SetupLayout.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug) throw new Error("No slug provided");
  const entry = await getEntry("setup", slug);
  if (!entry) return Astro2.redirect("/404");
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "SetupLayout", $$SetupLayout, { ...entry.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/ruben/lor-lineups/src/pages/setup/[...slug].astro", void 0);

const $$file = "/Users/ruben/lor-lineups/src/pages/setup/[...slug].astro";
const $$url = "/setup/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
