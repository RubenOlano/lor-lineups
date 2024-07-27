import AstraIcon from "@/images/agents/Astra icon.webp";
import BreachIcon from "@/images/agents/Breach icon.webp";
import BrimstoneIcon from "@/images/agents/Brimstone icon.webp";
import ChamberIcon from "@/images/agents/Chamber icon.webp";
import CloveIcon from "@/images/agents/Clove icon.webp";
import CypherIcon from "@/images/agents/Cypher icon.webp";
import DeadlockIcon from "@/images/agents/Deadlock icon.webp";
import FadeIcon from "@/images/agents/Fade icon.webp";
import GekkoIcon from "@/images/agents/Gekko icon.webp";
import HarborIcon from "@/images/agents/Harbor icon.webp";
import IsoIcon from "@/images/agents/Iso icon.webp";
import JettIcon from "@/images/agents/Jett icon.webp";
import KayoIcon from "@/images/agents/Kayo icon.webp";
import KilljoyIcon from "@/images/agents/Killjoy icon.webp";
import NeonIcon from "@/images/agents/Neon icon.webp";
import OmenIcon from "@/images/agents/Omen icon.webp";
import PhoenixIcon from "@/images/agents/Phoenix icon.webp";
import RazeIcon from "@/images/agents/Raze icon.webp";
import ReynaIcon from "@/images/agents/Reyna icon.webp";
import SageIcon from "@/images/agents/Sage icon.webp";
import SkyeIcon from "@/images/agents/Skye icon.webp";
import SovaIcon from "@/images/agents/Sova icon.webp";
import ViperIcon from "@/images/agents/Viper icon.webp";
import YoruIcon from "@/images/agents/Yoru icon.webp";
import DefaultIcon from "@/images/Default Icon.webp";

export const agentMap: Record<string, ImageMetadata> = {
  astra: AstraIcon,
  breach: BreachIcon,
  brimstone: BrimstoneIcon,
  chamber: ChamberIcon,
  clove: CloveIcon,
  cypher: CypherIcon,
  deadlock: DeadlockIcon,
  fade: FadeIcon,
  gekko: GekkoIcon,
  harbor: HarborIcon,
  iso: IsoIcon,
  jett: JettIcon,
  kayo: KayoIcon,
  killjoy: KilljoyIcon,
  neon: NeonIcon,
  omen: OmenIcon,
  phoenix: PhoenixIcon,
  raze: RazeIcon,
  reyna: ReynaIcon,
  sage: SageIcon,
  skye: SkyeIcon,
  sova: SovaIcon,
  viper: ViperIcon,
  yoru: YoruIcon,
};

export const agentList = Object.keys(agentMap);

export function getAgentImage(agent: string): ImageMetadata {
  agent = agent.toLowerCase();
  return agentMap[agent] ?? DefaultIcon;
}
