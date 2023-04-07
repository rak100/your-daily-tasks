import axios from 'axios';

import { ADDNEW_TODO, GETALL_TODO } from "./type";


const apiUrl = 'http://localhost:8000';

export const addTodo = (data) => async (dispatch) => {
    try {
      const res = await axios.post(`${apiUrl}/todos`, {data});
        dispatch({ type: ADDNEW_TODO , payload: res.data });

    } catch (error) {
        console.log(`Error while adding New Todo`, error.message);
    }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/todos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log(`Error while getting All todos from Database`, error.message);
  }
}