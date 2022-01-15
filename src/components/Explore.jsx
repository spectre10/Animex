import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import Img from "./Img";

import ExploreGrid from "./ExploreGrid";

function Explore() {
    return (
    <div className="explore-div">
        <Header/>
        <h1>Explore Anime</h1>
        {/* <Img/> */}
        
        <ExploreGrid url="https://kitsu.io/api/edge/trending/anime?limit=5" title="Trending Anime (This Week)"/>
        <ExploreGrid url="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count" title="Top Airing Anime"/>
        <ExploreGrid url="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count" title="Top Upcoming Anime"/>
        <ExploreGrid url="https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=5&page[offset]=0" title="Most Popular Anime"/>
        <ExploreGrid url="https://kitsu.io/api/edge/anime?sort=ratingRank&page[limit]=5&page[offset]=0" title="Highest Rated Anime"/>
        <Footer/>
    </div>
    )
}

export default Explore;