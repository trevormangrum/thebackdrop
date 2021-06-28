import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    try {
        console.log(req.query.date);
        //TODO: Here, we check mongo for all appointments on a day.
        res.status(200).json({
            payload: req.body,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
        })
    }
}
