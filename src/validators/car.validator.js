import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[A-Za-zА-яіїІЇёЁ]{1,20}$')).required().messages({
        'string.pattern.base': "Only letters"
    }),
    price: Joi.number().min(0).max(100000).required(),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required()
})