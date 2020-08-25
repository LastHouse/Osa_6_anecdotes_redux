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

export const showNotification = (id, content) => {
  return {
    type: 'SHOW',
    data: { id, content },
  };
};

export const hideNotification = (id, content) => {
  return {
    type: 'HIDE',
    data: { content },
  };
};

export default notificationReducer;
