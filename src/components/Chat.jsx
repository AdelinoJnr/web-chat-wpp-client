import React, { useEffect, useState } from 'react';
import { socket } from '../service/socket';
import Balloon from './Balloon';
import Header from './Header';
import Message from './Message';

function Chat() {
  const [messages, setMessages] = useState([ { chatMessage: 'Ola' } ]);

  useEffect(() => {
    socket.on('loginUser', (data) => {
      setMessages(data);
    });
  })

  return (
    <section className="content-chat">
      <Header />
      <p>OLA</p>
      { messages && messages.map((message, index) => <Balloon key={index} message={message} />) }
      
      <Message />
    </section>
  );
}

export default Chat;