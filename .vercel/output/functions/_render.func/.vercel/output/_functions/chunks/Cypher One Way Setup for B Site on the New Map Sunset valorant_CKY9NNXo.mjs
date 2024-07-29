import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Cypher One Way Setup for B Site on the New Map Sunset valorant","agent":"Cypher","map":"Sunset","site":"B","isAttacking":false,"isUlt":false,"video":"https://www.youtube.com/embed/qLCrFCuzCjY?si=onLOx-8TKraUr9J3"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Cypher One Way Setup for B Site on the New Map Sunset valorant.md";
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
