import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"phoenix-lineups-bind-a-site-1\">Phoenix Lineups: Bind A Site #1</h1>\n<p>This Phoenix molly hits from A main cubby from lamps/u-hall. It’s a great way to slow down pushes from A main in the early round or to clear out a lurker in the cubby.</p>";

				const frontmatter = {"title":"Phoenix Lineups Bind A Site","map":"Bind","agent":"Phoenix","isAttacking":false,"site":"A","isUlt":false,"video":"https://www.youtube.com/embed/mCIKuOY2iZE?si=AKZBvu5hBXt-4Jsf"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/Phoenix Lineups Bind A Site.md";
				const url = undefined;
				function rawContent() {
					return "\n# Phoenix Lineups: Bind A Site #1\n\nThis Phoenix molly hits from A main cubby from lamps/u-hall. It's a great way to slow down pushes from A main in the early round or to clear out a lurker in the cubby.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"phoenix-lineups-bind-a-site-1","text":"Phoenix Lineups: Bind A Site #1"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
