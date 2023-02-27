import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let myStyle = {
    minHeight: " 70vh",
    margin: "40px auto"
  }
  return (
    <div className='container my-3 ' style={myStyle}>
      <h3 > ToDos List</h3>


      {props.todos.length === 0 ? "no to Dos available " : props.todos.map((todo) => {

        return (<>
          <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />  <hr></hr>
        </>
        )




      })
      }

    </div>
  )
}
