import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = () => {

const MONGODB_URL =
  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.p5hbnxy.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Your Database is connected');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Your Database is disconnected');
    })

    mongoose.connection.on('error', () => {
        console.error("Error with connection to database", error.message);
    })
}
export default Connection;