import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch } from "react-redux";



export const Todos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllTodos());
    }, [ dispatch]);


    return (
        <div>Hello from todo </div>
    )
}

export default Todos;