import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
		firstname: {type: String,required: true,},
		lastname: {type: String,required: true,},
	    email: {type: String,required: true,unique: true,},
	    password: {type: String,required: true,},
			
			
		  
	},
	{ timestamps: true }
);
export const UserModel = mongoose.model("User", schema);
