import React, { useEffect, useState } from 'react';
import { socket } from '../service/socket';
import Balloon from './Balloon';
import Box from './Box';
import Header from './Header';
import Message from './Message';

function Chat() {
  const [messages, setMessages] = useState([ { chatMessage: 'Ola' } ]);

  useEffect(() => {
    socket.on('loginUser', (data) => {
      console.log(data)
      setMessages(data);
    });
  })

  const renderChatBallon = () => {
    const filterMessages = messages.filter(({ message }) => message);

    return (
      messages && filterMessages.map((message, index) => (
        <Balloon key={index} message={message} />
      ))
    );
  };

  return (
    <section className="content-chat">
      <Header />
      <Box clas='content-box-top' />
      { renderChatBallon() }
      <Box clas='content-box-bottom' />
      <Message />
    </section>
  );
}

export default Chat;