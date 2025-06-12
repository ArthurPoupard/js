import { TodoCard } from "./TodoCard";

export function TodoList(props) {

    const { todos, activeTab } = props
    const tab = activeTab
    const filterTodosList = tab  === 'All' ?
        todos :
        tab == 'Open'?
            todos.filter(val => !val.complete) : 
            todos.filter(val => val.complete)

    return (
        <>

            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                     key={todoIndex}
                     todo={todo}
                     todoIndex={todos.findIndex(
                      val => val.input == todo.input)}
                     {...props}/>
                )
            })}

        </>
    )
}