import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import ExploreGrid from "./ExploreGrid";

export default function Category() {
    const [loading, setLoading] = useState(false);
    const [clicked , setClicked] = useState(false);
    const [res,setRes]=useState([]);
    let params = useParams();
    function handle(){
       setClicked(!clicked);
    }
    
    useEffect(() => {
        const loadPost = async () => {
            // Till the data is fetched using API 
            // the Loading page will show.i
            setLoading(true);
            // Await make wait until that 
            // promise settles and return its reult
            const response = await axios.get("https://kitsu.io/api/edge/categories?filter%5Bslug%5D="+params.catId);
            // After fetching data, stored it in posts state.
            setRes(response.data.data);
            // console.log(response.data.data);
            // Closed the loading page
            setLoading(false);
        }  
        // Call the function
        loadPost();
    }, []);


    return  <div className="explore-div">
    {/* <Header/> */}
    <div className="flex-explore">
    {/* <Img/> */}
    <div className="flex-item-left">
    <Sidebar/>
    </div>
    <div className="flex-item-right">
    {loading?<h1 className="margin-left">loading..</h1>: res.map((item,index)=>{
        return (

        <React.Fragment key={index}>
        <h1 className="margin-left">{item.attributes.title} Anime</h1>
        <div className="p-tag-div margin-left">
        {item.attributes.description.length < 150 ? <span className="">{item.attributes.description}</span> :
            (clicked ? 
            <span className="">
            {item.attributes.description}
            <button style={{"border":"none","backgroundColor":"white","color":"red","margin-left":"5px"}} onClick={handle}>Read less</button>
            </span> :
            <span className="">
                {item.attributes.description.slice(0,150)+"..."}
                <button style={{"border":"none","backgroundColor":"white","color":"red"}} onClick={handle}>Read more</button>
            </span>)}
        
        
        </div>
        <hr className="margin-left"></hr>
    <ExploreGrid url={`https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&filter%5Bcategories%5D=${item.attributes.slug}&page%5Blimit%5D=15&sort=-start_date`} title={`Newly Released ${item.attributes.title} Anime`}/>
    <ExploreGrid url={`https://kitsu.io/api/edge/trending/anime?limit=15&in_category=true&category=${item.id}`} title={`Trending ${item.attributes.title} Anime`}/>
    <ExploreGrid url={`https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${item.attributes.slug}&page%5Blimit%5D=15&sort=-user_count`} title={`Most Popular ${item.attributes.title} Anime`}/>
    </React.Fragment>
    
        )
    })}
        
    </div>
    </div>
    
</div>
    

}