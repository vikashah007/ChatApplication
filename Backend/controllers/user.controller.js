import User from "../models/user.model.js";

export const getUsersForSidebars=async(req,res,next)=>{
    try {
        const loggedInUser=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUser}}).select("-password")
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getUsersForSidebars Controller",error.message)
        res.status(500).json({
            error:"Internal server Error"
        })
    }
}