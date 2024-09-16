
import { useState } from "react";
export default function list(){
    const[todoList,setTodoList]=useState([]);
    const [text, setText] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault()
        const nextTodoList = todoList.concat({
            id: todoList.length,
            text,
            checked: false,
          });
        
          setTodoList(nextTodoList);
        };
        
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>toDo:
                <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" value="Add" />
            </label>
            
        
            <div className='lists'>
                {todoList.map((todoItem) =>(
                    <div>
                    <input className='checkbox' type='checkbox'/>
                    <span className='listContent'>{todoItem.text}</span>
                    <button type='button' className='deleteBtn'>x</button>
                    </div>
                ))}
            </div>

           
        </form>
        

    </>
    )
}
          
