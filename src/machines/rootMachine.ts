import { assign, setup } from "xstate";
import { toggleMachine } from "./toggleMachine";

export const rootMachine = setup({
  types: {
    context: {} as {},
    events: {} as { type: "spawnToggles" },
  },
  actions: {
    spawnToggles: assign(({ context, spawn, self }) => {
      const blueRef = spawn(toggleMachine, {
        id: "blue",
        input: {
          parent: self,
          color: "blue",
        },
      });
      return { blueRef };
    }),
  },
}).createMachine({
  context: ({ input }) => ({
    color: input?.color,
    parent: input?.parent,
  }),
  initial: "ready",
  entry: () => "spawnToggles",
  states: {
    ready: {},
  },
});
