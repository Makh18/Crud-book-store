import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {logInsert} from "./reportSlice";

export const getBooks=createAsyncThunk('book/getBooks', async(_, thunkAPI)=>{
    
    try{
    const resp=await fetch("http://localhost:3009/books");
    const data=await resp.json();
    return data;
    }catch(err){
        return thunkAPI.rejectWithValue(err.message);
    }
})
//insert Books
export const insertBooks=createAsyncThunk('book/insertBooks', async(bookdata, thunkAPI)=>{
    try{
        bookdata.username=thunkAPI.getState().auth.name;
        bookdata.password=thunkAPI.getState().auth.password;

        const resp=await fetch("http://localhost:3009/books",{
        method:'POST',
        body:JSON.stringify(bookdata),
        headers:{
            'Content-Type':'application/json; charset=UTF-8',
        },
        
    });
    
    const data=await resp.json();
    thunkAPI.dispatch(logInsert({name:"insert Book", status:"success"}))
    return data;
    }catch(err){
        thunkAPI.dispatch(logInsert({name:"insert Book", status:"failed"}))

        return thunkAPI.rejectWithValue(err.message);
    }
});
//delete books

export const deleteBooks=createAsyncThunk('book/deleteBooks', async(item, thunkAPI)=>{
    try{
       

        await fetch(`http://localhost:3009/books/${item.id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json; charset=UTF-8',
        },
        
    });
    return item;
    }catch(err){
        return thunkAPI.rejectWithValue(err.message);
    }
});
//get book
export const getBook=createAsyncThunk('book/getBook', async(item, thunkAPI)=>{
    try{
       

        await fetch(`http://localhost:3009/books/${item.id}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json; charset=UTF-8',
        },
        
    });
    return item;
    }catch(err){
        return thunkAPI.rejectWithValue(err.message);
    }
});

const bookSlice=createSlice({
   name:"book",
   initialState:{books:[], isLoading:false, error:null, bookInfo:null},
   extraReducers:{
    [getBooks.pending]:(state,action)=>{
         state.isLoading=true;
         state.error=null;
   },
   [getBooks.fulfilled]:(state,action)=>{
    state.isLoading=false;
    state.books=action.payload;
   },
   [getBooks.rejected]:(state,action)=>{
    state.isLoading=false;
    state.error=action.payload;
   },
   [insertBooks.pending]:(state, action)=>{
    state.isLoading=true;
    state.error=null;
   },
   [insertBooks.fulfilled]:(state, action)=>{
    state.isLoading=false;
    state.books.push(action.payload);
   },
   [insertBooks.rejected]:(state,action)=>{
    state.isLoading=false;
    state.error=action.payload;
},
[deleteBooks.pending]:(state, action)=>{
    state.isLoading=true;
    state.error=null;
   },
   [deleteBooks.fulfilled]:(state, action)=>{
    state.isLoading=false;
    state.books=state.books.filter(el=>el.id!==action.payload.id);
    console.log(action.payload);
   },
   [deleteBooks.rejected]:(state,action)=>{
    state.isLoading=false;
    state.error=action.payload;
   },
   [getBook.pending]:(state, action)=>{
    state.isLoading=true;
    state.error=null;
   },
   [getBook.fulfilled]:(state, action)=>{
    state.isLoading=false;
    state.bookInfo=action.payload;
    console.log(action.payload);
   },
   [getBook.rejected]:(state,action)=>{
    state.isLoading=false;
    state.error=action.payload;
   }

} 
})
export default bookSlice.reducer;