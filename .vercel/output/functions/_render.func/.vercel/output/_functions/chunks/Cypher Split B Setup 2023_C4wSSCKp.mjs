import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Cypher Split B Setup | 2023","agent":"Cypher","site":"B","map":"Split","isAttacking":false,"isUlt":false,"video":"https://www.youtube.com/embed/jatDwxX0Lew?si=KWdifa4QpGfjdP5R"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Cypher Split B Setup 2023.md";
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
