import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import ExploreGrid from "./ExploreGrid";

export default function Category() {
    const [loading, setLoading] = useState(false);
    const [links, setLinks] = useState([]);
    const [expanded,setExpanded]=useState(false);
    const [read,setRead] =useState("Read more");
    let params = useParams();
    function handle(){
        //   document.getElementById("x").classList.add("z")
        setExpanded(!expanded);
        if (expanded===true) {
            document.getElementById("desc-p").classList.add("cat-desc");
            setRead("Read more");
        } else {
            document.getElementById("desc-p").classList.remove("cat-desc");
            setRead("Read less");
        }
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
            setLinks(response.data.data);
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
    {loading?<h1 className="margin-left">loading..</h1>:links.map((item,index)=>{
        let length = item.attributes.description.length;
        console.log(length);
        return <React.Fragment key={index}>
        <h1 className="margin-left">{item.attributes.title} Anime</h1>
        <div className="p-tag-div">
        <p className="margin-left cat-desc" id="desc-p">{item.attributes.description}</p>
      
        {(length>76)?<button className="margin-left underline" onClick={handle} id="btn">{read}</button>:<></>}
        
        </div>
        <hr className="margin-left"></hr>
    <ExploreGrid url={`https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&filter%5Bcategories%5D=${item.attributes.slug}&page%5Blimit%5D=15&sort=-start_date`} title={`Newly Released ${item.attributes.title} Anime`}/>
    <ExploreGrid url={`https://kitsu.io/api/edge/trending/anime?limit=15&in_category=true&category=${item.id}`} title={`Trending ${item.attributes.title} Anime`}/>
    <ExploreGrid url={`https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${item.attributes.slug}&page%5Blimit%5D=15&sort=-user_count`} title={`Most Popular ${item.attributes.title} Anime`}/>
    </React.Fragment>
    })}
    </div>
    </div>
    
</div>
    

}