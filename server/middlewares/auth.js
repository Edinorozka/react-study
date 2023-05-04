import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../config.js";

const checkToken = async (reg, res, next) => {
    try {
        let token = reg.header('Authorization');

        if (!token) throw new Error("not a token")

        if(token.startsWith('Bearer ')) token = token.slice(7, token.length)
        const verify = jwt.verify(token, JWT_SECRET)
        reg.user = verify;
        next();
    } catch (error){
        console.log("CheckToken - ", error.message)
    }
}

export default checkToken