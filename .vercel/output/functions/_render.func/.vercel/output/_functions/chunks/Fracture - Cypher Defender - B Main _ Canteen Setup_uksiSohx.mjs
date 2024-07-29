import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Fracture - Cypher Defender - B Main & Canteen Setup","agent":"Cypher","map":"Fracture","isAttacking":false,"site":"B","video":"https://www.youtube.com/embed/735t-uS7WQQ?si=nfyGA1PoKQsAH2jW","isUlt":false};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Fracture - Cypher Defender - B Main & Canteen Setup.md";
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
