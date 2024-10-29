import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 px-2 flex justify-center">
        <div className="flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Red
          </button>
          <button 
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Green
          </button>
          <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Blue
          </button>
          <button 
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Yellow
          </button>
          <button 
            onClick={() => setColor("black")}
            className="outline-none px-4 py-2"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Black
          </button>
          <button 
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button 
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-2"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button 
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-2"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
