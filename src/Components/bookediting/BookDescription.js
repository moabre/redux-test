import React from 'react';

const BookDescription = ({
  book: { title, price, category, description, id },
}) => {
  return (
    <div className='bookDetail' key={id}>
      {title ? <p className='title'>Title: {title}</p> : null}
      {category ? <p className='category'> Category: {category}</p> : null}
      {price ? <p className='price'>Price: {price}</p> : null}
      {description ? (
        <div className='desc'>
          <span>Description: {description}</span>
        </div>
      ) : null}
    </div>
  );
};

export default BookDescription;
