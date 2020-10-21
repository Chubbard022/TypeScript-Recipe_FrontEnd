import * as React from 'react';
import {Form} from "../customComponents/Form";

export const HomeScreen:React.SFC = () =>{
    
    const getUserInput = (e:string) =>{
        console.log(e)
    }
    return(
        <div>
            "WORKING"
            <Form/>
        </div>
    )
}