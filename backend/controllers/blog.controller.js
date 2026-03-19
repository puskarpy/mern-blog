import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Blog } from "../models/blog.model.js";

export const handleCreateBlog = asyncHandler( async(req, res) => {

    const {title, excerpt, content, tags} = req.body

    if(!title || !excerpt || !content || !tags){
        throw new ApiError(400, "All fields required")
    }

    const blog = await Blog.create({
        title, excerpt, content, tags
    })

    if(!blog){
        throw new ApiError(500, "Blog creation failed.")
    }

    return res.status(201).json(
        new ApiResponse(201, blog, "Blog created successfully.")
    )

})

export const handleUpdateBlog = asyncHandler( async(req, res) => {
    const {id} = req.params

    if(!id){
        throw new ApiError(400, "Id required.")
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, 
        {
            $set: req.body
        },
        {
            new:true
        }
    )

    if(!updatedBlog){
        throw new ApiError(400, "Blog not found.")
    }

    res.status(201).json(
        new ApiResponse(
            200,
            updatedBlog,
            "Blog updated successfully."
        )
    )


})

export const handleDeleteBlog = asyncHandler( async(req, res) => {
    const {id} = req.params
    if(!id){
        throw new ApiError(400, "Blog Id required.")
    }

    const blog = await Blog.findByIdAndDelete(id)

    if(!blog){
        throw new ApiError(400, "Blog doesn't exist.")
    }

    res.status(200).json(
        new ApiResponse(
            200,
            "Blog deleted successfully."
        )
    )

} )

export const handleGetAllBlogs =  asyncHandler( async(req, res) => {
    const blogs = await Blog.find({})
    if(!blogs){
        throw new ApiError(500, "Blogs failed to fetch.")
    }
    
    return res.status(201).json(
        new ApiResponse(
            201,
            blogs,
            "Blogs fetched successfully"
        )
    )
} )

export const handleGetBlogById = asyncHandler( async(req, res) => {
    const {id} = req.params
    if(!id){
        throw new ApiError(400, "Id required.")
    }

    const blog = await Blog.findById(id)

    if(!blog){
        throw new ApiError(400, "Blog not found.")
    }

    res.status(200).json(
        new ApiResponse(
            200,
            blog,
            "Blog fetched successfully."
        )
    )
} )