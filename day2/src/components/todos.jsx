import { useState } from "react"

const TodoList = () => {
    const [todos, setTodos] = useState(
        [{
            id: 1,
            title: "Todo 1",
            isDone: false

        },
        {
            id: 2,
            title: "Todo 2",
            isDone: false

        }
        ])
    const addTask = () => {
        setTodos([...todos, {
            id: `${todos.length + 1}`,
            title: `Todo ${todos.length + 1}`,
            isDone: false
        }])
    }


    const updateSatus = (id) => {
        const updatedtodo = todos.map(ele => {
            if (ele.id === id) {
                return { ...ele, isDone: !ele.isDone }
            }
            return ele;
        })
        setTodos(updatedtodo);
    }

    const deletetodo = (id) => {
        const updated = todos.filter(ele => ele.id !== id)
        setTodos(updated);
    }

    return (
        <div>
            <h3>Todo App</h3>
            <button onClick={addTask}>Add Task</button>
            {todos.map(ele => {
                return <div style={{ border: "solid 1px black", padding: "16px", marginTop: "15px" }}>
                    <p style={{ textDecoration: ele.isDone ? "line-through" : "none" }}> {ele.title}</p>
                    <button onClick={() => updateSatus(ele.id)}>{ele.isDone ? "Mark as undone" : "Mark as complete"} </button>
                    <button style={{ backgroundColor: "red" }} onClick={() => deletetodo(ele.id)}>Delete button </button>

                </div>

            })}

        </div>
    )

}
export default TodoList