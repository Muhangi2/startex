import React from 'react';

const Members = ({ name, position, photo }) => {
  return (
    <div className='flex-col gap-2 bg-green-800 rounded-md px-6 py-6 my-3'>
      <div className=' overflow-hidden'>
        <img className='w-full h-full object-cover' src={photo} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h2>{position}</h2>
      </div>
    </div>
  );
};

export default Members;
