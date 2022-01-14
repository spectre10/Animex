import React, { useState, useEffect } from 'react'
import axios from 'axios';
import GridCard from './GridCard';
function TrendingV2() {
  
    const [loading, setLoading] = useState(false);
    const [links, setLinks] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
  
            // Till the data is fetched using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its reult
            const response = await axios.get(
            "https://kitsu.io/api/edge/trending/anime?limit=5");
  
            // After fetching data, stored it in posts state.
            setLinks(response.data.data);

            // Closed the loading page
            setLoading(false);
        }
  
        // Call the function
        loadPost();
    }, []);
    // console.log(links);
    return (
        <div className='explore-grid'>
        <h6 className='margin-left'>Trending Anime (This Week)</h6>
        <div className="flex-grid margin-left">
                {loading ? (
                    <h4>Loading...</h4>) :
                    (links.map((item) =>
                        // Presently we only fetch
                        // title from the API
                        <GridCard src={item.attributes.posterImage.small} slug={item.attributes.slug}/>
                    ))
                }
            </div>
            </div>
    )
}

export default TrendingV2;