import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data] = useState([
    { name: "Dolo1", description: "dooooolllooo", price: 80 },
    { name: "Dolo2", description: "doooo2", price: 90 },
    { name: "Dolo3", description: "dooooo3", price: 100 },
    { name: "Dolo4", desiption: "doooo4 ", price: 180 },
    { name: "Doo5", description: "dooooo6", price: 120 },
    { name: "Dolo7", description: "dooollo 7", price: 200 },
    { name: "Dolo8", description: "dooooo9", price: 1700 }
  ]);

  return (
    <div className="list-wrappper">
      {data.map((item, index) => {
        return (
          <div className="list" key={index.toString()}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
