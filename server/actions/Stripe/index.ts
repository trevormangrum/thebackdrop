import { redirect } from "next/dist/next-server/server/api-utils";
import { Stripe } from "stripe";
import { AppointmentDocument } from "server/models/Appointment";
const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
    apiVersion: '2020-08-27',
    typescript: true,
});


export const generateStripeCheckout = async (appointment: AppointmentDocument):Promise<string> => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: "usd",
                product_data: {
                    name: "The Backdrop Appointment",
                },
                unit_amount: 2500, //$25.00 per person
            },
            quantity: appointment.groupSize, //Quanity == number of people going
        }],
        mode: "payment",
        success_url: `http://localhost:3000/success?id=${appointment._id}`,
        cancel_url: `http://localhost:3000/cancel?id=${appointment._id}`,
    });
    return session.url as string;
}