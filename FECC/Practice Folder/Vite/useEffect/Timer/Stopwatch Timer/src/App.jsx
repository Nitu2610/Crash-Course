import { useState } from "react";
import "./App.css";
import { Stopwatch } from "./components/Stopwatch";

function App() {
  let [isMount, setIsMount] = useState(true);
  let [buttonText, setButtonText] = useState("Unmount");

  const handleToggler = () => {
    if (buttonText === "Unmount") {
      setButtonText("Mount");
      setIsMount(!isMount);
    } else {
      setButtonText("Unmount");
      setIsMount(!isMount);
    }
  };
  return (
    <>
      {isMount ? <Stopwatch /> : null}
      <br />
      <div id="TogglerBtn">
        <button className="" onClick={handleToggler}>
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default App;
