import React, { Fragment } from 'react';

const BookInfo = ({bookInfo}) => {
 
  return (
    <Fragment>
      <h2>Book Details</h2>
      {bookInfo ? (
      <div>
      <h5>Title:{bookInfo.title}</h5>
      <h5>InsertedBy: {bookInfo.username}</h5>
      <h5>Price:{bookInfo.price}</h5>
      <h5>Description:{bookInfo.Description}</h5>
      </div>
      ) :(
        <div className='alert alert-secondary' role='alert'>
        There is no book selected yet. Please select!
      </div>
      )
}
    </Fragment>
  );
};

export default BookInfo;
