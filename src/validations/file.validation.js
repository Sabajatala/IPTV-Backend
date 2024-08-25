import Joi from 'joi';

export const FileValidationSchema = {
    add: {
        body: Joi.object({
            originalName: Joi.string().min(1).max(255).required(), 
            currentName: Joi.string().min(1).max(255).required(), 
            type: Joi.string().min(1).max(50).required(), 
            path: Joi.string().min(1).max(500).required(), 
            size: Joi.number().positive().required(), 
        }),
    },
    update: {
        body: Joi.object({
            originalName: Joi.string().min(1).max(255), 
            currentName: Joi.string().min(1).max(255), 
            type: Joi.string().min(1).max(50), 
            path: Joi.string().min(1).max(500), 
            size: Joi.number().positive(), 
        }),
    },
};
