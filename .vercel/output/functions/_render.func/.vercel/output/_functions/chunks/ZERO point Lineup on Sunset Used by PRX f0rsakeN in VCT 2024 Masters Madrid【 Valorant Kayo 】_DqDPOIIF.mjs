import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ZERO point Lineup on Sunset Used by PRX f0rsakeN in VCT 2024 Masters Madrid【 Valorant Kayo 】","agent":"Kayo","map":"Sunset","site":"B","isAttacking":true,"isUlt":false,"video":"https://www.youtube.com/embed/diukhjvmxxE?si=iHQywFMc63sttPs3"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/ZERO point Lineup on Sunset Used by PRX f0rsakeN in VCT 2024 Masters Madrid【 Valorant Kayo 】.md";
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
