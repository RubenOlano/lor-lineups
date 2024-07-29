const DefaultIcon = new Proxy({"src":"/_astro/Default Icon.ZhQKbfrD.webp","width":128,"height":128,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/Default Icon.webp";
							}
							
							return target[name];
						}
					});

export { DefaultIcon as D };
