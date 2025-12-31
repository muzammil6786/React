import { useState } from "react"

// controlled component
const InputBox = ()=> {
    const [input,setInput] = useState("")
    const setNewName = (event)=>{
        setInput(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={setNewName}  value={input}/>
            <p>Name : {input}</p>
        </div>
    )
}
export default InputBox