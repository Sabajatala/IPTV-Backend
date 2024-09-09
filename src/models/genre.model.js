import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
		name: {type: String,unique: true, default: ''},
	    description: { type: String, default: '' }, 
		status: {  type: String, enum: ['active', 'inactive'], default: 'active' },
			// image: { type: String },
			// url: { type: String }
	},
	{ timestamps: true }
);
export const GenreModel = mongoose.model("Genre", schema);
