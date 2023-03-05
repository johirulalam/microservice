import { GeneralError } from "../utils/GeneralError"

export const handleErrors = async(err, req, res, next)=>{
    let code = 500;
    let correlationId = req.headers['x-correlation-id'];
    
    if(err instanceof GeneralError){
        code = err.getCode();
    }
    return res.status(code).json({correlationId: correlationId, message: err.message});
}