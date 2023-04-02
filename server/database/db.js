import mongoose, { Error } from "mongoose";

const Connection = () => {

const MONGODB_URL = 'mongodb+srv://rak100:ahmad123@cluster0.p5hbnxy.mongodb.net/?retryWrites=true&w=majority';

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