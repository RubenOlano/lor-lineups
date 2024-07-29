import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, i as renderHead, a as renderComponent, e as renderSlot, d as createAstro } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const Logo = new Proxy({"src":"/_astro/favicon.CgxYSLJU.svg","width":200,"height":200,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/public/favicon.svg";
							}
							
							return target[name];
						}
					});

const $$HeaderNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<header class="bg-gray-800 text-white py-4 px-4 md:px-2"> <nav class="container mx-auto flex justify-between items-center" role="navigation"> <div class="flex items-center space-x-4"> <a href="/"> <img${addAttribute(Logo.src, "src")} alt="Valorant Setups Logo" class="w-10 h-10"> </a> <a href="/" class="text-2xl font-bold hover:text-gray-300 transition-colors duration-300">
Valorant Setups
</a> </div> <div class="hidden md:flex items-center space-x-4"> ${["about", "agents", "maps"].map((route) => renderTemplate`<a${addAttribute(`/${route}`, "href")} class="hover:text-gray-300 transition-colors duration-300"> ${route.charAt(0).toUpperCase() + route.slice(1)} </a>`)} </div> <div class="md:hidden"> <button class="text-white focus:outline-none" id="menu-toggle" aria-label="Toggle menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> </nav> <div id="mobile-menu" class="md:hidden hidden"> <nav class="flex flex-col items-end space-y-2 py-4"> ${["about", "agents", "maps"].map((route) => renderTemplate`<a${addAttribute(`/${route}`, "href")} class="hover:text-gray-300 transition-colors duration-300"> ${route.charAt(0).toUpperCase() + route.slice(1)} </a>`)} </nav> </div> </header>`;
}, "/Users/ruben/lor-lineups/src/components/HeaderNav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-gray-100 py-8"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> <div class="flex items-center space-x-4 text-center md:text-left"> <img${addAttribute(Logo.src, "src")} alt="Valorant Setups Logo" class="w-20 h-20"> <div> <h2 class="text-2xl font-bold">Valorant Setups</h2> <p class="mt-2 text-gray-400">
Quick and easy setups for your favorite agents.
</p> </div> </div> <div class="flex space-x-4"> <a href="/" class="text-gray-400 hover:text-gray-100">Home</a> <a href="/about" class="text-gray-400 hover:text-gray-100">About</a> <a href="/maps" class="text-gray-400 hover:text-gray-100">Maps</a> <a href="/agents" class="text-gray-400 hover:text-gray-100">Agents</a> </div> </div> <div class="mt-8 text-center text-gray-500 text-sm">
&copy; 2024 Valorant Setups. All rights reserved.
</div> </div> </footer>`;
}, "/Users/ruben/lor-lineups/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const props = Astro2.props;
  const baseKeywords = ["Valorant", "setups", "lineups"];
  const keywords = baseKeywords.concat(props.keywords ?? []);
  const description = props.description ?? "Valorant setups and lineups all in one place";
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(keywords.join(", "), "content")}><meta name="author" content="Ruben Olano"><meta property="og:title"${addAttribute(props.title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url" content="lor.rubenolano.app"><meta property="og:image" content="/favicon.svg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(props.title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image" content="/favicon.svg"><title>${props.title}</title>${renderHead()}</head> <body class="bg-gray-100 text-gray-900 flex flex-col min-h-screen" data-astro-cid-37fxchfa> <header data-astro-cid-37fxchfa> ${renderComponent($$result, "HeaderNav", $$HeaderNav, { "data-astro-cid-37fxchfa": true })} </header> <main class="flex-grow" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </body></html>`;
}, "/Users/ruben/lor-lineups/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
