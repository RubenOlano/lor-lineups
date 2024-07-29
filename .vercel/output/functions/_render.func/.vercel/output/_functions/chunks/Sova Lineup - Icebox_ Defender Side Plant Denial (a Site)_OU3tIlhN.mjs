import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Sova Lineup - Icebox, Defender Side Plant Denial (a Site)","agent":"Sova","map":"Icebox","isAttacking":false,"isUlt":false,"site":"A","video":"https://www.youtube.com/embed/AK5JS8Mn2hE?si=U9TMcR80BXqsgdPN"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Sova Lineup - Icebox, Defender Side Plant Denial (a Site).md";
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
