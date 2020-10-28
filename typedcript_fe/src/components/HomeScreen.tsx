import * as React from 'react';
import {Form} from "../customComponents/Form";
import {ApiCall} from "../customComponents/ApiCall"

import {FetchApi} from "../customComponents/FetchApi"
export const HomeScreen:React.SFC = () =>{
    
    return(
        <div>
            <p>Todo Appilication</p>
            <Form/>
            <ApiCall />
            <FetchApi/>
        </div>
    )
}