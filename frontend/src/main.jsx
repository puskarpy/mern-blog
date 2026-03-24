import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home, Blog, BlogForm } from './pages'

import {BrowserRouter, Routes, Route} from "react-router-dom"

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Layout from './Layouts/Layout'

import {Toaster} from "react-hot-toast"

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/blog/:id' element={<Blog/>} />
          <Route path='/addblog' element={<BlogForm/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
