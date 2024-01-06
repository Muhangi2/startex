import React,{useState} from 'react'
import loogo from "./../assets/Tartex.png"
import ActionButton from '../shared/ActionButton'
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import useMediaQuery from '../hooks/useMediaQuery'
import { FaTimes } from 'react-icons/fa';


const navLinks=[
  {
    path:'/',
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
const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const iSAboveMediumAScreen = useMediaQuery("(min-width:1060px)");

  return (
    <nav >
        <div class="flex items-center justify-between flex-wrap b-blue-900 p-3 text-primary-100 w-full bg-blue-300 ">
      <div class="w-[200px] h-[70px]">
      <img src={loogo} alt=''  className='w-full h-full'/>
   
     </div>
     {iSAboveMediumAScreen ?(<div className='flex list-none items-center gap-5 '>

{
 navLinks.map((link,index)=><li key={index}>
    <NavLink to={link.path} className={navClass=>navClass.isActive ?
    'text-blue-700 text-[16px] font-bold hover:border-b-2 border-solid border-white':'text-green-800 leading-7 font-bold hover:border-b-2 border-solid border-white'
   }>{link.display}</NavLink>
 </li>)
}
<div className='flex items-center gap-3 justify-evenly'>
 <div >
  <button>Icon</button>
 </div>
 <ActionButton>Join us </ActionButton>
</div>


</div>) :(
   <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
    <FaBars />
 </button>
)}
      
      
   
</div>
{!iSAboveMediumAScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-primary-100 ">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuToggled(!setIsMenuToggled)}>
            <FaTimes />
            </button>
          </div>
          {/* menuitems */}
          <div className="ml-[33%] flex text-lg font-black text-white flex-col gap-8 ">
          {
 navLinks.map((link,index)=><li key={index}>
    <NavLink to={link.path} className={navClass=>navClass.isActive ?
    'text-blue-700 text-[16px] font-bold hover:border-b-2 border-solid border-white':'text-green-800 leading-7 font-bold hover:border-b-2 border-solid border-white'
   }>{link.display}</NavLink>
 </li>)
}
          </div>

          <div></div>
        </div>
      )}
    </nav>
  )
}

export default Header