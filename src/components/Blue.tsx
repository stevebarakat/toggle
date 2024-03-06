import { useMachine } from "@xstate/react";
import { toggleMachine } from "../machines/toggleMachine";

function Blue() {
  const [state, send] = useMachine(toggleMachine);
  console.log("state", state);
  return <button onClick={() => send({ type: "TOGGLE" })}>Blue</button>;
}

export default Blue;
