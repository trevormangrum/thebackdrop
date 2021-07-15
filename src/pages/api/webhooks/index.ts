//Following the guide from Vercel: https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe
//This guide as well: https://codedaily.io/tutorials/Stripe-Webhook-Verification-with-NextJS
import Cors from "micro-cors";
import {buffer} from "micro";
import {Stripe } from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
export const config = {
    api: {
        bodyParser: false,
    }
}

const cors = Cors({
    allowMethods: ['POST', 'HEAD'],
});
const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
    apiVersion: "2020-08-27",
});
const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET as string;
const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === 'POST') {
        const buf = await buffer(req);
        const sig = req.headers['stripe-signature']!
        let event: Stripe.Event;
        try {
            event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
        } catch (error) {
            res.status(400).send(`Webhook Error: ${error.message}`);
            return;
        }
        console.log("Event caught, event was: ", event);
        if(event.type == "checkout.sesssion.completed") {
            res.redirect("http://localhost:3000/gallery")
        } else {
            res.redirect("http://localhost:3000/cancel");
        }
    } else {
        res.redirect('http://localhost:3000')
    }
}
export default cors(webhookHandler as any);