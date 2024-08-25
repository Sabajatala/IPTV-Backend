import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    seriesId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Series',
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,}
    }, 
{ timestamps: true }
);
export const SeasonsModel = mongoose.model("Season", Schema);

