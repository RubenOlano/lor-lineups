/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CIkxwUQa.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center p-6"> <div class="max-w-md text-center p-8"> <h1 class="text-6xl font-extrabold text-gray-900 mb-4">404</h1> <h2 class="text-2xl font-semibold text-gray-800 mb-4">
Page Not Found
</h2> <p class="text-lg text-gray-700 mb-6">
Oops! The page you're looking for doesn't exist or has been
                moved.
</p> <div class="flex space-x-4 justify-center"> <div class="flex-shrink-0"> <a href="/" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
Go Home
</a> </div> <div class="flex-shrink-0"> <button class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition-colors" onclick="window.history.back();">
Go back
</button> </div> </div> </div> </div> ` })}`;
}, "/Users/ruben/lor-lineups/src/pages/404.astro", void 0);

const $$file = "/Users/ruben/lor-lineups/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
