import Joi from 'joi';

export const EpisodeValidationSchema = {
    add: {
        body: Joi.object({
            seasonId: Joi.string().length(24).required(), 
            name: Joi.string().min(1).max(255).required(), 
            description: Joi.string().min(1).max(1000).required(),
            thumbnailId: Joi.string().length(24).required(), 
        }),
    },
    update: {
        body: Joi.object({
            seasonId: Joi.string().length(24), 
            name: Joi.string().min(1).max(255), 
            description: Joi.string().min(1).max(1000), 
            thumbnailId: Joi.string().length(24), 
        }),
    },
};
