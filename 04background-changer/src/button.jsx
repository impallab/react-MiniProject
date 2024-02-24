import React, { useState, useEffect } from "react";

function Button() {
  const [color, paintColor] = useState("grey");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div id="buttonBox" className="fixed p-2 bg-white rounded-xl ml-80">
        <button className="py-2 px-5 mx-2 text-white rounded-3xl bg-red-400" onClick={() => paintColor("red")}>Click</button>
        <button className="py-2 px-5 mx-2 text-white rounded-3xl bg-blue-400" onClick={() => paintColor("blue")}>Click</button>
        <button className="py-2 px-5 mx-2 text-white rounded-3xl bg-green-400" onClick={() => paintColor("green")}>Click</button>
        <button className="py-2 px-5 mx-2 text-white rounded-3xl bg-cyan-200" onClick={() => paintColor("cyan")}>Click</button>
        <button className="py-2 px-5 mx-2 text-white rounded-3xl bg-black" onClick={() => paintColor("black")}>Click</button>
        <button className="py-2 px-5 mx-2 text-white rounded-3xl bg-yellow-400" onClick={() => paintColor("yellow")}>Click</button>
        <button className="py-2 px-5 mx-2 text-white rounded-3xl bg-purple-400" onClick={() => paintColor("purple")}>Click</button>
        <button className="py-2 px-5 mx-2 text-white rounded-3xl bg-orange-400" onClick={() => paintColor("orange")}>Click</button>
        
      </div>
    </>
  );
}

export default Button;
