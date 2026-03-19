import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
    },
    excerpt: {
        type: String
    },
    content: {
        type: String
    },
    tags: {
        type: [String]
    }
})

export const Blog = mongoose.model("blog", blogSchema)