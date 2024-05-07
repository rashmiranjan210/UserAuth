import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom" 
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<SignUp />} />
    <Route path='login' element={<Login />} />
    <Route path='home' element={<Home />} />
    </>
    
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
