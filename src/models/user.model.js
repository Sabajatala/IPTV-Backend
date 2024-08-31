import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const schema = mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
		firstname: {type: String,},
		lastname: {type: String,},
	    email: {type: String,},
	    password: {type: String,},
		
			
			
		  
	},
	{ timestamps: true }
);

schema.pre('save', async function (next) {
	if (!this.isModified('password')) {
	  return next();
	}
	try {
	  const salt = await bcrypt.genSalt(10);
	  this.password = await bcrypt.hash(this.password, salt);
	  next();
	} catch (err) {
	  next(err);
	}
  });
schema.methods.comparePassword = async function (candidatePassword) {
	return bcrypt.compare(candidatePassword, this.password);
  };
  

export const UserModel = mongoose.model("User", schema);
