import { NextApiRequest, NextApiResponse } from "next";
import { Appointment } from "utils/types";
import { createAppointment } from "server/actions/Mongo/Appointments";
import { generateStripeCheckout } from "server/actions/Stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const appInfo = JSON.parse(req.body) as Appointment;
        //Since we didn't set these fields before the fetch request, they need to be set now.
        appInfo.paid = false; //Appointments are booked before payment to prevent appointment overlap.
        appInfo.timeBooked = new Date();
        
        //Now that the appointment object is filled, we can pass it to a backend function to actually create the Appointment.
        const appointment = await createAppointment(appInfo);
        //Now that the appointment is pre-booked, we can generate a checkout url to redirect to.
        const url = await generateStripeCheckout(appointment);

        res.status(200).json({
            payload: url, 
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            payload: {},
        })
    }
}