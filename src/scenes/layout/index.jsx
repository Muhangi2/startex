import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../../components/Header'
import Homepage from '../homepage'
import Footer from '../../components/Footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="*"  to="/" element={<Homepage/>}/>
        </Routes>
        <Footer/>
    </div>
    
  )
}

export default Layout