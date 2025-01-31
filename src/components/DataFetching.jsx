'use client'

import { useEffect, useState } from "react";


const DataFetching = () => {

    const [data, setData] = useState([]);

    const fetchData= async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        setData(data);
    }

    useEffect(()=>{
        fetchData();
    },[]);

 const first3Entries = data.slice(0,3);


  return (
    <div>
        <h1>DataFetching</h1>
        <ul>
            {first3Entries.map(item=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default DataFetching