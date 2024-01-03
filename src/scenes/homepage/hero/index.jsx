import React from 'react'
import ActionButton from '../../../shared/ActionButton'
import student from "./../../../assets/student.jpg"


const Hero = () => {
  return (
<section
style={{backgroundImage:`url(${student})`,backgroundSize: 'cover', backgroundPosition: 'center'}}
className='w-full bg-green-400 flex flex-col tems-centeri justify-center py-5 px-8 h-screen'>
  <div className=' font-bold text-4xl'>
    <h1>Offering skill development <br/> and fostering innovation.</h1>
  </div>
  <div className='flex gap-4 mt-5 mb-3'>
    <ActionButton>Get started</ActionButton>
    <ActionButton>Read More</ActionButton>
  </div>
</section>

  )
}

export default Hero