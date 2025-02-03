import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [task, settask] = useState([]);
  const [done, setdon] = useState([]);
  const inputref = useRef();
  const addtask = () => {
    const newi = inputref.current.value.trim();
    if (newi) {
      settask([...task, newi]);
      inputref.current.value = "";
    }
  };
  const remouv = (index) => {
    const newii = [...task];
    newii.splice(index, 1);
    settask(newii);
  };
  const addtodone = (index) => {
    const newd = [...done];
    const tt = [...task];
    newd.push(tt[index]);
    tt.splice(index, 1);
    settask(tt);
    setdon(newd);
  };
  const remouv2 = (index) => {
    const newii = [...done];
    newii.splice(index, 1);
    setdon(newii);
  };
  const backap = (index) => {
    const tas = [...task];
    const doo = [...done];
    tas.push(doo[index]);
    doo.splice(index, 1);
    settask(tas);
    setdon(doo);
  };
  return (
    <>
      <div className="bood">
        <div className="bood1">
          <h1>Task Schedule</h1>
          <ul>
            {task.map((newi, index) => (
              <li key={index}>
                <span className="string">{newi}</span>
                <span className="click" onClick={() => addtodone(index)}>✅</span>
                <span className="click" onClick={() => remouv(index)}>🗑</span>
              </li>
            ))}
          </ul>
          <input ref={inputref} type="text" placeholder="Enter Your Task" />
          <button onClick={addtask}>Add</button>
        </div>
        <div className="bood2">
          <h1>I Have Completed This Task</h1>
          <ul>
            {done.map((newii, index) => (
              <li key={index}>
                <span className="string">{newii}</span>
                <span className="click" onClick={() => backap(index)}>♻️</span>
                <span className="click" onClick={() => remouv2(index)}>🗑</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
