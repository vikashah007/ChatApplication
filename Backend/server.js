import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
import messageRoutes from "./routes/message.routes.js"
import userRoute from "./routes/user.route.js"

dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000 ;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoute)

app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server is running at ${PORT} PORT `)
}) 




// app.get("/",(req,res)=>{
//     res.send("This is my root route")
// })