import { useState } from 'react'

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="input-container">

            <input value={inputValue} 
             // Listen for things typed in the input bar
             onChange={(val) => {setInputValue(val.target.value)}} 
             placeholder="Add task"/>
            <button onClick={() => {
                // Safeguard empty string
                if (!inputValue) { return }
                // Execute the function with the current value
                handleAddTodo(inputValue)
                setInputValue("")
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>
    )
}