import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        // Attempt to connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        // Catch and log any connection errors
        console.error("Error connecting to MongoDB:", error);
    }
};

export default dbConnection;
