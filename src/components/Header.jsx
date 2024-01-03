import React from 'react'
import loogo from "./../assets/Tartex.png"
import ActionButton from '../shared/ActionButton'
import {sunIcon,moonIcon} from  "react-icons"
import { Link } from 'react-router-dom'

const Header = () => {
    const linkStyle = {
        color: 'black', 
        textDecoration: 'none', 
        padding: '8px', 
        transition: 'color 0.3s, text-decoration 0.3s', 
      };
      const hoverStyle = {
        color: 'green', 
        textDecoration: 'underline', 
      };
  return (
    <nav>
        <div class=" fixed flex items-center justify-between flex-wrap b-blue-900 p-3 text-primary-100 w-full ">
      <div class="w-[200px] h-[70px]">
      <img src={loogo} alt=''  className='w-full h-full'/>
   
     </div>
      <div className='flex list-none items-center gap-5  justify-evenly'>
        <li >
       <Link to="/" style={linkStyle} activeStyle={hoverStyle}>Home</Link>
        </li>
        <li>
        <Link to="/" style={linkStyle} activeStyle={hoverStyle}>Programs</Link>
        </li>
        <li>
        <Link to="/" style={linkStyle} activeStyle={hoverStyle}>AboutUs</Link>
        </li>
        <li>
        <Link to="/" style={linkStyle} activeStyle={hoverStyle}>Projects</Link>
        </li>
        <li>
        <Link to="/" style={linkStyle} activeStyle={hoverStyle}>Blog</Link>
        </li>
      </div>
      <div className='flex items-center gap-3 justify-evenly'>
        <div >
         <button>Icon</button>
        </div>
        <ActionButton>Join us </ActionButton>
      </div>
   
</div>
    </nav>
  )
}

export default Header