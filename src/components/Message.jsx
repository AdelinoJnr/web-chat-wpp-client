import React, { useState } from 'react';
import { socket } from '../service/socket';
import { IoSend } from 'react-icons/io5';
import { BsFillEmojiSmileFill } from 'react-icons/bs';

function Message() {
  const [valueInput, setValueInput] = useState('');

  const handleClick = (ev) => {
    ev.preventDefault();
    socket.emit('message', { message: valueInput, nickname: 'Adelino'});
    clearInput();
  };

  const clearInput = () => {
    setValueInput('');
  }

  return (
    <section className='content-message-box'>
      <div>
        <BsFillEmojiSmileFill className='icon-emoji' />
      </div>
      <input
        value={valueInput}
        onChange={(ev) => setValueInput(ev.target.value)}
        type="text"
        name="massage"
        placeholder='Mensagem'
      />
      
      <button onClick={handleClick} type='submit'>
        <IoSend className='icon-send' />
      </button>
    </section>
  );
}

export default Message;