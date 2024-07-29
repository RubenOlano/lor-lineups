import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Split Kayo Super Easy Ct a Push Popflash from Heaven","agent":"Kayo","map":"Split","site":"A","isAttacking":false,"isUlt":false,"video":"https://www.youtube.com/embed/DXoE4dJqFkQ?si=gzPgg3DUnMawyuaH"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Split Kayo Super Easy Ct a Push Popflash from Heaven.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
