import axios, { Axios } from 'axios';

import { ADDNEW_TODO } from './type';


const apiUrl = 'http://localhost:8000';

export const addTodo = (data) => async (dispatch) => {
    try {
      const res = await axios.post(`${apiUrl}/todos`, {data})
        dispatch({ type: ADDNEW_TODO , payload: res.data });

    } catch (error) {
        console.log(`Error in connecting to new todo api`, error.message);
    }
}