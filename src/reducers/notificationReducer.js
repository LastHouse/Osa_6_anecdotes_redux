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

export const setNotification = (content, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SHOW',
      data: { content },
    });
    setTimeout(() => {
      dispatch({ type: 'HIDE' });
    }, time * 1000);
  };
};

export default notificationReducer;
