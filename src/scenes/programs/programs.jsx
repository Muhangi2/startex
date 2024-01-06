import React from 'react'
import Program from './program'
import Heading from '../../shared/Heading'
import student from "./../../assets/portfolio-6.jpg"


const programs=[
    {
        title:"Hands-on Training",
        description:"At S-TARTEX Foundation,we provide practical skills training in robotics, coding, petroleum studies, electrical installation, and building smart cities in Africa. We aim to guide children in making informed choices fortheirfuture."
    },
    {
        title:"Empowering Students",
        description:"We empower students in middle school, high school, and universitythrough AI and computer science education. Forthose conducting science and space research, we offerfree resources,consultations, and support."
    },
    {
        title:"Collaborations & Outreach",
        description:"In collaboration with orphanages, we go orphans to witnessAfrica's transformation through science and technology. We believe in empowering every young mind regardless of their background."
    }
]

const Programs = () => {
  return (
    <div className='flex-col bg-green-800 gap-3 p-5 items-center justify-center w-full'>
        
         <div className='mt-3'>
           {/* <h2>Training Programs</h2>   */}
           <Heading>Training Programs</Heading>   
           <div className='md:flex sm:flex md:gap-4 items-center justify-between gap-8 mt-5 bg-purple-900 px-3 py-5'>
             {programs.map((item,index)=>(
              <Program key={index} title={item.title} description={item.description}/>)
             )}
         </div>
        </div>
        {/* images */}
        
        <div>

        </div>
    </div>
  )
}

export default Programs