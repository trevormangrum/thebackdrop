//Code from Mindversity Website. Thank you Vishal.
//https://github.com/hack4impact-utk/mindversity-website/blob/develop/pages/api/admin/validateLogin.ts
// This is really only used to validiate when someone is logged in
import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const secret = process.env.JWTSECRET as string;
    verify(req.cookies.auth!, secret, function (error, decoded: any) {
      if (!error && decoded) {
        const dMessage = decoded ;

        res.status(200).json({
          success: true,
          payload: dMessage,
        });
      } else {
        res.setHeader("Set-Cookie", "auth=; Max-Age=0; SameSite=Lax; Path=/");
        res.status(401).json({
          message: "Not Authenticated",
        });
      }
    });
  } catch (error) {
    console.error(error instanceof Error && error);
    res.setHeader("Set-Cookie", "auth=; Max-Age=0; SameSite=Lax; Path=/");
    res.status(401).json({
      message:
        (error instanceof Error && error.message) || "Something went wrong. Please try again.",
    });
  }
}