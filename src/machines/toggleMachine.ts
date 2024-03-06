import { createActorContext } from "@xstate/react";
import { setup } from "xstate";

export const toggleMachine = setup({
  types: {
    context: {} as {},
    events: {} as { type: "TOGGLE" },
  },
  actions: {
    toggle: ({ context, event }) => {
      console.log("context", context);
    },
  },
  schemas: {
    events: {
      TOGGLE: {
        type: "object",
        properties: {},
      },
    },
  },
}).createMachine({
  context: ({ input }) => ({
    parent: input?.parent,
    color: input?.color,
  }),
  id: "toggle",
  initial: "inactive",
  states: {
    active: {
      on: {
        TOGGLE: {
          target: "inactive",
        },
      },
    },
    inactive: {
      on: {
        TOGGLE: {
          target: "active",
        },
      },
    },
  },
});

export const ToggleContext = createActorContext(toggleMachine);
