//Code comes from MCN: https://github.com/trevormangrum/mcnairycountynews/blob/develop/pages/api/login/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { login } from "server/actions/AdminAuth/login";
import { User} from "utils/types";
import cookie from "cookie";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const loginData = JSON.parse(req.body) as User;
    console.log(loginData);
    const jwt = login(loginData);
    
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("auth", jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 604800,
        path: "/",
      })
    );
    res.status(200).json({
        payload: {},
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      payload: "Invalid login",
    });
  }
}