import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

//components
import Todo from "./Todo"

export const Todos = () => {

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    console.log(todos);
    dispatch(getAllTodos());
  }, []);

  return (
    <article>
      <ul>
        {
          todos.map(element => 
    
              element.map((todo) =>{
                console.log(todo.data);
                return (

                 <Todo todo={todo}/>
                );
            
              }
              )  
          )
        }

      </ul>
    </article>
  );
};

export default Todos;
