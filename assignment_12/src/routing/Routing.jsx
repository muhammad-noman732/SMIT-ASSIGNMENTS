import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from '../pages/home/Home'
import About from '../pages/aboutUs/About'
import Contact from '../pages/contactUs/Contact'
import Renting from '../pages/renting/Renting'
import Selling from '../pages/sellings/Selling'
import Signup from '../pages/signup/Signup'
import Login from '../pages/login/Login'
import Buying from '../pages/buying/Buying'
import Navbar from '../components/navbar/Navbar'

const Routing = () => {
   
const router =  createBrowserRouter([
    
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:'/about',
      element: <About/>,
     },

     {
          path: "contact",
          element: <Contact />,
     },
     {
        path: "renting",
        element: <Renting />,
      },
      {
        path: "sellings",
        element: <Selling />,
      },
      {
        path: "sellings",
        element: <Buying />,
      },
      
      {
        path: "signup",
        element: <Signup/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      
    
  ]);
  return (
    <div>
     <Navbar/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Routing
