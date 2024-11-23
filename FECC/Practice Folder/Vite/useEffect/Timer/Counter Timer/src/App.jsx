import { useState } from "react";
import "./App.css";
import { Timer } from "./component/Timer";

function App() {
  const [isMount, setIsMount] = useState(true);
  const [buttonText, setButtonText] = useState("Unmount");

  function mountUnmountBtn() {
    if (buttonText === "Mount") {
      setButtonText("Unmount");
      setIsMount(true);
    } else {
      setButtonText("Mount");
      setIsMount(false);
    }
  }

  return (
    <>
      {isMount ? <Timer /> : null}
      <div id="mountToggler">
      <button onClick={mountUnmountBtn}>{buttonText}</button>
      </div>
    </>
  );
}

export default App;
