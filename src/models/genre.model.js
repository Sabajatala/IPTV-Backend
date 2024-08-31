import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
		id: {
			type: mongoose.Schema.Types.ObjectId,
			auto: true,
		},
		
		name: {
			type: String,
			unique: true
		},
			description: { type: String, default: '' }, 
			status: { 
			  type: String, 
			  enum: ['active', 'inactive'], 
			  default: 'active' 
			},
			
		  
	},
	{ timestamps: true }
);
export const GenreModel = mongoose.model("Genre", schema);
