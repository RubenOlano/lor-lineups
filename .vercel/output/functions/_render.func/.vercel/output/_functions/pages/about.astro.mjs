/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CIkxwUQa.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const email = "lor@rubenolano.app";
  const title = "About This Site";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 md:p-10"> <div class="max-w-4xl mx-auto p-8"> <h1 class="text-4xl font-extrabold text-gray-900 mb-6">
About This Site
</h1> <p class="mt-4 text-lg text-gray-700 leading-relaxed">
Welcome to my collection of Valorant lineups and setups! This
                site is a curated repository of strategies that I've discovered
                online or have been shared with me by the community. While it
                doesn't cover every possible setup, my goal is to provide a
                valuable resource for players seeking inspiration and aim to
                improve their gameplay.
</p> <p class="mt-4 text-lg text-gray-700 leading-relaxed">
If you have setups that you'd like to see added, updated, or
                removed, don't hesitate to contact me via email at
<a${addAttribute(`mailto:${email}`, "href")} class="text-blue-500 underline"> ${email}</a>. I give full credit to the original creators of these setups.
                If you need more information added or wish to have your setup
                removed, please reach out. Your feedback and contributions are
                greatly appreciated!
</p> </div> </main> ` })}`;
}, "/Users/ruben/lor-lineups/src/pages/about.astro", void 0);

const $$file = "/Users/ruben/lor-lineups/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
