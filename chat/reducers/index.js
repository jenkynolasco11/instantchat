import { combineReducers } from 'redux'
import { messages } from './reducer-messages'

const allReducers = combineReducers({
  messages
})

export default allReducers
