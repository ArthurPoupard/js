import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

import { useState, useEffect } from 'react'

function App() {

  // [variable, setter] = useState(default value)
  const [todos, setTodos] = useState([
    {input: 'Todo subject', complete: false}
  ])
  const [activeTab, setActiveTab] = useState('Open')

  function handleAddTodo(newTodo){
    // The todo list can't be modified dynamically
    // Need to create a copy and override
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleEditStateTodo(index){
    let newTodoList = [...todos]
    let editedTodo = todos[index]
    editedTodo['complete'] = true
    newTodoList[index] = editedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  
  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({todos : currentTodos}))
  }

  // To access local saved data : 
  // {} -> program to execute, [] -> codify when to execute it
  // Empty [] means as soon as app is ready
  useEffect(() => {
    // if the local storage isn't ready, or doesn't get the item, return
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    // parse the json data to the database variable
    let database = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(database.todos)
  }, [])

  return (
    <>
    
      <Header todos={todos}/>
      <Tabs todos={todos} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <TodoList todos={todos} activeTab={activeTab}
       handleDeleteTodo={handleDeleteTodo} 
       handleEditStateTodo={handleEditStateTodo} />
      <TodoInput handleAddTodo={handleAddTodo}/>

    </>
  )
}

export default App
