import { useMachine } from "@xstate/react";
import { rootMachine } from "./machines/rootMachine";
import Blue from "./components/Blue";
import { ToggleContext } from "./machines/toggleMachine";

function App() {
  const [state] = useMachine(rootMachine);

  console.log("state", state);

  return (
    // <ToggleContext.Provider>
    <Blue />
    // </ToggleContext.Provider>
  );
}

export default App;
