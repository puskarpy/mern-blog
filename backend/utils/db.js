import mongoose from "mongoose";

export const db = () => {
    mongoose.connect(`mongodb://127.0.0.1:27017/blogs`)
    .then(() => console.log("MongoDB connected."))
    .catch((e) => console.log(e))
}