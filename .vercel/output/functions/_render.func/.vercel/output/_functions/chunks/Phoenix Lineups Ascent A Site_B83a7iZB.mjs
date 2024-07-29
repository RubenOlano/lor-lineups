import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"phoenix-lineups-ascent-a-site-1\">Phoenix Lineups: Ascent A Site #1</h1>\n<p>Slows down pushes from A main in the early round.</p>";

				const frontmatter = {"map":"Ascent","agent":"Phoenix","isAttacking":false,"site":"A","isUlt":false,"video":"https://www.youtube.com/embed/pl-dHosw9Mw?si=f7yWcLbFB8fgfhA7","images":[],"title":"Phoenix Lineups Ascent a Site"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Phoenix Lineups Ascent A Site.md";
				const url = undefined;
				function rawContent() {
					return "\n# Phoenix Lineups: Ascent A Site #1\n\nSlows down pushes from A main in the early round.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"phoenix-lineups-ascent-a-site-1","text":"Phoenix Lineups: Ascent A Site #1"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
