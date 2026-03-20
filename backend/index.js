import express, { urlencoded } from "express"
import blogRouter from "./routes/blog.route.js"
import { db } from "./utils/db.js"
import errorHandler from "./utils/errorHandler.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization"]
}))

app.use(express.json())
app.use(urlencoded({extended: true}))


const PORT = 3000

db()

// Router Middleware
app.use("/api/v1/blogs", blogRouter)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started at ${PORT}`))