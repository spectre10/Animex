import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import ExploreGrid from './ExploreGrid';
export default function Search() {
  let params = useParams();
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  const link = "https://kitsu.io/api/edge/anime?filter[text]="+params.searchId;
  console.log(link);
  useEffect(() => {
        const loadPost = async () => {
            // Till the data is fetched using API 
            // the Loading page will show.i
            setLoading(true);
            // Await make wait until that 
            // promise settles and return its reult
            const response = await axios.get(link);
            // After fetching data, stored it in posts state.
            setLinks(response.data.data);
            // console.log(response.data.data);
            // Closed the loading page
            setLoading(false);
        }  
        // Call the function
        loadPost();
    }, []);
    console.log(links);
  return <div className="explore-div">
        {/* <Header/> */}
        <div className="flex-explore">
        {/* <Img/> */}
        <div className="flex-item-left">
        <Sidebar/>
        </div>
        <div className="flex-item-right">
        <h1 className="margin-left">Search Results For "{params.searchId}"</h1>
        <ExploreGrid url={link+"&page[limit]=20"} title="" class="explore-grid-search"/>
        <ExploreGrid url={link+"&page[limit]=20&page[offset]=21"} title="" class="explore-grid-search"/>
        </div>
        </div>
        {/* <Footer/> */}
    </div> ;
}
