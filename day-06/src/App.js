import React, { useState } from "react";
import ListData from "./data";

const App = () => {
  const [duration, setDuration] = useState();
  const addToCard = (item) => {
    setDuration(item.duration);
  };
  return (
    <div>
      <div>
        Left side
        <ul>
          <li>
            {ListData.map((item) => (
              <div key={item.id}>
                {/* <img src="" alt="" /> */}
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <p>{item.ageRange}</p>
                <p>{item.duration}</p>
                <button onClick={() => addToCard(item)}>Add to list</button>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div>Right Side

        <h1>{duration}</h1>
      </div>
    </div>
  );
};
export default App;
