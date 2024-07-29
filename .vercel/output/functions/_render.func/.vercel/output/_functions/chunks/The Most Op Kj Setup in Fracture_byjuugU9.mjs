import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"The Most Op Kj Setup in Fracture","agent":"Killjoy","map":"Fracture","isAttacking":true,"site":"A","isUlt":false,"video":"https://www.youtube.com/embed/FOh1s15ujaw?si=7B8w_gOgwcdeO7u6"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/The Most Op Kj Setup in Fracture.md";
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
