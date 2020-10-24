import * as React from 'react';
import {Form} from "../customComponents/Form";
import {FetchApi} from "../customComponents/FetchApi"
export const HomeScreen:React.SFC = () =>{
    
    return(
        <div>
            <p>Todo Appilication</p>
            <Form/>
            <FetchApi/>
        </div>
    )
}