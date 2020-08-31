import React from 'react';
import { useDispatch } from 'react-redux';
import { filterText } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const text = e.target.value;
    dispatch(filterText({ value: text }));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      Filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
