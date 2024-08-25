import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
		id: { type: String,  maxlength: 50 },
		name: {type: String,required: true,unique: true,},
	   
			
			
		  
	},
	{ timestamps: true }
);
export const GenreModel = mongoose.model("Genre", schema);
