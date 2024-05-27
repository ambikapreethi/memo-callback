import React,{useCallback,useEffect,useState} from "react";
import MyComponent from "./myComponent";

function FetchDataFromApi()
{
    const[data,setData]=useState(null);
    const[value,setValue]=useState("");

    const handleFetchData=useCallback(async()=>
        {
             try{
                const response=await fetch("https://fakestoreapi.com/products");
                const data=await response.json();
                setData(data);
                }
                catch(error)
                {
                    console.error("Error fetching data:",error);
                    return null;
                }
        },[]); 

        const handleClick=()=>
            {
                setValue("preethi");

            }
        
        return(
            <div style={{marginTop:"50PX",marginLeft:"100px"}} >
                <button style={{backgroundColor:"pink",width:"200px"}} onClick={handleFetchData}>Fetch Data from Api</button>
                    {data ? (<div>Data fetched:{JSON.stringify(data)}</div>):
                    (<p>No data fetched yet.</p>)
                }
                <button style={{backgroundColor:"pink",width:"200px"}} onClick={handleClick}>Render Memoized Component</button><br/><br/>
                { <MyComponent value={value} />}
            </div>
        )
}

export default FetchDataFromApi;
