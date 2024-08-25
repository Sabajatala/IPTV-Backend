import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		episodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode' }, 
        time: { type: Number, default: () => Math.floor(Date.now() / 1000) },
			
			
		  
	},
	{ timestamps: true }
);
export const StreamModel = mongoose.model("Stream", schema);
