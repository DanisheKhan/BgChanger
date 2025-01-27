import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <> 
      <div
        className="h-96 w-96 rounded-xl m-auto "
        style={{ backgroundColor: color }}
      ></div>

      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        <button
          className="py-2 px-4 rounded-md "
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="py-2 px-4 rounded-md "
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="py-2 px-4 rounded-md "
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="py-2 px-4 rounded-md "
          style={{ backgroundColor: "gray" }}
          onClick={() => setColor("gray")}
        >
          Gray
        </button>
        <button
          className="py-2 px-4 rounded-md "
          style={{ backgroundColor: "purple" }}
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
        <button
          className="py-2 px-4 rounded-md "
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
      </div>
    </>
  );
}

export default App;
