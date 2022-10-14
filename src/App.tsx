import React, {useEffect, useState} from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import TodoForm from "./components/TodoForm";
import {todo} from "./interfaces";
import {TodoContext} from "./context";

const App:React.FC = () => {
    const [todos, setTodos] = useState<todo[]>([])
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("todos")!).length > 0) {
            const saved = JSON.parse(localStorage.getItem("todos")!) as todo[]
            setTodos(saved)
        }

    }, [])
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    const onButton = (todoTitle: string):void => {
        const newTodo:todo = {
            id: Date.now(),
            title: todoTitle,
            completed: false,
        }
        setTodos(prev => [...prev, newTodo])
    }
    const onRemove = (id: number):void => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }
    const onCheck = (id: number):void => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                return todo
            } else {
                return todo
            }
        }))
        console.log(id)
    }

  return (
      <BrowserRouter>
          <TodoContext.Provider value={
              {onCheck, onRemove, todos}}>
            <NavBar />
            <TodoForm onButton={onButton} />
          </TodoContext.Provider>
      </BrowserRouter>
  );
}

export default App;
