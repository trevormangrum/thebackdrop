import { NextApiRequest, NextApiResponse } from "next";
import { getBookableHoursOnDay } from "server/actions/Mongo/Appointments";
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    try {
        if(req.query.date != "") {
        const date = new Date(req.query.date as string);
        const bookableHours = await getBookableHoursOnDay(date);
        res.status(200).json({
            payload: bookableHours,
        })
        } else {
            res.status(404).json({
                payload: [],
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
        })
    }
}
