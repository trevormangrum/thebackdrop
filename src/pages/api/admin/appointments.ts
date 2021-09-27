import { NextApiRequest, NextApiResponse } from "next";
import { deleteAppointmentByID, getPaidAppointmentsByDate } from "server/actions/Mongo/Appointments";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    try {
        if(req.method === "GET") {
            //Get all appointments on a given date.
            const date = new Date(<string>req.query.date);
            const appointments = await getPaidAppointmentsByDate(date);
            res.status(200).json({
                payload: appointments,
            })
        }
        if(req.method === "DELETE") {
            //Delete appointment by ID.
            const id = <string>req.query.id;
            await deleteAppointmentByID(id);
            res.status(200).json({
                payload: {},
            })
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({
            payload:error,
        })
    }
}
