import * as React from "react";
import {useState,useReducer} from "react"
//----------------------------------------------------------------------
//                          INTERFACE
//----------------------------------------------------------------------
interface TodoInterface{
    name: string;
    completed: boolean;
}
interface TodoListInterface{
    [index:string]: TodoInterface
}
interface HanleChangeInterface{
    (event:React.ChangeEvent<HTMLInputElement>): void;
}
interface HandleSubmit{
    ():void
}
interface HandleTodoClick {
    (item :string): void;
}
//----------------------------------------------------------------------
export const Form:React.FC = () =>{
    const [todo,setTodo] = useState<TodoInterface>({
        name:"",
        completed: false
    });
    const [todoList,setTodoList] = useState<TodoListInterface[]>([]);

    const handleInput:HanleChangeInterface = (event) =>{
        console.log(event.currentTarget.value)
        setTodo({name:event.currentTarget.value,completed:false})
        
    }

    const handleButtonSubmit:HandleSubmit = () =>{
       // setTodoList([...todoList,todo])
         setTodo({name:"",completed:false})
    }
    const handleTodoItem:HandleTodoClick = (item) =>{
        console.log(item)
    }

    return(
        <div>
            <input
                type="text"
                value={todo.name}
                placeholder="Todo"
                onChange={handleInput}
            />
            <br/>
            <button onClick={handleButtonSubmit}>
                Add To Todo List
            </button>
            {todoList.length? <div>
                {todoList.map((item,index)=>{
                    return(
                        <p key={index}>{item}</p>
                    )
                })}
            </div>: null}
        </div>
    )
}
