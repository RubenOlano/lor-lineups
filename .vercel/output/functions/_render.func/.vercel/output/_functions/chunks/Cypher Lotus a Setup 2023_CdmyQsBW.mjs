import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Cypher Lotus a Setup 2023","video":"https://www.youtube.com/embed/wPJWLE1aQjk?si=WPwR1k2ryiW6yMiq","agent":"Cypher","map":"Lotus","site":"A","isAttacking":false,"isUlt":false};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Cypher Lotus a Setup 2023.md";
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
