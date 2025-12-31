import { useState } from "react"

const Form = () => {

    const [data,setData] = useState({
        name : "",
        email : "",
        password : ""
    })
    const [error,setError] = useState("")
 
    const handleInputs = (event)=>{
        event.preventDefault();

        if (!data.name || !data.email || !data.password) {
           setError("please fill all the details")
           return
        }
        console.log(data)
        setError("")
        setData({
            name : "",
            email :"",
            password : ""
        })
    }
    
    const handleOnChnage = (event)=>{
        // console.log(event)
        const {name,value} = event.target;
        setData({
            ...data,
            [name] : value
        })
    }
    

    return <form onSubmit={handleInputs} 
    // onChange={handleOnChnage} 
    >
         <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={data.name}
        onChange={handleOnChnage} 
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={data.email}
        onChange={handleOnChnage} 
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={data.password}
        onChange={handleOnChnage} 
      />
        {error && <p>{error}</p>}
      <button type="submit">Submit Details</button>
    </form>
}

export default Form