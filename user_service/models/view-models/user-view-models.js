const Joi = require('joi');

const Schema = Joi.object(
    {
        username: Joi.string().alphanum().min(3).max(30).required()
    }
);


const userValidate = (data) =>{
    const result = Schema.validate(data);
    data.createdAt = new Date();
    result.value = data;
    return result;
}


export default userValidate;