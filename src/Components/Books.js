import React, { useState } from 'react';
import BookDescription from './bookediting/BookDescription';
import Button from './bookediting/Button';
import { useSelector, useDispatch } from 'react-redux';
import './styles/books.css';
import EditModal from './bookediting/EditModal';

const Books = () => {
  const [editBook, setEditBook] = useState({});
  const state = useSelector((state) => state);
  const { bookstore, modal } = state;
  const dispatch = useDispatch();

  const toggleEdit = (id) => {
    const bookContent = bookstore.filter((i) => i.id === id);
    setEditBook(bookContent[0]);
    dispatch({
      type: 'TOGGLE_EDIT',
    });
  };

  return (
    <div className='book-wrapper'>
      {bookstore.map((book) => {
        const { id } = book;
        return (
          <div key={id} className='book' onClick={() => toggleEdit(id)}>
            <BookDescription book={book} />
            <Button id={id} />
          </div>
        );
      })}
      {modal.edit ? <EditModal book={editBook} /> : null}
    </div>
  );
};

export default Books;
