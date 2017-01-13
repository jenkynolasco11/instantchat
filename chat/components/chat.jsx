import React/*, { Component }*/ from 'react'
import ChatMessages from './ChatMessages.jsx'
import ChatText from './ChatText.jsx'

const Chat = () =>{
  return (
    <div className='chat'>
      <ChatMessages />
      <ChatText />
    </div>
  )
}

export default Chat
