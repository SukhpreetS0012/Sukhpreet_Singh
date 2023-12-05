import React from 'react';

const Message = ({ text, user }) => {
  return (
    <div className={user === 'user' ? 'user-message' : 'bot-message'}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
