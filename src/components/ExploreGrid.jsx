import React, { useState, useEffect } from 'react'
import axios from 'axios';
import GridCard from './GridCard';
import { useCountRenders } from './useCountRenders';
const ExploreGrid = React.memo(function ExploreGrid(props) {
  
    const [loading, setLoading] = useState(false);
    const [links, setLinks] = useState([]);
    // useCountRenders();
    useEffect(() => {
        const loadPost = async () => {
            // console.log("hello");
            // Till the data is fetched using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its reult
            const response = await axios.get(props.url);

            // After fetching data, stored it in posts state.
            setLinks(response.data.data);

            // Closed the loading page
            setLoading(false);
        }
  
        // Call the function
        loadPost();
    }, []);
    // console.log(links);
    function x() {
        return <>
        <div className='placeholder-item flex-div'></div> 
        <div className='placeholder-item flex-div'></div> 
        <div className='placeholder-item flex-div'></div> 
        <div className='placeholder-item flex-div'></div>
        <div className='placeholder-item flex-div'></div>
        </>
    }
    return (
        <div className={`explore-grid ${props.class}`} >
        <h6 className='margin-left'>{props.title}</h6>
        <div className={`flex-grid margin-left ${props.class}`}>
                {loading ? x() :
                    (links.map((item,index) =>
                        <React.Fragment key={index}>
                        <GridCard src={item.attributes.posterImage.small} slug={item.attributes.slug} id={item.id}/>
                        </React.Fragment>  
                    ))
                }
        </div>
        </div>
    )
})

export default ExploreGrid;





