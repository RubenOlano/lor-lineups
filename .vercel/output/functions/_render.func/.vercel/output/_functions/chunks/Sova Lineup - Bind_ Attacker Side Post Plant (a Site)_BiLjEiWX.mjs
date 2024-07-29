import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Sova Lineup - Bind, Attacker Side Post Plant (a Site)","map":"Bind","isAttacking":true,"site":"A","isUlt":false,"agent":"Sova","video":"https://www.youtube.com/embed/psc7Q24HUJc?si=lnf0Zgl9wYGzCLsA"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Sova Lineup - Bind, Attacker Side Post Plant (a Site).md";
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
