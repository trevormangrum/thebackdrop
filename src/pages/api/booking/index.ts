import { NextApiRequest, NextApiResponse } from "next";
import { getBookableHoursOnDay } from "server/actions/Mongo/Appointments";
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    try {
        if(req.query.date != "") {
        const dateString = req.query.date as string;
        console.log("DATE STRING: ", dateString);
        const bookableHours = await getBookableHoursOnDay(dateString);
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
