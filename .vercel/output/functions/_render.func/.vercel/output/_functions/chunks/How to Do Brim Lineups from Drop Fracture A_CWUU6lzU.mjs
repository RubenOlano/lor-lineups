import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"How to Do Brim Lineups from Drop Fracture A","agent":"Brimstone","map":"Fracture","site":"A","isAttacking":true,"video":"https://www.youtube.com/embed/mesi2-xit_M?si=QT57-hMEse8Mi2Fx","isUlt":false};
				const file = "/Users/ruben/lor-lineups/src/content/setup/How to Do Brim Lineups from Drop Fracture A.md";
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
