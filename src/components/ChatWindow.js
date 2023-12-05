import React from 'react';
import Message from './Message';
import './CSS/UserInput.css';

const ChatWindow = ({ messages }) => {
  return (
    <>
    <div className='screen'>
    <div className="chat-window">
      {messages.map((message, index) => (
        <Message key={index} text={message.text} user={message.user} />
      ))}
    </div>
    </div>
    </>
  );
};

export default ChatWindow;
