import React from 'react';

function Balloon({ message }) {
  return (
    <div>
      {message.chatMessage}
    </div>
  );
}

export default Balloon;