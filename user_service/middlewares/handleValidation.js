import {BadRequest} from "../utils/GeneralError";


export const handleValidation = (validate) =>{
    return (req, res, next) => {
        const result = validate(req.body);
        const isValid = result.error == null;

        if(isValid){
            return next();
        }

        const {details} = result.error;
        const messages = details.map((e)=> e.message);
        const msg = messages.join(',');
        throw new Error(msg);
    }
}

export default handleValidation;