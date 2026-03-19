import { Router } from "express"
import { 
    handleCreateBlog, 
    handleDeleteBlog, 
    handleGetAllBlogs, 
    handleGetBlogById, 
    handleUpdateBlog 
    } from "../controllers/blog.controller.js"

const router = Router()

router.get("/", handleGetAllBlogs)
router.get("/:id", handleGetBlogById)
router.post("/create", handleCreateBlog)
router.post("/delete/:id", handleDeleteBlog)
router.post("/update/:id", handleUpdateBlog)


export default router