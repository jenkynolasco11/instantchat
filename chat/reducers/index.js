import { combineReducers } from 'redux'
import { messages, message } from './reducer-messages'

const allReducers = combineReducers({
  messages,
  message
})

export default allReducers
