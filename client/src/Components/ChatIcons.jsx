import React from 'react';
import './ChatIcon.css';
import {BsFillChatDotsFill} from 'react-icons/bs'


function ChatIcon({ onClick}) {


return (
    <div className="chat-icon" onClick={onClick}>
      <BsFillChatDotsFill color='white' fontSize='30px'/>
    </div>
  );
}

export default ChatIcon;
