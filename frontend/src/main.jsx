import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home, Blog } from './pages'

import {BrowserRouter, Routes, Route} from "react-router-dom"

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog/:id' element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
