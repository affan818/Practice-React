import { useState } from "react";
import "../Component/ToDo.css";

const ToDo = () => {
  const [task, setTask] = useState("");
  const onchange = (e) => setTask(e.target.value);


  const [input, setInput] = useState(task);
  //  const Input = <input type='checkbox'/>
  const click = () => setInput(task);
  //  const Task = (props) => <ul>{props.task}</ul>
  return (
    <>
      <form action="task">
        <input
          className="text"
          type="text"
          placeholder="task..."
          id="a"
          onChange={onchange}
        />
        <button type="button" onClick={click}>
          ADD TASK
        </button>
        <br />
        {/* <Task task = {input}/> */}
        <h1>{input}</h1>
      </form>
    </>
  );
};

export default ToDo;
