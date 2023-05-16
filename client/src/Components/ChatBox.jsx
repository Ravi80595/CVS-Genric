import React from 'react';
import './ChatBox.css';
import {Box,Text,Input,Textarea,Button} from '@chakra-ui/react'


function ChatBox() {
  return (
    <div className="chat-box">
        <Box>
            <Text >Please fill out this form and we will get back to you ASAP.</Text>
            <Input mb={5} mt={5} placeholder='*Name'/>
            <Input mb={5} placeholder='*Email'/>
            <Textarea mb={5} placeholder='*Message'></Textarea>
            <Button w='100%' bg='#0c8281' color='white'>Submit</Button>
        </Box>
    </div>
  );
}

export default ChatBox;
