import React from 'react'
import { useState  } from 'react'

export const AddTodo = (props) => {
    const [title,setTitle] =useState("");
    const [desc,setDesc] =useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title ||  !desc) {
            alert('pls fill the data')
        }else{
            props.addTodo(title,desc);
            setDesc("");
            setTitle ("")
        }
        
   
}

  
    return (
        <div className='container my-3'>
            <h3>Add a to do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To Do title</label>
                    <input type="text" className="form-control"  value={title} id="title" onChange= { (e)=>setTitle(e.target.value)}/>
                 
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">To Do description </label>
                    <input type="text" className="form-control" value={desc} id="desc"  onChange= { (e)=>setDesc(e.target.value)}/>
                </div>
                
                <button type="submit" className="btn btn-success btn-sm">Add ToDo</button>
            </form>

        </div>
    )
}
