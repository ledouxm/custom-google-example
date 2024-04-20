import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ExampleQuery } from "./components/ExampleQuery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExampleQuery />
    </div>
  );
}

export default App;
