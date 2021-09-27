const prod = process.env.NODE_ENV === "production";
export default {
    dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017", //Use second string on Compass to see where stuff is going.
    baseUrl: prod ? "https://www.thebackdrop731.com" : "http://localhost:3000",
    api: {
        admin: {
            validate: "/api/admin/validate",
        },
        login: "/api/login",
        booking: "/api/booking",
        checkout: { 
            index: "/api/checkout",
            payment: "/api/checkout/payment",
        },
    },
    pages: {
        index: "/",
        login: "/login",
        aboutUs: "/about",
        book: "/book",
        gallery: "/gallery",
        contactUs: "/contact", 
        admin: {
            index: "/admin"
        }
    }
}
