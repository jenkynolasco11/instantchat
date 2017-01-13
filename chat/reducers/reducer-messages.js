const defaultMessages = [
  {
    from : 'placeholder',
    to : 'user',
    body : 'Welcome to the chat',
    timestamp : Date.now(),
  }
]

export const messages = (state=defaultMessages, action) => {
  switch (action.type){
    case 'NEW_MESSAGE':
      const timestamp = { timestamp : Date.now() }
      const newMsg = Object.assign({}, action.payload, timestamp )
      return [...state].concat(newMsg)
      break
    case 'DELETE_MESSAGE':
      const index = action.payload
      const arr = [...state]
      return [].concat(arr.splice(index,1))
      break
  }
  return state
}

export const message = (state='', action) => {
  switch (action.type){
    case 'TYPING' :
      const text = action.payload
      return text
      break
  }
  return state
}
