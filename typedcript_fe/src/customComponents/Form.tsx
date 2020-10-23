import * as React from "react";
import {useState,useReducer} from "react"

type TodoType = { name: string | number
}
interface HanleChangeInterface{
    (ev:React.ChangeEvent<HTMLInputElement>): void;
}

export const Form:React.FC = () =>{
    const [todo,setTodo] = useState<string>("");
    const [todoList,setTodoList] = useState<string[]>([]);

    const handleInput:HanleChangeInterface = (event) =>{
        console.log(event.currentTarget.value)
        setTodo(event.currentTarget.value)
        
    }

    return(
        <input
            type="text"
            value={todo}
            // onChange={(
            //     ev: React.ChangeEvent<HTMLInputElement>
            //     ): void => setTodo(ev.target.value)}
            onChange={handleInput}
        />
    )
}
