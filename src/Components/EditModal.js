import React from 'react';
import EditForm from './EditForm';
import { useSelector } from 'react-redux';

const EditModal = ({ book }) => {
  const state = useSelector((state) => state);
  const { modal } = state;
  return (
    <div className={modal.edit ? 'add-active' : 'add'}>
      <div className='modal-content'>
        <h1>Edit Book</h1>
        <EditForm book={book} />
      </div>
    </div>
  );
};

export default EditModal;
