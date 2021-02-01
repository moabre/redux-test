import React from 'react';

const BookDescription = ({
  book: { title, price, category, description, id },
}) => {
  return (
    <div className='bookDetail' key={id}>
      <p className='title'>Title: {title}</p>
      <p className='category'> Category: {category}</p>
      <p className='price'>Price: {price}</p>
      {description ? (
        <span className='description'>Description: {description}</span>
      ) : null}
    </div>
  );
};

export default BookDescription;
