import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Anime() {
    let params = useParams();
    // console.log(params);
    const [loading, setLoading] = useState(false);
    const [Links,setLinks] = useState([])
    const [clicked , setClicked] = useState(false);
    function handle(){
        setClicked(!clicked);
     }
    useEffect(() => {
        const loadPost = async () => {
            // Till the data is fetched using API 
            // the Loading page will show.
            setLoading(true);
            // Await make wait until that 
            // promise settles and return its result
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
                    <h4>loading...</h4>) : Links.map((item)=>{return <div className="h-[60vh] w-screen relative">
                        <div className="h-full w-full absolute">
                        {item.attributes.coverImage===null?<img className="object-cover filter h-full w-full" src="https://kitsu.io/images/default_cover-22e5f56b17aeced6dc7f69c8d422a1ab.png"></img>:<img className="object-cover filter h-full w-full" src={item.attributes.coverImage.original}></img>}
                        
                        </div>
                        <div className="backdrop-filter backdrop-blur-sm h-full w-full relative"></div>
                        <img src={item.attributes.posterImage.original} className="w-[195px] absolute -bottom-40 left-56 mb-5"></img>
                        <h1 className="text-white absolute bottom-28 left-[440px]">{item.attributes.titles.en}</h1>
                        {/* <p className="text-white absolute bottom-24 left-[440px]">{item.attributes.description}</p> */}
                        {item.attributes.description.length < 150 ? <span className="text-white absolute bottom-24 left-[440px]">{item.attributes.description}</span> :
            (clicked ? 
            <span className="text-white absolute bottom-24 left-[440px]">
            {item.attributes.description}
            <button style={{"border":"none","backgroundColor":"white","color":"red","margin-left":"5px"}} onClick={handle}>Read less</button>
            </span> :
            <span className="text-white absolute bottom-24 left-[440px]">
                {item.attributes.description.slice(0,150)+"..."}
                <button style={{"border":"none","backgroundColor":"white","color":"red"}} onClick={handle}>Read more</button>
            </span>)}
                    </div>
})                }
    </div>
}