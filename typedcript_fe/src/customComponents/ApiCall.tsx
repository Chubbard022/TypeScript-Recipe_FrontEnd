import React,{useState,useEffect}from "react";

interface DataInterface{
    "ID Nation":string,
    "Nation":string,
    "ID Yeat": number,
    "Population": number,
    "Slug Nation": string
}

export const ApiCall = () => {

    const [data,setData] = useState<Array<DataInterface>>([])

   async function getData<T>(request:string):Promise<T>{
        const response = await fetch(request);
        const body = await response.json();
        return body.data
    }

    useEffect(()=>{
        const data = async() =>{
        let ENDPOINT = `https://datausa.io/api/data?drilldowns=Nation&measures=Population`
        const exampleData =  await getData<Array<DataInterface>>(ENDPOINT)
        setData(exampleData)
        }
        data()
    },[])
    console.log(data)
    return(
        <>
            <h1>GETTING DATA</h1>
        </>
    )
}