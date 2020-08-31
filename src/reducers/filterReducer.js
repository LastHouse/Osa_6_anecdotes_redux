const initialState = '';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY_VALUE':
      return action.payload.value.toLowerCase();
    default:
      return state;
  }
};

export const filterText = (payload) => {
  return {
    type: 'FILTER_BY_VALUE',
    payload,
  };
};

export default filterReducer;
