import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    
	id: {type: mongoose.Schema.Types.ObjectId,auto: true,},
    name: { type: String,  },
    description: { type: String,default: ''  },
    //trailerId: { type: mongoose.Schema.Types.ObjectId, ref: 'File', }, 
    //thumbnailId: { type: mongoose.Schema.Types.ObjectId, ref: 'File',  }, 
    // genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }], 
     genres: [{ type: String }],
    status: { type: String, enum: ['active', 'inactive'], default: 'active'},
  
},
{ timestamps: true }
);
export const SeriesModel = mongoose.model("Series", Schema);

