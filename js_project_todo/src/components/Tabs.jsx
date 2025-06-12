// Mapping -> Creates 3 buttons by iterating over 'tabs'
export function Tabs(props) {
    const { todos, activeTab, setActiveTab } = props
    const tabs = ['All', 'Open', 'Completed']

    return (
        <nav className="tab-container">

            {tabs.map((tab, tabIndex) => {
                // If the current checked tab is 'All'
                const numTasks = tab === 'All' ?
                    // Use the length of the array
                    todos.length :
                    // Else, if tab is 'Open'
                    tab == 'Open'?
                        // Checks the value of the complete field of todos
                        todos.filter(val => !val.complete).length : 
                        // Else, 'Closed' tab so reverse number
                        todos.filter(val => val.complete).length

                return (
                    <button onClick={() => {
                        setActiveTab(tab)
                     }}
                     key={tabIndex}
                     className={"tab-button"
                     // Change the class, if tab is active add tab-selected style
                     + (tab === activeTab ? ' tab-selected' : '')}>
                        <h4>{tab} <span>{numTasks}</span></h4>
                    </button>
                )
            })}
            <hr/>

        </nav>
    )
}