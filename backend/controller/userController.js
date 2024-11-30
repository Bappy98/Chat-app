import User from "../model/userModel.js";

export const getUserForSidebar = async(req,res) => {
    try {

        const loggedUserId = req.user._id

        const filterUsers = await User.find({_id:{ $ne:loggedUserId }}).select('-password')

        res.status(200).json(filterUsers)
        
    } catch (error) {
        console.log("Error in getUserForSidebar controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
    }
}