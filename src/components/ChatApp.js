import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import UserInput from './UserInput';
import './CSS/UserInput.css';
import Navbar from './Navbar';
import botResponses from './JsonFiles/botResponses.json';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
  
    const handleSendMessage = (userInput) => {
      const newMessages = [...messages, { text: userInput, user: 'user' }];
      setMessages(newMessages);
  
      const botResponse = generateBotResponse(userInput);
      const updatedMessages = [...newMessages, { text: botResponse, user: 'bot' }];
      setMessages(updatedMessages);
    };
  
    const generateBotResponse = (userInput) => {
      const lowercasedInput = userInput.toLowerCase();
  
      if (lowercasedInput.includes('job opportunities')) {
        return getRandomResponse('jobOpportunities');
      } else if (lowercasedInput.includes('internship opportunities')) {
        return getRandomResponse('internshipOpportunities');
      } else if (lowercasedInput.includes('resume guidance')) {
        return getRandomResponse('resumeGuidance');
      } else if (lowercasedInput.includes('interview tips')) {
        return getRandomResponse('interviewTips');
      } else {
        return getRandomResponse('fallback');
      }
    };
  
    const getRandomResponse = (category) => {
      const responses = botResponses[category];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    };
  
    return (
        <>
        
      <div className="chat-app">
      <Navbar/>
     <div className='screen'><ChatWindow messages={messages} /></div>   
        {/* <UserInput onSendMessage={handleSendMessage} /> */}
      </div>
      <UserInput onSendMessage={handleSendMessage} />

      </>
    );
  };
  
  export default ChatApp;
  
