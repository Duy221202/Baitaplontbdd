// data.js
const messagesData = [];

export const addMessage = (message) => {
  console.log('Adding message:', message);
  messagesData.push(message);
};

export const getMessages = () => {
  return messagesData;
};
