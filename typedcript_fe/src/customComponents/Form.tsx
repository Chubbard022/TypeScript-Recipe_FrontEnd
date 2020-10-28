import * as React from "react";
import {useState,useReducer} from "react"
//----------------------------------------------------------------------
//                          INTERFACE
//----------------------------------------------------------------------
interface TodoInterface{
    name: string;
    completed: boolean;
    edit:boolean
}
interface HanleChangeInterface{
    (event:React.ChangeEvent<HTMLInputElement>): void;
}
interface HandleTodoClick {
    (item :TodoInterface, index:number): void;
}
//----------------------------------------------------------------------
export const Form:React.FC = () =>{
    const [todo,setTodo] = useState<TodoInterface>({
        name:"",
        completed: false,
        edit: false
    });
    const [todoList,setTodoList] = useState<Array<TodoInterface>>([]);

    const handleInput:HanleChangeInterface = (event) =>{
        setTodo({name:event.currentTarget.value,completed:false,edit:false})
        
    }
    const handleButtonSubmit = () =>{
            setTodoList([...todoList,todo])
            setTodo({name:"",completed:false,edit:false})
            console.log(todoList)
    }
    const handleTodoItem:HandleTodoClick = (item,index) =>{
        let updatedTodoList = [...todoList];
        updatedTodoList[index] = {name:item.name,completed:!item.completed,edit:false}
        setTodoList(updatedTodoList)
    }
    const handleTodoDoubleClick:HandleTodoClick = (item,index) =>{
        console.log("ITEM",item)
        let updatedTodoList = [...todoList];
        updatedTodoList[index] = {name:item.name,completed:!item.completed,edit:false}
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
                        <p key={index} 
                            style={item.completed? 
                            {color:"red"}:{color:"black"}}
                            onClick={()=>handleTodoItem(item,index)}
                            onDoubleClick={()=>handleTodoDoubleClick(item,index)}
                        >{item.name}</p>
                    )
                })}
            </div>: null}
        </div>
    )
}
