import React from 'react';
import spinner from '../../assets/yy3.gif'

function Spinner() {
  return (
    <div>
      <img height="200px" width="200px" className='text-center mx-auto' src={spinner} alt="Loading..." />
    </div>
  );
}

export default Spinner;