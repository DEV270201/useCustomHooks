import {useState,useEffect} from 'react';
import axios from 'axios';

function useFetch(fetch_url) {
    const[data,setData] = useState([]);
    const[error,setError] = useState(null);

    useEffect(()=>{
       console.log("ffff");
    });

    useEffect(()=>{
        //using async await
        try{
            const fetch_data = async()=>{
                if(!fetch_url){
                    setError("invalid url!!");
                    return;
                }
               let res = await axios(fetch_url);
               setData(res);
            }
        fetch_data();
        }catch(err){
            console.log("Err : ",err);
            setError("sorry, something went wrong!");
        }

        //using promises
        
            // axios.get(fetch_url)
            // .then((resp)=>{
            //     console.log("got it");
            //     setData(resp);
            // }).catch((err)=>{
            //         console.log("errrrrrrrrrr : ",err.error);
            //         setError("sorry, something went wrong!");
            //     });
                
    },[fetch_url]);

    return [data,error]; 
}

export default useFetch;
