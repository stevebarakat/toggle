import { setup } from "xstate";

export const rootMachine = setup({
  types: {
    context: {} as {},
    events: {} as { type: "spawnToggles" },
  },
  actions: {
    spawnToggles: () => console.log("message"),
  },
}).createMachine({
  context: {},
  initial: "ready",
  entry: () => "spawnToggles",
  states: {
    ready: {},
  },
});
