export const agentMap: Record<string, string> = {
  astra: "/agents/Astra icon.webp",
  breach: "/agents/Breach icon.webp",
  brimstone: "/agents/Brimstone icon.webp",
  chamber: "/agents/Chamber icon.webp",
  clove: "/agents/Clove icon.webp",
  cypher: "/agents/Cypher icon.webp",
  deadlock: "/agents/Deadlock icon.webp",
  fade: "/agents/Fade icon.webp",
  gekko: "/agents/Gekko icon.webp",
  harbor: "/agents/Harbor icon.webp",
  iso: "/agents/Iso icon.webp",
  jett: "/agents/Jett icon.webp",
  kayo: "/agents/Kayo icon.webp",
  killjoy: "/agents/Killjoy icon.webp",
  neon: "/agents/Neon icon.webp",
  omen: "/agents/Omen icon.webp",
  phoenix: "/agents/Phoenix icon.webp",
  raze: "/agents/Raze icon.webp",
  reyna: "/agents/Reyna icon.webp",
  sage: "/agents/Sage icon.webp",
  skye: "/agents/Skye icon.webp",
  sova: "/agents/Sova icon.webp",
  viper: "/agents/Viper icon.webp",
  yoru: "/agents/Yoru icon.webp",
};

export function getAgentImage(agent: string): string {
  agent = agent.toLowerCase();
  return agentMap[agent] ?? "/Default icon.webp";
}
