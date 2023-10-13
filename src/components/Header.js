import React,{Fragment} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {LogInOut} from '../store/authSlice';
const Header = () => {
  const dispatch=useDispatch();
  const {isLoggedIn} = useSelector((state)=>state.auth);
  const {error}=useSelector((state)=>state.books);
  console.log(error);
  return (
    <Fragment>
      {error &&
      <div className="alert alert-danger mb-0 " role="alert">
        {error}
    </div>
}
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' type='submit' onClick={()=>dispatch(LogInOut())}>
           {isLoggedIn ? 'Log out' : 'Log in'}      

</button>
    </nav>
     
    </Fragment>
  );
};

export default Header;
