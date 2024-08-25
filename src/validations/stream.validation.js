import Joi from "joi";

export const StreamValidationSchema = {
	add: {
		body: Joi.object().keys({
			
			
            id: Joi.string().hex().length(24), 
            userId: Joi.string().hex().length(24).required(),
            episodeId: Joi.string().hex().length(24), 
            time: Joi.number().integer().min(0).default(() => Math.floor(Date.now() / 1000)), 
		}),
	},
};
