import React from 'react';
import Button from './Button';

const Poisoncard = ({ type,image, description, handleClick }) => {
  return (
    <div className="card glass bg-neutral w-96 mb-6 text-gray-100">
      <figure className="px-4 pt-4">
        <img
          className=' h-[15rem] rounded-xl'
          src={image}
          alt={type} />
      </figure>
      <div className="card-body">
        <p>{description}</p>
        <div className="card-actions justify-center mt-2">
          <Button text={type} action={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Poisoncard;
