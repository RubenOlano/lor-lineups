import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Basic cypher setup on B site on Ascent</p>";

				const frontmatter = {"agent":"Cypher","map":"Ascent","isAttacking":false,"site":"B","isUlt":false,"video":"https://www.youtube.com/embed/vGy0Rgy7izQ?si=qgB_R7-gOZMMv5Um","images":[],"title":"Cypher B Site Setup on Ascent"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/CYPHER-B-ASCENT.md";
				const url = undefined;
				function rawContent() {
					return "Basic cypher setup on B site on Ascent\n";
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
