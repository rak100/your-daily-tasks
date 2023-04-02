import { useState } from "react";


const TodoForm = () => { 


const [text, setText] = useState("");

const onFormSubmit = () =>{

}
   const onInputChange = (e) =>{
    setText(e.target.value);
    }
  return (
    <form onSubmit={onFormSubmit}>
      <input className="task_input"
        placeholder="Enter your task here"
        onChange={onInputChange} />
    </form>
  );
};
export default TodoForm;
