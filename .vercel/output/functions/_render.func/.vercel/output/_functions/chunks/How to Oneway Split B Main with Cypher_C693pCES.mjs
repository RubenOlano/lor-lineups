import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"How to Oneway Split B Main with Cypher","agent":"Cypher","site":"B","map":"Split","video":"https://www.youtube.com/embed/x9G5-VIxrHY?si=8Q0EvMNL0VT6VCD5","isAttacking":false,"isUlt":false};
				const file = "/Users/ruben/lor-lineups/src/content/setup/How to Oneway Split B Main with Cypher.md";
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
