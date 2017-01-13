const defaultMessages = [
  {
    from : 'placeholder',
    to : 'user',
    message : 'Welcome to the chat',
    timestamp : new Date().getTime(),
  }
]

export const messages = (action, state=defaultMessages) => {
  switch (action.type){
    case 'NEW_MESSAGE':
      const newMsg = action.payload
      return [].concat(newMsg)
      break
    case 'DELETE_MESSAGE':
      const index = action.payload
      const arr = [...state]
      return [].concat(arr.splice(index,1))
      break
  }
  return state
}
