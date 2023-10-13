import React, { Fragment,useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, deleteBooks,getBook } from '../../store/bookSlice';

import './book.css';

const PostContainer = () => {
  const {isLoggedIn}=useSelector((state)=>state.auth);

  const dispatch=useDispatch();
  const {books, isLoading, bookInfo}=useSelector((state)=>state.books);
 

  useEffect(()=>{
    dispatch(getBooks());
  },[dispatch]);
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
        <BooksList isLoading={isLoading} books={books} isLoggedIn={isLoggedIn} deleteBooks={deleteBooks} dispatch={dispatch} getBook={getBook}/>
        </div>
        <div className='col side-line'>
          <BookInfo bookInfo={bookInfo}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
