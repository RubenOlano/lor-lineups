import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"ascent-b-site-defense\">Ascent B Site Defense</h1>\n<p>This is a basic steup for Killjoy on Ascent B Site Defense. This places the turret back in CT where it barely peaks out which makes it difficult to shoot.\nThe alarm bot sits in lane to vulnerable enemies. Nanoswarm hits both the entrance and lane/boat</p>";

				const frontmatter = {"map":"Ascent","agent":"Killjoy","isAttacking":false,"site":"B","isUlt":false,"video":"https://www.youtube.com/embed/aNUC-pRHvE0?si=TVCjQ0UA5k3anDSn","images":[],"title":"Killjoy B Site Defense on Ascent"};
				const file = "/Users/ruben/lor-lineups/src/content/setup/KJ-BMAIN-ASCENT.md";
				const url = undefined;
				function rawContent() {
					return "\n# Ascent B Site Defense\n\nThis is a basic steup for Killjoy on Ascent B Site Defense. This places the turret back in CT where it barely peaks out which makes it difficult to shoot.\nThe alarm bot sits in lane to vulnerable enemies. Nanoswarm hits both the entrance and lane/boat\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"ascent-b-site-defense","text":"Ascent B Site Defense"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
