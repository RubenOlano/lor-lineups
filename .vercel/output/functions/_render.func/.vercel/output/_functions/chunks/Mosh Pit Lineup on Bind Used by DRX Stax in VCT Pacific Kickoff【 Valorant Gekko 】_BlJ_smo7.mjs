import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"mosh-pit-lineup-on-bind-used-by-drx-stax-in-vct-pacific-kickoff\">Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff</h1>\n<p>Line used in VCT from C Teleporter that hits center site</p>";

				const frontmatter = {"title":"Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff【 Valorant Gekko 】","agent":"Gekko","map":"Bind","isAttacking":true,"site":"C","isUlt":false,"video":"https://www.youtube.com/embed/SCR8rWvWg8A?si=wLTMsuo-lwea_zyX","images":[]};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff【 Valorant Gekko 】.md";
				const url = undefined;
				function rawContent() {
					return "\n# Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff\n\nLine used in VCT from C Teleporter that hits center site\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"mosh-pit-lineup-on-bind-used-by-drx-stax-in-vct-pacific-kickoff","text":"Mosh Pit Lineup on Bind Used by DRX Stax in VCT Pacific Kickoff"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
