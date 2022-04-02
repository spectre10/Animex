import React, { useContext } from "react";
// import Img from "./Img";
import Sidebar from "./Sidebar";
import ExploreGrid from "./ExploreGrid";
import { UserContext } from "./UserContext";
// import { useCountRenders } from "./useCountRenders";

function Explore() {
    // const msg = useContext(UserContext);
    // useCountRenders();
    return (
    <div className="explore-div">
        {/* <Header/> */}
        <div className="flex-explore">
        {/* <Img/> */}
        <div className="flex-item-left">
        <Sidebar/>
        </div>
        <div className="flex-item-right">
        <h1 className="margin-left">Explore Anime</h1>
        <ExploreGrid url="https://kitsu.io/api/edge/trending/anime?limit=5" title="Trending Anime (This Week)"/>
        <ExploreGrid url="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count" title="Top Airing Anime"/>
        <ExploreGrid url="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count" title="Top Upcoming Anime"/>
        <ExploreGrid url="https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=5&page[offset]=0" title="Most Popular Anime"/>
        <ExploreGrid url="https://kitsu.io/api/edge/anime?sort=ratingRank&page[limit]=5&page[offset]=0" title="Highest Rated Anime"/>
        </div>
        </div>
        {/* <div>{msg}</div> */}
        {/* <Footer/> */}
    </div>
    )
}

export default React.memo(Explore);