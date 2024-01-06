import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../../components/Header'
import Homepage from '../homepage'
import Footer from '../../components/Footer'
import AboutUs from '../AboutUs'
import Programs from '../programs'
import Projects from '../projects'
import Blog from '../blog'



const Layout = () => {
  return (
    <div>
     <Header/>
        <Routes>
            <Route  path="/" element={<Homepage/>} />
            <Route  path="/aboutUs" element={<AboutUs/>}/> 
            <Route path="/programs" element={<Programs/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
        <Footer/>
    </div>
    
  )
}

export default Layout