import React from 'react';

function Balloon({ message }) {
  return (
    <div className='content-balloon'>
      {message.message}
      <span>{ '18:20' }</span>
    </div>
  );
}

export default Balloon;