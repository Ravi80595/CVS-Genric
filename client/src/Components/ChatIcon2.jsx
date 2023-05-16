import React from 'react';
import './ChatIcon.css';
import {AiOutlineClose} from 'react-icons/ai'


function ChatIcon2({ onClick}) {


return (
    <div className="chat-icon" onClick={onClick}>
      <AiOutlineClose color='white' fontSize='30px'/>
    </div>
  );
}

export default ChatIcon2;
