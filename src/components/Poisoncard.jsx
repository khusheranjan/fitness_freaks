import React from 'react';
import Button from './Button';

const Poisoncard = ({ type, description, handleClick }) => {
  return (
    <div className="card glass bg-neutral w-96">
      <div className="card-body">
        <h2 className="card-title capitalize">{type}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Button text={type} action={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Poisoncard;
