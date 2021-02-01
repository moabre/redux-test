import React from 'react';
import { useDispatch } from 'react-redux';

const AddBook = () => {
  const dispatch = useDispatch();

  const displayAdd = () => {
    dispatch({
      type: 'TOGGLE_ADD',
    });
  };

  return (
    <button className='add-button' onClick={displayAdd}>
      Add Book
    </button>
  );
};

export default AddBook;
