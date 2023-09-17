import React from 'react'
import { useState } from "react";
import {v4} from 'uuid';
import BookCard from './components/BookCard';
import DelModules from './components/DelModules';
import IsRead from './components/EditModule';
import EditModule from './components/EditModule';
import {toast} from 'react-toastify'


function App() {
  // all states for books
  const [books, setBooks] = useState([]);
  // state for adding books to the list
  const [bookName, setBookName]= useState('');
  //state for error on list
  const [inputError,setInputError]= useState(false);
  // states for modules
  const [deleteModule, setDeleteModule]= useState(false);
  const [deleteId, setDeleteId]= useState(null);
  const [editModule, setEditModule]= useState(false);
  const[editedBook, setEditedBook]= useState(null);


  // function of change on input fields
  const handleInputChange = (e) =>{
 
  // update the state
  setBookName(e.target.value);
  };

  // functiion for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // notify with react toastify
    if(!bookName){
      toast.warn('Please enter book!!!');
      return
    }
    // input elements and turning them into an object
    const newBook = {
      id : v4(),
      title : bookName,
      date : new Date().toLocaleString(),
      isRead : false
    };
    // sending object to state for books
    setBooks([...books, newBook]); // with spread 

    //remove info from the input
    setBookName('');
    // notify with react toastify
    toast.success('Book has been added successfully!!');
  };

 // get a confirmation modal from 
 const handleModule = (id) =>{
  // send id to state
  setDeleteId(id);
  setDeleteModule(true);
 };
 // delete the modal
 const handleDelete = (e) =>{
  // send id to state array
  const filtered = books.filter((book) => book.id !== deleteId)
  // update the state
  setBooks(filtered);
  // remove the modal
  setDeleteModule(false);
 // notify the update
 toast.error('Book has been deleted successfully!!');
 };
 // get an isRead function
 const handleRead = (book) =>{
 const updatedBook = {...book, isRead : !book.isRead};
 // find the index of the book
 const index =books.findIndex((item)=> item.id === book.id);
 // copy the array do not try to modify the state directly!!!
 const cloneBooks = [...books];
 // make it updated
 cloneBooks[index]= updatedBook;
 // update the state
 setBooks(cloneBooks);
 };
 // edit module
 const handleEdit = (book) =>{
  // set it to state
  setEditedBook(book)
  // close the module
  setEditModule(true)
   
 };
// editing the book
const handleUpdate = ()=>{
  // find the index
const index = books.findIndex((book)=> book.id === editedBook.id);
  // copy the array do not try to modify the state
const cloneBooks = [...books];
//replace the book with the prev book
cloneBooks.splice(index, 1, editedBook);
// update the state
setBooks(cloneBooks);
// close the module
setEditModule(false);
 // notigy the update
 toast.success('Book has been updated successfully!!');
}
 return (
    <div>
      <header className="bg-dark text-light py-3 fs-5 text-center">
      <h1>Are you a real <i>bookworm</i>? </h1>
      <h4>Here's your booklist..Let's go!!</h4>
      </header>
        {/* form.. */}
      <div className="container">
        <form onSubmit={handleSubmit} className="d-flex gap-3 mt-4">
          <input type="search"
          placeholder="Add a book here.."
          className="form-control shadow"
          value={bookName}
          onChange={handleInputChange}/>
          <button className="btn btn-warning shadow"> Add</button>
        </form>
        <br/>
        <br/>
        { books.length === 0 && (
        <h6>Ups! No added book yet!</h6>)}

        { books.map((book) => 
        <BookCard 
        key={book.id}
        book={book}
        handleModule={handleModule}
        handleRead={handleRead}
        handleEdit={handleEdit}
        /> )}
      </div>
      {/* modules */}
      { deleteModule && <DelModules  
      handleDelete={handleDelete}
      setDeleteModule ={setDeleteModule}
      /> }
      { editModule && <EditModule
      setEditModule={setEditModule}
      editedBook={editedBook}
      setEditedBook={setEditedBook}
      handleUpdate={handleUpdate}
      />}


    </div>
  );
        }

export default App;
 