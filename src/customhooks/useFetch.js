import {useState,useEffect} from 'react'

function useFetch(fetch_url) {
    const[data,setData] = useState([]);

    useEffect(()=>{
        const fetch_data = async()=>{
           let res = await fetch(fetch_url);
           res = await res.json();
           setData(res);
        }
        fetch_data();
    },[fetch_url]);

    return [data]; 
}

export default useFetch;
