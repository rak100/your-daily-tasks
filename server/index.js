import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import routes from "./routes/route.js";


const app = express();

app.use(cors());

app.use('/', routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = 8000;

Connection();


app.listen(PORT, () => console.log(`Server running Successfully ${PORT}`));