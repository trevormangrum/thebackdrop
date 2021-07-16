import { NextApiRequest, NextApiResponse } from "next";
import {
  deleteAppointmentByID,
  updateAppointmentPaymentById,
} from "server/actions/Mongo/Appointments";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: "2020-08-27",
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id as string
    );
    if (session.payment_status === "paid") {
      //Update the Appointment to have paid status.
      updateAppointmentPaymentById(req.query.app_id as string);
      //Appointment has been updated, so now we redirect.
      res.redirect("http://localhost:3000/success");
      return;
    } else {
      //!  May have to add another "Else if " if an error occurs.
      //Appointment was cancelled.
      console.log("Appointment cancelled.");
      //Delete the appointment.
      await deleteAppointmentByID(req.query.app_id as string);
      res.redirect("http://localhost:3000/cancel");
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).redirect("http://localhost:3000");
  }
}
