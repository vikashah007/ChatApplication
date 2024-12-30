import mongoose from "mongoose";

const connectToMongoDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Database Connected Sucessfully")
    } catch (error) {
        console.log("Error Connecting to database : " , error.message);
    }
}

export default connectToMongoDb;