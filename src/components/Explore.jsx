import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import Img from "./Img";
import TrendingGrid from "./TrendingGrid";
import TopAiringGrid from "./PopularGrid";
import HighestRatedGrid from "./HighestRatedGrid";
import TopUpcomingGrid from "./TopUpcomingGrid";
function Explore() {
    return (
    <div className="explore-div">
        <Header/>
        <h1>Explore Anime</h1>
        {/* <Img/> */}
        <TrendingGrid/>
        <TopUpcomingGrid/>
        <TopAiringGrid/>
        <HighestRatedGrid/>
        <Footer/>
    </div>
    )
}

export default Explore;