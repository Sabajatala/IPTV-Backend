

import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId,default: mongoose.Types.ObjectId,required: true,  },
    originalName: { type: String,required: true,},
    currentName: { type: String, required: true,},
    type: { type: String,required: true,},
    path: { type: String, required: true,},
    size: {type: Number,required: true,},
    
},
{ timestamps: true }
);
export const FileModel = mongoose.model("File", Schema);

