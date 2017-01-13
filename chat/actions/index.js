export const sendMessage = (message) => {
  return {
    type : 'NEW_MESSAGE',
    payload : message
  }
}

export const deleteMessage = (ind) => {
  return {
    type : 'DELETE_MESSAGE',
    payload : ind
  }
}

export const onChangeText = (text) => {
  return {
    type : 'TYPING',
    payload : text
  }
}
