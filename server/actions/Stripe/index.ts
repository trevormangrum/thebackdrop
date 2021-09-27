import { Stripe } from "stripe";
import { AppointmentDocument } from "server/models/Appointment";
import urls from "utils/urls";
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
            quantity: appointment.groupSize, //Quantity == number of people going
        }],
        mode: "payment",
        success_url: `${urls.baseUrl}${urls.api.checkout.payment}?session_id={CHECKOUT_SESSION_ID}&app_id=${appointment._id}`,
        cancel_url: `${urls.baseUrl}${urls.api.checkout.payment}?session_id={CHECKOUT_SESSION_ID}&app_id=${appointment._id}`,
    });
    return session.url as string;
}
