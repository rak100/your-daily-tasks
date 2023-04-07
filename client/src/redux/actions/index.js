import axios from 'axios';

import { ADDNEW_TODO } from './type';


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
    // dispatch({ type: ADDNEW_TODO , payload: res.data });
  } catch (error) {
    console.log(`Error while getting All odos from Database`, error.message);
  }
}