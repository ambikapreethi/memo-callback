import React,{useCallback,useEffect,useState} from "react";
import MyComponent from "./myComponent";

function FetchDataFromApi()
{
    const[data,setData]=useState(null);
    const[count,setCount]=useState(0);

    const handleFetchData=useCallback(async()=>
        {
             try{
                const response=await fetch("https://fakestoreapi.com/products");
                const data=await response.json();
                setData(data);
                console.log(data);
                }
                catch(error)
                {
                    console.error("Error fetching data:",error);
                    return null;
                }
        },[]); 

        const handleClick=()=>
            {
                setCount(count+1);

            }
        
        return(
            <div style={{marginTop:"50PX",marginLeft:"100px"}} >
                <button style={{backgroundColor:"pink",width:"200px"}} onClick={handleFetchData}>Fetch Data from Api</button>
                    {data ? (<div>Data fetched:{JSON.stringify(data)}</div>):
                    (<p>No data fetched yet.</p>)
                }
                <button style={{backgroundColor:"pink",width:"200px"}} onClick={handleClick}>Increment count</button><br/><br/>
                { <MyComponent value={count} />}
            </div>
        )
}

export default FetchDataFromApi;
