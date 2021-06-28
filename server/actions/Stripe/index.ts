import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
    apiVersion: '2020-08-27',
    typescript: true,
});


export const generateStripeCheckout = ():void => {
    //TODO
}