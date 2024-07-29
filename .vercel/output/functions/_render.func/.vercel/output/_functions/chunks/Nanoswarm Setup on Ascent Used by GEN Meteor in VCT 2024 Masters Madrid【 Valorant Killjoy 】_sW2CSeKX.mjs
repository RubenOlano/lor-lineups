import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Nanoswarm Setup on Ascent Used by GEN Meteor in VCT 2024 Masters Madrid【 Valorant Killjoy 】","agent":"Killjoy","isAttacking":false,"site":"B","isUlt":false,"video":"https://www.youtube.com/embed/zkKBTx51vJk?si=zNHgC4bG4JiM3EOV","images":[],"map":"Ascent"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Nanoswarm Setup on Ascent Used by GEN Meteor in VCT 2024 Masters Madrid【 Valorant Killjoy 】.md";
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
