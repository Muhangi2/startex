import React from 'react'
import Heading from '../../shared/Heading'
import { AiOutlineRobot } from 'react-icons/ai';
import { BiChalkboard } from 'react-icons/bi';
import { HiDocumentReport } from 'react-icons/hi';
import Value from './Value';


const data=[
    {
        icon:<AiOutlineRobot />,
      title:"AI & Computer Science",
      description:"Empowering students in middle school, high school, and university through AI and computer science education."
    },
    {
      icon:<BiChalkboard />,
      title:"Hands-on Training",
      description:"Providing hands-on training programs to children across Africa in robotics, coding, electrical installation, and more.",

    },
    {
        icon:<HiDocumentReport />,
        title:"Supporting Research",
        description:"Offering free resources,consultations, and supportto students conducting science and space research",
      }
      , {
        icon:<HiDocumentReport />,
        title:"Supporting Research",
        description:"Offering free resources,consultations, and supportto students conducting science and space research",
      }

]

const Values = () => {
    
  return (
    <section>
        <Heading>Next generation of Innovaters</Heading>
        <div className='mt-5 flex bg-slate-900'>
            <div>
            <div>
               <AiOutlineRobot />
              <h2>AI & Computer Science</h2>
              <p>Empowering students in middle school, high school, and university through AI and computer science education.</p>
        </div>
            <div>
            <BiChalkboard />
              <h2>Hands-on Training</h2>
              <p>Providing hands-on training programs to children across Africa in robotics, coding, electrical installation, and more..</p>
            </div>
            </div>
            <div>

            <div className='flex'>
                <div> <HiDocumentReport /></div>
           <div>
           <h2>Supporting Research</h2>
              <p>Offering free resources,consultations, and supportto students conducting science and space research.</p>
           </div>
              
            </div>
            

            <div className='flex'>
                <div>
                  <AiOutlineRobot />
                </div>
                <div>
                <h2>AI & Computer Science</h2>
              <p>Empowering students in middle school, high school, and university through AI and computer science education.</p>
            </div>
                </div>
             
            </div>
    

            
        </div>
    </section>
  )
}

export default Values