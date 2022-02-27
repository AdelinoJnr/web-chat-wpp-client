import React from 'react';
import { socket } from '../service/socket';
import { IoSend } from 'react-icons/io5';
import { BsFillEmojiSmileFill } from 'react-icons/bs';

function Message() {
  const handleClick = (ev) => {
    ev.preventDefault();
    socket.emit('nickname', 'Adelino Junior');
  };

  return (
    <section className='content-message-box'>
      <div>
        <BsFillEmojiSmileFill className='icon-emoji' />
      </div>
      <input type="text" name="massage" placeholder='Mensagem' />
      
      <button onClick={handleClick} type='submit'>
        <IoSend className='icon-send' />
      </button>
    </section>
  );
}

export default Message;