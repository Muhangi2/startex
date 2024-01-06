import React from 'react'
import founder from "./../../assets/deo.png"
import Heading from '../../shared/Heading'
import { motion } from "framer-motion";
import Members from './members';


const employees=[{
    name:"elio",
    position:"chief",
    photo:founder
},
{
    name:"deo",
    position:"manager",
    photo:founder
},
{
    name:"rodgers",
    position:"manager",
    photo:founder
},
{
    name:"rodgers",
    position:"manager",
    photo:founder
},
]


const Team = () => {
  return (
    <section
      id="aboutus"
      className="flex flex-col mx-auto min-h-full min-w-full w-5/6 py-20 md:mt-15  "
    >
      <Heading>
        <h2 className="text-3xl font-bold text-center">About Us</h2>
      </Heading>

      <div className="mt-16 md:flex items-center bg-blue-900 text-white justify-between gap-20 md:mt-5  rounded-md p-5">
        {/* image */}
        <img
          className="md:w-[500px] md:h-full"
          alt="benefits-page-graphic"
          src={founder}
        />

        {/* description */}
        <div>
          {/* title */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
              
              </motion.div>
              <h2>
                
              </h2>
            </div>
          </div>
          {/* description */}
          <motion.div
            className="p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
              <h1>
                  Deogratius
                  <span className="text-primary-500"></span>
                </h1>
                <h2>
                  Cofounder
                </h2>
            <p className="my-5">
            He is passionate about creating opportunities for disadvantaged youth who are disconnected from both education and work and are seeking new paths to education and career advancement.
            </p>
            <p className="my-5">
            He is passionate about creating opportunities for disadvantaged youth who are disconnected from both education and work and are seeking new paths to education and career advancement.
            </p>
          </motion.div>
          {/* button */}
          <div className="relative mt-5">
          </div>
        </div>
      </div>
      <div className='md:flex sm:flex md:gap-4 items-center justify-between gap-8 mt-5 bg-purple-900 px-3 py-5'>
        {employees.map((person,index)=>
        (<Members key={index} name={person.name} position={person.position} photo={person.photo}/>))}
      </div>
    </section>
  )
}

export default Team