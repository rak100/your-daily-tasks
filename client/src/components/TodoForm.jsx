import { useState } from "react";
import { addTodo } from "../redux/actions"; 
import { useDispatch } from "react-redux"; 


const TodoForm = () => { 
  const dispatch = useDispatch();

const [text, setText] = useState("");

const onFormSubmit = (e) =>{
  e.preventDefault();
   dispatch(addTodo(text));

   setText("");

}
   const onInputChange = (e) =>{
    setText(e.target.value);
    }
  return (
    <form onSubmit={onFormSubmit}>
      <input className="task_input"
        placeholder="Enter your task here"
        onChange={onInputChange} 
        value={text}
        />
      




    </form>

   
  );
};
export default TodoForm;
