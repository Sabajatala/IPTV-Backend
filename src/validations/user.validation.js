import Joi from "joi";

export const UserValidationSchema = {
	add: {
		body: Joi.object().keys({
			
			firstname: Joi.string().required(),
			lastname: Joi.string().required(),
			password: Joi.string().required(),
			email: Joi.string().required(),


		}),
	},
};
