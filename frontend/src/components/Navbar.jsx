import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"

export default function Navbar({search, setSearch}) {
  return (
    <nav className='flex sticky p-4 justify-between items-center max-w-7xl mx-auto'>
       <div>
        <Link to={'/'} className='text-3xl font-bold'>Blog</Link>
       </div>
       <div className='flex-1 max-w-2xl'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" className='w-full border text-gray-500 border-gray-300 rounded-xl px-2 py-1 placeholder:text-gray-400 placeholder:text-xs outline-gray-200 focus:outline-1' name="" id="" placeholder='Search here...' />
       </div>
       <div>
        <Link to={'/addblog'} className='flex items-center text-sm gap-1 bg-blue-500 text-white py-2 px-3 rounded-lg'><Plus size={15} strokeWidth={2}/>Create </Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        </div> 
    </nav>
  )
}
