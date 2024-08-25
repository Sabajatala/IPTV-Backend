import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    trailerId: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true }, 
    thumbnailId: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true }, 
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }], 
    
},
{ timestamps: true }
);
export const SeriesModel = mongoose.model("Series", Schema);

