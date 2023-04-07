import express, { request, response } from "express";
// import {getAllTodos} from "../../client/src/redux/actions/index.js";
import { addTodo, getAllTodos } from "../controllers/todo-controller.js";

const route = express.Router();

route.post("/todos", addTodo);

route.get("/todos", getAllTodos);

export default route;