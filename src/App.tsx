import { useMachine } from "@xstate/react";
import { rootMachine } from "./machines/rootMachine";

function App() {
  const [state] = useMachine(rootMachine);

  console.log("state", state);

  return <div>App</div>;
}

export default App;
