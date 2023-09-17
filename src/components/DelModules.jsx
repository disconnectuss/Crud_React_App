import React from 'react'

const DelModules = ({handleDelete, setDeleteModule}) => {
  return (
    <div className='delete-module'> 
        <div className='module-inner shadow'>
            <h6>Sure to delete?</h6>
            <button className='btn btn-warning' onClick={()=> setDeleteModule(false)}>No</button>
            <button className='btn btn-danger' onClick={handleDelete}>Yes</button>
        </div>
   
    </div>
  )
}

export default DelModules
