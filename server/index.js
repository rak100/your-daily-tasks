import express from "express";
import Connection from "./database/db.js";

const App = express();

const PORT = 8000;

Connection();

App.listen(PORT, () => console.log(`Server running Successfully ${PORT}`));