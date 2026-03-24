import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {Calendar} from "lucide-react"
import { useFetchBlog } from '../hooks/useFetchBlogs.js'

export default function Home() {

    const {data, isLoading, isError, error} = useFetchBlog()
    const {search, filteredArray} = useOutletContext()

    if (isLoading) return <p>Loading...</p>;

    if (isError) return <p>Error: {error.message}</p>;

  return (

    <div className='h-full mx-auto w-full max-w-7xl px-2.5 md:px-20 py-2.5 md:py-20 bg-[#fcfcfc]'>
        <div className='grid grid-cols-3 gap-8'>
            {
                filteredArray.map((b) => (
                    <div key={b._id} className='rounded-lg shadow-lg border border-gray-200 p-4 flex flex-col gap-4'>
                        <div className='font-bold text-xl'>
                            {b.title}
                        </div>
                        <div className='text-gray-500 text-sm'>
                            {b.excerpt}
                        </div>
                        <div className='text-gray-400 text-xs flex gap-0.5'>
                            <span ><Calendar size={16} strokeWidth={1}/></span>{b.date}
                        </div>
                        <div className='flex gap-2'>
                            {b.tags.map((t, index) => (
                                <span key={index} className='text-xs font-light px-2 py-1 rounded-2xl text-gray-400 bg-gray-50 border border-gray-200'>{t}</span>
                            ))}
                        </div>
                        <div className='mt-4 text-right'>
                            <Link to={`/blog/${b._id}`} className='bg-blue-600 text-white py-2 px-4 rounded-lg text-sm'> Read </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
