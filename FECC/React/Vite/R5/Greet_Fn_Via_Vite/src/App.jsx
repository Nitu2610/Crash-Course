import { useState } from "react";
import "./App.css";
import { GreetingCard } from "./components/GreetGn";

let arr = [
  { greet: "Good Morning", name: "Nitesh" },
  { greet: "Good Evening", name: "Nitesh Kumar" },
  { greet: "Good Night", name: "Nitesh Kumar Prajapath" },
];
function App() {
  const [state, setState] = useState(arr);

  return (
    <>
      {state.map((item, index) => {
        let { greet, name } = item;
        return <GreetingCard key={index} greeting={greet} name={name} />;
      })}
    </>
  );
}

export default App;
