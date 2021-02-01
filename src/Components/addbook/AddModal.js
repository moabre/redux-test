import React from 'react';
import BookForm from './BookForm';
import { useSelector } from 'react-redux';
import '../styles/addmodal.css';

const AddModal = () => {
  const state = useSelector((state) => state);
  const { modal } = state;

  return (
    <div className={modal.add ? 'add-active' : 'add'}>
      <div className='modal-content'>
        <h1>Add Book</h1>
        <BookForm />
      </div>
    </div>
  );
};

export default AddModal;
