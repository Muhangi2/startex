import React from 'react';
import Heading from '../../shared/Heading';
import student from './../../assets/portfolio-6.jpg';

const Programhero = () => {
  return (
    <div
    style={{ backgroundImage: `url(${student})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    className='flex-col items-center justify-center bg-yellow-500 gap-2 p-3 h-full'>
    <Heading>Building a Better Future</Heading>
    <p>
      Elevate is a new pathway for youth in education, employment, and empowerment, proving that by learning and improving
      digital skills, one can increase their chances of becoming employed or starting their own business or freelance career
      in Uganda.
    </p>
  </div>
  );
};

export default Programhero;
