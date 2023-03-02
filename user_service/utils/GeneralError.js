export class GeneralError extends Error{
    constructor(message){
        super();
        this.message = message;
    }
    getCode(){ return 400;}
}

export class BadRequest extends GeneralError{
    getCode(){ return 400;}
}


export class NotFound extends GeneralError{
    getCode(){ return 404;}
}