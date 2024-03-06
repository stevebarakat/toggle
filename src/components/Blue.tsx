import React from "react";
import { ToggleContext } from "../machines/toggleMachine";
import { useMachine } from "@xstate/react";
import { rootMachine } from "../machines/rootMachine";

function Blue() {
  const [state] = useMachine(rootMachine);
  const { send } = ToggleContext.useActorRef();
  const { context } = ToggleContext.useSelector((s) => s);
  console.log("context", context);
  console.log("state.context.blueRef", state.context);
  return <button onClick={() => send({ type: "TOGGLE" })}>Blue</button>;
}

export default Blue;
