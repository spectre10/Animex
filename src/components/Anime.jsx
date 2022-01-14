import React, { useState ,useEffect} from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

export default function Anime() {
    let params = useParams();
    console.log(params);
    const [loading, setLoading] = useState(false);
    const [Links,setLinks] = useState([])
    useEffect(() => {
        const loadPost = async () => {
  
            // Till the data is fetched using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its reult
            const response = await axios.get(
            "https://kitsu.io/api/edge/anime?filter%5Bslug%5D="+params.animeId);
  
            // After fetching data, stored it in posts state.
            setLinks(response.data.data);
            
            
            // Closed the loading page
            setLoading(false);
        }
        
        // Call the function
        loadPost();
    }, []);
    console.log(Links);
    return <div>
     {loading ? (
                    <h4>Loading...</h4>) :
                    (Links.map((item) =>
                        <h6>{JSON.stringify(item)}</h6>
                    ))
                }
    </div>
}