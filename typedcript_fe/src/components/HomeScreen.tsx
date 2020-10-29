import * as React from 'react';
import {Form} from "../customComponents/Form";
import {ApiCall} from "../customComponents/ApiCall"

import {FetchApi} from "../customComponents/FetchApi"

interface test{
    test: string,
        best: boolean,
        another: number[],
        obj: {
            test: string
    }
}
export const HomeScreen:React.SFC = () =>{
    const test = "stringARR";
        // best: false,
        // another: [1,2,3,4,56],
        // obj: {
        //     test: "stringing"
        // }
    
    return(
        <div>
            <p>Todo Appilication</p>
            <Form test={test}/>
            <ApiCall />
            <FetchApi/>
        </div>
    )
}