import React, { useState } from 'react';

const UserInput = ({ onSendMessage }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        onSendMessage(inputText);
        setInputText('');
    };

    return (
        <>
        <div className='container-fluid'>
                  
            <div className="user-input">
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
            </div>
        </>
    );
};

export default UserInput;
