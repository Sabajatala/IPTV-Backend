import mongoose from 'mongoose';

const Schema = mongoose.Schema(
    {
    id: {type: mongoose.Schema.Types.ObjectId, auto: true,},
    seasonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Season', required: true, },
    name: { type: String,required: true, trim: true,},
    description: { type: String, required: true, trim: true,},
    thumbnailId: { type: mongoose.Schema.Types.ObjectId,  ref: 'File',    required: true, }
},
 {
    timestamps: true, 
}
);

export const EpisodeModel = mongoose.model('Episode', Schema);
