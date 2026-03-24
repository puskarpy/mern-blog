import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function BlogForm() {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        tags: []
    })

    const handleInputChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]:e.target.value}))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            const updatedData = 
                    {
                    ...formData,
                    tags:formData.tags.split(",").map((tag) => tag.trim())
            }
            const res = await axios.post("http://localhost:3000/api/v1/blogs/create", updatedData)

            console.log(updatedData)
            console.log(res.data)

            setSuccess(true)
            toast.success(res.data.message)
            setFormData({
                title:"",
                excerpt: "",
                content: "",
                tags: []
            })
            navigate('/')

        } catch (error) {
            
            console.error(error)
            setError(error.response?.data?.message || "Something went wrong.")
            toast.error(error.response?.data?.message)
            
        } finally{
            setLoading(false)
        }
    }

  return (
    
    <form className='max-w-xl mx-auto py-20 flex flex-col gap-4'>
        <div className=''>
            <div className='text-sm w-full'>Title</div>
            <input value={formData.title || ""} name='title' onChange={handleInputChange} type="text" required className='w-full border text-gray-700 border-gray-200 rounded-md px-2 py-1 outline-gray-400 focus:outline-1' />
        </div>
        <div>
            <div className='text-sm'>Excerpt</div>
            <input value={formData.excerpt || ''} name='excerpt' onChange={handleInputChange} type="text" required className='w-full border text-gray-700 border-gray-200 rounded-md px-2 py-1 outline-gray-400 focus:outline-1' />
        </div>
        <div>
            <div className='text-sm'>Content</div>
            <textarea value={formData.content || ""} name='content' onChange={handleInputChange} required className='w-full border text-gray-700 border-gray-200 rounded-md px-2 py-1 outline-gray-400 focus:outline-1 resize-none overflow-y-scroll' rows={5}  />
        </div>
        <div>
            <div className='text-sm'>Tags <span className='text-[10px]'>Separate with comma</span></div>
            <input value={formData.tags || ""} name='tags' onChange={handleInputChange} type="text" required className='w-full border text-gray-700 border-gray-200 rounded-md px-2 py-1 outline-gray-400 focus:outline-1 placeholder:text-xs' placeholder='eg. web,react,tech' />
        </div>
        <div>
            <button onClick={handleFormSubmit} disabled={loading} className='bg-blue-500 p-2 text-white rounded-lg'>{loading?"Creating...":"Create"}</button>
        </div>
    </form>
  )
}
