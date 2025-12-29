import { useState } from "react"

const Items = ()=> {

    const [items,setItems] = useState([]);
    function AddItems (){
        setItems([...items,items.length+1])
    }
    function removeLastItem(){
        setItems(items.slice(0,-1))
    }
    return (
        <div>
            {items.map(ele=> <span>{ele},</span>)}
            <br />
            <button onClick={AddItems}>Add Items!</button>
            <button onClick={removeLastItem}>Remove Items!</button>
        </div>
    )
}
export default Items