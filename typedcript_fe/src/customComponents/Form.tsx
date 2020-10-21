import * as React from "react";
import {useState,useReducer} from "react"
import { ReactNode } from "react";



// interface FormProps{
//     //children?:ReactNode,
//     username: string,
//     password: string
// }


const handleInputChange = (input:string) =>{
    //based on user input, set changes to username and password
}

export const Form:React.FC =() =>{
    return(
        <form>
            <input 
            placeholder="username"
            type="text"
            name="usename"
            //value={props.username}
            onChange={()=>handleInputChange}
            />
            <input 
            placeholder="password"
            type="password"
            name="password"
            //evalue={props.password}
            onChange={()=>handleInputChange}
            />
            <button>Register</button>
        </form>
    )
}
