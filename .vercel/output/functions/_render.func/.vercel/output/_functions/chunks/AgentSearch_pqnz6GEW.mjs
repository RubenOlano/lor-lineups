import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro } from './astro/server_DsBdfpWL.mjs';
import 'kleur/colors';
import 'clsx';
import { b as agentList } from './agents_xbrzBIL9.mjs';

const $$Astro = createAstro();
const $$AgentSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AgentSearch;
  const uniqueAgents = agentList.map(
    (agent) => agent[0].toUpperCase() + agent.slice(1)
  );
  const { currentAgent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-4"> <label for="agent" class="text-lg font-semibold text-gray-800">Agent</label> <div class="relative"> <input type="text" list="agents"${addAttribute(currentAgent ? `${currentAgent[0].toUpperCase()}${currentAgent.slice(1)}` : "", "value")} class="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-500" placeholder="Select an Agent" autofocus autocomplete="agents" tabindex="0"> <datalist id="agents"> <option value="" disabled>Select an Agent</option> <option value="">All Agents</option> ${uniqueAgents.map((agent) => renderTemplate`<option${addAttribute(agent, "value")}${addAttribute(agent.toLowerCase() === currentAgent, "selected")}> ${agent} </option>`)} </datalist> </div> </div> `;
}, "/Users/ruben/lor-lineups/src/components/AgentSearch.astro", void 0);

export { $$AgentSearch as $ };
