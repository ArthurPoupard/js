export function Header(props) {
    const { todos } = props
    const todosLength = todos.length
    // Checks that there is more than one todo (equality is === instead)
    const isTasksPlural = todos.length != 1
    const grammar = isTasksPlural ? 'tasks' : 'task'
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {grammar}</h1>
        </header>
    )
}