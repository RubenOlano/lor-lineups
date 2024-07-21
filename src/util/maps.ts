export const mapMap: Record<string, string> = {
  abyss: "/maps/Abyss.webp",
  ascent: "/maps/Ascent.webp",
  bind: "/maps/Bind.webp",
  breeze: "/maps/Breeze.webp",
  fracture: "/maps/Fracture.webp",
  haven: "/maps/Haven.webp",
  icebox: "/maps/Icebox.webp",
  lotus: "/maps/Lotus.webp",
  pearl: "/maps/Pearl.webp",
  split: "/maps/Split.webp",
  sunset: "/maps/Sunset.webp",
};

export function getMapImage(map: string): string {
  return mapMap[map.toLowerCase()] ?? "/Default Icon.webp";
}
