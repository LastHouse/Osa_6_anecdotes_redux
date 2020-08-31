const initialState = null;

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.data.content;
    case 'HIDE':
      return initialState;
    default:
      return state;
  }
};

export const showNotification = (content) => {
  return {
    type: 'SHOW',
    data: { content },
  };
};

export const hideNotification = (content) => {
  return {
    type: 'HIDE',
    data: { content },
  };
};

export default notificationReducer;
