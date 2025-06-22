import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './pages/sidebar/SideBar'
import Navbar from './components/navbar/Navbar'

function App() {
  
  return (
   <main>
      <Navbar/>
    <SideBar/>
  
   </main>
  )
}

export default App
