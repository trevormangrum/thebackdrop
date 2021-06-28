const prod = process.env.NODE_ENV === "production";
export default {
    dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
}