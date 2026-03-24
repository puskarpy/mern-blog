import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { useFetchBlog } from '../hooks/useFetchBlogs'

export default function Layout() {
  const {data, isLoading, isError, error} = useFetchBlog()
  const [search ,setSearch] = useState("")

  const filteredArray = data?.data?.filter(blog =>  
    blog.title.toLowerCase().includes(search.toLowerCase()) || blog.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  ) || []
  return (
    <>
    <Navbar search={search} setSearch={setSearch} />
    <Outlet context={{search, filteredArray}} />
    </>
  )
}
