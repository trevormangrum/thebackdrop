//Code taken from Mindversity Website project. Thank you Vishal.
//https://github.com/hack4impact-utk/mindversity-website/blob/develop/server/actions/Authenticate.ts

import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import {verify} from "jsonwebtoken";
const authenticated = (role: string, func: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const secret = process.env.JWTSECRET as string;
    return verify(req.cookies.auth!, secret, async function (error, decoded: any) { 
        if(!error && decoded) {
            const decodedMessage = decoded; //TODO: Make type for user. 
            //If the decoded message has the proper role, then we can render the protected page passed in.
            if(decodedMessage.role == role || role == "any") return await func(req, res); 
            
            //At this point, the authentication failed, so we need to return a response to the user.
            res.setHeader("Set-Cookie", "auth=; Max-Age=0; Same-Site=Lax; Path=/");
            res.status(401).json({
                message: "Not authenticated",
            });
        }
    })
}

export default authenticated;