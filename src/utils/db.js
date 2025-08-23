import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

// Construct the full URI properly
const MONGODB_URI = `${MONGO_URI}/${DB_NAME}`;

const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(MONGODB_URI);
		console.log('MongoDB connected:', connectionInstance.connection.host);
		return connectionInstance;
	} catch (error) {
		console.log('Error connecting to MongoDB:', error);
		throw error; // Don't exit process, let the calling function handle it
	}
};

// Health check function
export const checkDBHealth = async () => {
	try {
		if (mongoose.connection.readyState === 1) {
			// Connection is ready
			await mongoose.connection.db.admin().ping();
			return {
				status: 'healthy',
				message: 'MongoDB connection is active',
			};
		} else {
			return {
				status: 'unhealthy',
				message: 'MongoDB connection is not ready',
			};
		}
	} catch (error) {
		return { status: 'unhealthy', message: error.message };
	}
};

export default connectDB;
