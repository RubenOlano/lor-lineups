import Abyss from "@/images/maps/Abyss.webp";
import Ascent from "@/images/maps/Ascent.webp";
import Bind from "@/images/maps/Bind.webp";
import Breeze from "@/images/maps/Breeze.webp";
import Fracture from "@/images/maps/Fracture.webp";
import Haven from "@/images/maps/Haven.webp";
import Icebox from "@/images/maps/Icebox.webp";
import Lotus from "@/images/maps/Lotus.webp";
import Pearl from "@/images/maps/Pearl.webp";
import Split from "@/images/maps/Split.webp";
import Sunset from "@/images/maps/Sunset.webp";
import DefaultIcon from "@/images/Default Icon.webp";

export const mapMap: Record<string, ImageMetadata> = {
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
  sunset: Sunset,
};

export const mapList = Object.keys(mapMap);

export function getMapImage(map: string): ImageMetadata {
  return mapMap[map.toLowerCase()] ?? DefaultIcon;
}
