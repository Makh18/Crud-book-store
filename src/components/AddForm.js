import React,{useRef}from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { insertBooks } from '../store/bookSlice';

const Addform = () => {
  const {isLoggedIn}=useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const title = useRef();
  const price = useRef();
  const Description= useRef();
const handleSubmit=(e)=>{
  const data ={
    title:title.current.value,
    price:price.current.value,
    Description:Description.current.value
  }
  dispatch(insertBooks(data));
e.preventDefault();
title.current.value=null;
price.current.value=null;
Description.current.value=null;

}
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required 
             ref={title}
             />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required ref={price}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
              ref={Description}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
