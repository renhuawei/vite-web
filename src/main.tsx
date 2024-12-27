import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Router from './router'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/*' element={<Router />} />)
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
