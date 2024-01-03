import React from 'react'
import { selectedPage } from './shared'
import Button from '../components/Button'

const ActionButton = ({children}) => {
  return (
    <button
    className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 font-bold hover:text-white'
    // onClick={()=>setSelectedPage()}
    >
        {children}
    </button>
  )
}

export default ActionButton