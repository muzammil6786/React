import { useEffect, useState } from "react"

const Timer = ()=> {

    const [seconds,setSeconds] = useState(0);
    const[counter,setCounter] = useState(0);

    useEffect(()=>{
       let Interval = setInterval(()=>{
            setSeconds(prev=> prev + 1)
        },1000)

        return ()=>{
            clearInterval(Interval)
        }
    },[])

    

    return (
        <div>
            <div>TImer {seconds}s</div>
            <button>Start Timer</button>
            <button onClick={()=>{setCounter((prev)=> prev +1)}} > counter {counter}</button>
        </div>
    )
}
export default Timer