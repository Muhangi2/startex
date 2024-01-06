import React from 'react'

const Program = ({title,description}) => {
  return (
    <div className='flex-col gap-3 bg-orange-400 mt-3  shadow-2xl border-2 border-solid px-5 py-9 text-center rounded-md md:w-[600px] md:h-[400px] my-ease-out-animation'>
    <h1 className='my-4'>{title}</h1>
    <h2 className='mt-4'>{description}</h2>
  </div>
  )
}

export default Program