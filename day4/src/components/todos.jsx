import { useState } from "react";
import axios from "axios";
const TodoApp = () => {
  const API_Endpoint = "https://jsonplaceholder.typicode.com/comments";

  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const getTodo = async () => {
    try {
      const response = await axios.get(API_Endpoint);
      setData(response.data);
      setError("");
    } catch (err) {
      setError("Error in getting data from backend");
    }
  };

  const AddTodo = async()=>{
    try{
        const response = await axios.post(API_Endpoint,{
            title: input,
            status : false
        });
        setData(response.data);
        setError("");

    }catch(err){
        setError("Error in adding Todo");
    }
  };

  const deleteTodo = async(id)=>{
    try{

        const response = await axios.delete(`${API_Endpoint}/${id}`)
        getTodo()
        setError("");
    }catch(err){
        setError("Error in Deleting Todo");
    }

  }

  const updateTodo = async (id)=> {
    try{

        const response = await axios.put(`${API_Endpoint}/${id}`,{
            title: input
        })
        getTodo()
        setError("");
    }catch(err){
        setError("Error in Updating Todo");
    }
  }

  return (
    <div>
      <h3>Todo Application</h3>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Add Todo</button>
      </div>
        <button onClick={getTodo}>Fetch Todo</button>

         {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
            {data.map((todo)=>
            <div  key={todo.id} style={{ border: "1px solid #ccc", margin: "10px"}}>
                <p>{todo.name}</p>
                <p>{todo.email}</p>
                <p>{todo.body}</p>
                <button onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
            </div>
            )
            }
      </div>

    </div>
  );
};
export default TodoApp;
