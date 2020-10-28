import * as React from 'react';
import {Form} from "../customComponents/Form";
import {ApiCall} from "../customComponents/ApiCall"

export const HomeScreen:React.SFC = () =>{
    
    return(
        <div>
            <p>Todo Appilication</p>
            <Form/>
            <ApiCall />
        </div>
    )
}