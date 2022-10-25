import React, { useState } from "react";
import "./App.css";

interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

function App() {
  // const [number, setNumber] = useState<number | string>(5);
  const [subs, setSubs] = useState<Array<Sub>>([]);

  return (
    <div className="App">
      <h1>Subs</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick}(<small>{sub.subMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
