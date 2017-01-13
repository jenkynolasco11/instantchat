import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deleteMessage, /*, sendMessage */ } from '../actions'

class ChatMessages extends Component {
  render(){
    const messages = [...this.props.messages]

    const renderMessages = (message) => {
      return (
        <div className='message' key={message.timestamp}>
          <h4 className='from'>{message.from}</h4>
          <p className='body'>{message.body}</p>
          <span className='timestamp'>{message.timestamp}</span>
          <span className='to'>{message.to}</span>
        </div>
      )
    }

    // console.log('rendermessage', renderMessages)
    return (
      <div className='messages'>
        {
           messages.map(renderMessages)
        }
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    messages : state.messages
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({
    // sendMessage,
    deleteMessage
  }, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )(ChatMessages)
