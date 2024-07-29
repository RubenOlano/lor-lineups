import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Valorant Cypher Setup (Fracture a Site)","site":"A","agent":"Cypher","map":"Fracture","video":"https://www.youtube.com/embed/4L7AE5SYZjE?si=VJCfzBOJ5ckgwwg5","isAttacking":false,"isUlt":false};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Valorant Cypher Setup (Fracture A Site).md";
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
