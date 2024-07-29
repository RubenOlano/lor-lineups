import { D as DefaultIcon } from './Default Icon_CDYYyQa9.mjs';

const Abyss = new Proxy({"src":"/_astro/Abyss.DaJqmFda.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Abyss.webp";
							}
							
							return target[name];
						}
					});

const Ascent = new Proxy({"src":"/_astro/Ascent.C8RXhcDE.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Ascent.webp";
							}
							
							return target[name];
						}
					});

const Bind = new Proxy({"src":"/_astro/Bind.Dgr8dfRK.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Bind.webp";
							}
							
							return target[name];
						}
					});

const Breeze = new Proxy({"src":"/_astro/Breeze.DFX7nlpQ.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Breeze.webp";
							}
							
							return target[name];
						}
					});

const Fracture = new Proxy({"src":"/_astro/Fracture.BKanGRH7.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Fracture.webp";
							}
							
							return target[name];
						}
					});

const Haven = new Proxy({"src":"/_astro/Haven.A8YIbWbS.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Haven.webp";
							}
							
							return target[name];
						}
					});

const Icebox = new Proxy({"src":"/_astro/Icebox.C7mVKheJ.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Icebox.webp";
							}
							
							return target[name];
						}
					});

const Lotus = new Proxy({"src":"/_astro/Lotus.BWEXVJsV.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Lotus.webp";
							}
							
							return target[name];
						}
					});

const Pearl = new Proxy({"src":"/_astro/Pearl.45u02Oxy.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Pearl.webp";
							}
							
							return target[name];
						}
					});

const Split = new Proxy({"src":"/_astro/Split.B2iI3SEh.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Split.webp";
							}
							
							return target[name];
						}
					});

const Sunset = new Proxy({"src":"/_astro/Sunset.BU9jzuMx.webp","width":1000,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ruben/lor-lineups/src/images/maps/Sunset.webp";
							}
							
							return target[name];
						}
					});

const mapMap = {
  abyss: Abyss,
  ascent: Ascent,
  bind: Bind,
  breeze: Breeze,
  fracture: Fracture,
  haven: Haven,
  icebox: Icebox,
  lotus: Lotus,
  pearl: Pearl,
  split: Split,
  sunset: Sunset
};
const mapList = Object.keys(mapMap);
function getMapImage(map) {
  return mapMap[map.toLowerCase()] ?? DefaultIcon;
}

export { mapMap as a, getMapImage as g, mapList as m };
