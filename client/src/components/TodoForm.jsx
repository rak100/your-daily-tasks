import { useState } from "react";
import { addTodo } from "../redux/actions"; 
import { useDispatch } from "react-redux"; 


const TodoForm = () => { 
  const dispatch = useDispatch();

const [text, setText] = useState("");

const onFormSubmit = (e) =>{
  e.preventDefault();
   dispatch(addTodo(text));

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
