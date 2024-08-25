import Joi from 'joi';

export const SeriesValidationSchema = {
    add: {
        body: Joi.object().keys({
            name: Joi.string().required().messages({
                'string.base': 'Name should be a type of string',
                'string.empty': 'Name cannot be an empty field',
                'any.required': 'Name is a required field'
            }),
            description: Joi.string().required().messages({
                'string.base': 'Description should be a type of string',
                'string.empty': 'Description cannot be an empty field',
                'any.required': 'Description is a required field'
            }),
            trailerId: Joi.string().required().messages({
                'string.base': 'Trailer ID should be a type of string',
                'string.empty': 'Trailer ID cannot be an empty field',
                'any.required': 'Trailer ID is a required field'
            }),
            thumbnailId: Joi.string().required().messages({
                'string.base': 'Thumbnail ID should be a type of string',
                'string.empty': 'Thumbnail ID cannot be an empty field',
                'any.required': 'Thumbnail ID is a required field'
            }),
            genres: Joi.array().items(Joi.string()).required().messages({
                'array.base': 'Genres should be an array of strings',
                'any.required': 'Genres are required'
            })
        })
    }
};
