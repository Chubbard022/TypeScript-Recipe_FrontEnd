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
    [index:number]: TodoInterface
}
interface HanleChangeInterface{
    (event:React.ChangeEvent<HTMLInputElement>): void;
}
interface HandleSubmit{
    ():void
}
interface HandleTodoClick {
    (item :TodoInterface, index:number): void;
}
//----------------------------------------------------------------------
export const Form:React.FC = () =>{
    const [todo,setTodo] = useState<TodoInterface>({
        name:"",
        completed: false
    });
    const [todoList,setTodoList] = useState<Array<TodoInterface>>([]);

    const handleInput:HanleChangeInterface = (event) =>{
        setTodo({name:event.currentTarget.value,completed:false})
        
    }

    const handleButtonSubmit = () =>{
         setTodoList([...todoList,todo])
         setTodo({name:"",completed:false})
         console.log(todoList)
    }
    const handleTodoItem:HandleTodoClick = (item,index) =>{
        console.log(item,index)

        let updatedTodoList = [...todoList];
        updatedTodoList[index] = {name:item.name,completed:!item.completed}
        setTodoList(updatedTodoList)
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
                        <p key={index} style={item.completed? {color:"red"}:{color:"black"}}onClick={()=>handleTodoItem(item,index)}>{item.name}</p>
                    )
                })}
            </div>: null}
        </div>
    )
}
