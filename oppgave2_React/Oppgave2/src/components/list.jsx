
import { useState } from "react";
import './CSS/list.css'
export default function list(){
    const[todoList,setTodoList]=useState([]);
    const [text, setText] = useState("");

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    

    const [edit,setEdit] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault()
        if (text.trim() === "") return;

        if (editId !== null) {
        
            const updatedList = todoList.map((item) =>
                item.id === editId ? { ...item, text: editText } : item
            );
            setTodoList(updatedList);
            setEditId(null);
            setEditText("");
        } else {
            
            const nextTodoList = todoList.concat({
                id: todoList.length,
                text,
                checked: false,
            });
            setTodoList(nextTodoList);
            setText("");
            
        }
        

          

        };

    const handleDelete = (id) => {
        const filteredList = todoList.filter((item) => item.id !== id);
        setTodoList(filteredList);}


    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
        setText(text);
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>

                <div className="nav">
                <h1>To Do </h1>
                </div>
                
                <input 
                className="search"
                type="text" 
                value={editId !== null ? editText : text}
                onChange={(e) => (editId !== null ? setEditText(e.target.value) : setText(e.target.value))}
                />
                
                <input type="submit" value={editId !== null ? "Update" : "Add"} 
                className="submit"
                />
            </label>
            
        
            <div className='lists'>
                {todoList.map((todoItem) =>(
                    <div className="container">
                    <input className='checkbox' type='checkbox'/>
                    <span className='listContent'>{todoItem.text}</span>
                    <button type='button' className='revise' onClick={() => handleEdit(todoItem.id, todoItem.text)}>revise</button>
                    <button onClick={() => handleDelete(todoItem.id)} className="deleteBtn">X</button>

                    </div>
                ))}
            </div>

           
        </form>
        

    </>
    )
}
          
