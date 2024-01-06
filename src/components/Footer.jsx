import React from 'react'
import loogo from "./../assets/Tartex.png"
import { NavLink } from 'react-router-dom'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const navLinks=[
  {
    path:'/home',
    display:"Home"
  },
  {
    path:'/programs',
    display:"Programs"
  },
  {
    path:'/aboutus',
    display:"Aboutus"
  },
  {
    path:'/projects',
    display:"projects"
  },
  {
    path:'/blog',
    display:"Blog"
  }
]
const Footer = () => {
  return (
    <footer className="bg-blue-900 py-6 text-white">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">
          {/* <ActionButton setSelectedPage={setSelectedPage}>Contact us</ActionButton> */}
        </h4>
        <div className="flex flex-col mt-2 items-start p-4 gap-4">
          <div className="flex items-center justify-center gap-3">
            {" "}
            <FaEnvelope /> <p>startex.com</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaWhatsapp className="h-6 w-6" /> <p>0772503458</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            {" "}
            <FaEnvelope  className="h-6 w-6" /> <p>startex@gmail.com</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaWhatsapp className="h-6 w-6" /> <p>0702503458</p>
          </div>
        </div>
      </div>

      <div className="mt-4 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        {
 navLinks.map((link,index)=><li key={index}>
    <NavLink to={link.path} className={navClass=>navClass.isActive ?
    'text-blue-700 text-[16px] font-bold hover:border-b-2 border-solid border-white':'text-green-800 leading-7 font-bold hover:border-b-2 border-solid border-white'
   }>{link.display}</NavLink>
 </li>)
}
      </div>
      <div className="mt-4 basis-1/2 md:mt-0">
      <div class="w-[158px] h-[60px]">
      <img src={loogo} alt=''  className='w-full h-full'/>
   
     </div>

        <p className="my-5">
           adapting and innovating to meet evolving client demands. Our growth story is a testament to our adaptability, resilience, and passion for delivering exceptional service.
        </p>
        <p>© 2023 Pace Forwarders All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer