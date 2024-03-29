import React, { useState, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
// import ExploreGrid from './ExploreGrid';
import SearchGrid from './SearchGrid';
export default function Search() {
  let params = useParams();
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  const link = "https://kitsu.io/api/edge/anime?filter[text]=" + params.searchId;
  let pageNum = "21";
  let pageLimit = "&page[limit]=20&page[offset]=" + pageNum;
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
  // const res_test = await axios.get(link);
  return <div className="explore-div">
    {/* <Header/> */}
    <div className="flex-explore">
      {/* <Img/> */}
      <div className="flex-item-left">
        <Sidebar />
      </div>
      <div className="flex-item-right">
        <h1 className="margin-left">Search Results For "{params.searchId}"</h1>
        <SearchGrid url={link + "&page[limit]=20"} title="" class="explore-grid-search" />
        {/* <SearchGrid url={link + "&page[limit]=20&page[offset]=21"} title="" class="explore-grid-search" /> */}
        {/* <ExploreGrid url={link + pageLimit} title="" class="explore-grid-search" /> */}
      </div>
    </div>
    {/* <Footer/> */}
  </div>;
}
