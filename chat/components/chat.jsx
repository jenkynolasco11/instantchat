import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deleteMessage, sendMessage } from '../actions'

class Chat extends Component {
  render(){
    return (<h1> Hola </h1>)
  }
}

const mapStateToProps = ( state ) => {
  return {
    messages : state.messages
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({
    sendMessage,
    deleteMessage
  }, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )(Chat)
