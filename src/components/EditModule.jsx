
const EditModule = ({setEditModule, editedBook, setEditedBook, handleUpdate}) => {
  return (
    <div className="delete-module">
     <div className="module-inner">
      <h5>Do you want to edit the book?</h5>
      <input
       value={editedBook.title}
       onChange={(e) => 
        setEditedBook({...editedBook, title: e.target.value})}
       type="text" className="form-control"
     />
     <div className="d-flex justify-content-around" >
     <button className="btn btn-warning" onClick={()=>setEditModule(false)}>Leave</button>
     <button className="btn btn-success" onClick={handleUpdate}>Save</button>
      </div>
      </div>
    </div>
  )
}

export default EditModule
