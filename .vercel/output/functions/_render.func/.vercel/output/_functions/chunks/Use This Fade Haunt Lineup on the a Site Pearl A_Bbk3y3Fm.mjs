import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Use This Fade Haunt Lineup on the a Site Pearl A","agent":"Fade","map":"Pearl","site":"A","isAttacking":true,"isUlt":false,"video":"https://www.youtube.com/embed/5KtGxnnzlRM?si=F5dsROfl3FarVgOM"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Use This Fade Haunt Lineup on the a Site Pearl A.md";
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
