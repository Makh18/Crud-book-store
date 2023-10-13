import React from "react";

const BooksList = ({ isLoading, books,isLoggedIn,deleteBooks,dispatch, getBook }) => {
  return (
    <div>
      <h2>Books List</h2>
  {isLoading?(
        "loading..."
      ) : (
        <ul className="list-group">
          {books.length > 0 ? ( books.map((item)=>(
  <li className="list-group-item d-flex  justify-content-between align-items-center" key={item.id}>
          <div>{item.title}</div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" disabled={!isLoggedIn} onClick={()=>dispatch(getBook(item))}>
              Read
            </button>
            <button type="button" className="btn btn-danger" disabled={!isLoggedIn} onClick={()=>dispatch(deleteBooks(item))
             .unwrap()
             .then((originalPromiseResult) => {
               console.log(originalPromiseResult);
               alert(` the ${originalPromiseResult.title} book has deleted`)
             })
             .catch((rejectedValueOrSerializedError) => {
              console.log(rejectedValueOrSerializedError);
            })
            
            
            }>
              Delete
            </button>
          </div>
        </li>

))): "there is no book available..."}
        </ul>
      )}
    </div>
  );
};

export default BooksList;
