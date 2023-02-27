import React, { useEffect, useState } from 'react'
import { Todos } from './Todos';
import { Footer } from './Footer'
import { AddTodo } from './AddTodo';

function Home() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }



    const onDelete = (todo) => {
        console.log(" I am OnDelete of todo", todo);

        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
    }
    const addTodo = (title, desc) => {
        console.log('I am adding title :', title)
        let sno;
        if (todos.length === 0) {
            sno = 0;
        }
        else {
            sno = todos[todos.length - 1].sno + 1
        }

        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo)
    }

    const [todos, setTodos] = useState(initTodo)
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))


    }, [todos])


    return (
        <>
            <AddTodo addTodo={addTodo}></AddTodo>
            {
             <Todos todos={todos} onDelete={onDelete} ></Todos>
            }
               
            
            
            <Footer></Footer>
        </>
    )
}

export default Home