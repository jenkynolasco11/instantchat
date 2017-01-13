import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {  onChangeText, /*deleteMessage, */sendMessage } from '../actions'

class ChatText extends Component {
  _changeText(e){
    this.props.onChangeText(e.target.value)
  }
  _sendMessage(){
    // console.log(this._sendMessage)

    this.props.sendMessage({
      from : 'user',
      to : 'user_2',
      body : this.props.message
    })

    this.props.onChangeText('')
  }
  render(){

    return (
      <div className='messages'>
        <input
          type='text'
          className='message-to-send'
          onChange={ this._changeText.bind(this) }
          value={ this.props.message }
        />
        <button onClick={this._sendMessage.bind(this)}> Send </button>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    message : state.message
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({
    sendMessage,
    onChangeText
    // ,
    // deleteMessage
  }, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )(ChatText)
