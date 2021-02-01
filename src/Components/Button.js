import React from 'react';
import { useDispatch } from 'react-redux';

const Button = ({ id }) => {
  const dispatch = useDispatch();
  const deleteBook = (event) => {
    dispatch({
      type: 'DELETE_BOOK',
      payload: { id },
    });
    event.stopPropagation();
  };
  return (
    <div className='button-wrapper'>
      <button className='delete' onClick={(e) => deleteBook(e)}>
        Delete
      </button>
    </div>
  );
};

export default Button;
