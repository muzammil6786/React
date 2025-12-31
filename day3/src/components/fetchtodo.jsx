import axios from 'axios'
import { useState } from 'react'

const FetchTodo = () => {
    const [data, setData] = useState([]);
    const [input , setInput] = useState("");
    const gettodo = async () => {

        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        {response && setData(response.data)}
    }

    // const AddTodo = async ()=> {
    //     await axios.post("https://jsonplaceholder.typicode.com/posts",{
    //         title : input,
            
    //     })
    //     setInput("");
    //     alert("Todo is added sucessfully")
    //     gettodo()
    // }


    return (
        <div>
            {/* <div>
                <input type="text" value={input} onChange={e=> setInput(e.target.value)}/>
                <button onClick={AddTodo}>Add Todo</button>
            </div> */}

            <button onClick={gettodo}>Fetch Todo</button>
            <div>
                {data && data.map((todo) => (
                    <div className='tododata'>
                        <p>{todo.title}</p>
                        <p>{todo.id}</p>
                        <p>{todo.body}</p>
                    </div>
                )

                )}
            </div>
        </div>
    )
}

export default FetchTodo