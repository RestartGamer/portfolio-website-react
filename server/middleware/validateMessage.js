import {Schema} from "../../shared/assets/schema.js"

export function validateMessage(req,res,next) {
    try{
        const validatedData = Schema.parse(req.body);
        req.validatedData = validatedData;
        next();
    } catch(error) {
        res.status(400).json({
            success:false,
            message:"validationo failed",
            errors: error.issues ?? error.message,
        })
    }
}