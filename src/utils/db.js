import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}${DB_NAME}`)
        console.log("MongoDB connected:", connectionInstance.connection.host);
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;