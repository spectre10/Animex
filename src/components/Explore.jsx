import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import Img from "./Img";
import TrendingGrid from "./TrendingGrid";
import TopAiringGrid from "./TopAiringGrid";
import HighestRatedGrid from "./HighestRatedGrid";
import TopUpcomingGrid from "./TopUpcomingGrid";
import PopularGrid from "./PopularGrid";
import TrendingV2 from "./TrendingV2";
function Explore() {
    return (
    <div className="explore-div">
        <Header/>
        <h1>Explore Anime</h1>
        {/* <Img/> */}
        <TrendingGrid/>
        <TrendingV2/>
        <TopAiringGrid/>
        <TopUpcomingGrid/>
        <PopularGrid/>
        <HighestRatedGrid/>
        <Footer/>
    </div>
    )
}

export default Explore;