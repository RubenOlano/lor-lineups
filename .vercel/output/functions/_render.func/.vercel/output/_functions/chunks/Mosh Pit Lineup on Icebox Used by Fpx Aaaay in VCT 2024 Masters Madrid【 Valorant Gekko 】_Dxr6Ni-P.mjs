import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Mosh Pit Lineup on Icebox Used by Fpx Aaaay in VCT 2024 Masters Madrid【 Valorant Gekko 】","agent":"Gekko","map":"Icebox","isAttacking":true,"isUlt":false,"site":"A","video":"https://www.youtube.com/embed/EBZRfnxMVWQ?si=hVZo8Q6nIi3ZOFtR"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Mosh Pit Lineup on Icebox Used by Fpx Aaaay in VCT 2024 Masters Madrid【 Valorant Gekko 】.md";
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
