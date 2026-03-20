import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchBlog } from '../hooks/useFetchBlogs.js'

export default function Blog() {

    const {data, isLoading, isError, error} = useFetchBlog()

    const {id} = useParams()
    const blog = data.data.find((b) => b._id === id)

    if(isLoading) return <p>Loading....</p>
    if(isError) return <p>{error}</p>

  return (
    <div className='h-full mx-auto w-full max-w-7xl px-2.5 md:px-20 py-2.5 md:py-20 bg-[#fcfcfc]'>
        <h1 className='text-3xl font-bold'>{blog.title}</h1>

        <p className='mt-8'>{blog.content}</p>
    </div>
  )
}
