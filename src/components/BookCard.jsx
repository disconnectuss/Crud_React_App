import React from "react"


const BookCard = ({book, handleModule, handleRead, handleEdit}) => {
// her seferinde prop yazmamak için propu book olarak aldık  

  return (
    <div className=" border rounded d-flex p-3 shadow justify-content-between align-items-center mt-5">
      <div>
        <h5 style={{textDecoration: book.isRead ? 'line-through' : 'none'}}>{book.title}</h5>
        <p>{book.date}</p>
      </div>
      <div className="btn-group">
        <button className="btn btn-danger" onClick={()=> handleModule(book.id)}>Delete</button>
        <button className="btn btn-primary" onClick={()=>handleEdit(book)}>Edit </button>
        <button className="btn btn-success" onClick={()=>handleRead(book)}>
          { book.isRead ? 'Read' : 'Is not Read'}
        </button>
      </div>
    </div>
  )
}

export default BookCard
