import axios from "axios";
import React, { useState, Suspense } from "react";
import GridCard from "./GridCard";

function PopularGrid() {
    let [data1,setData1] = useState("");
    let [data2,setData2] = useState("");
    let [data3,setData3] = useState("");
    let [data4,setData4] = useState("");
    let [data5,setData5] = useState("");
    axios.get('https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=5&page[offset]=0')
    .then(function (response) {
        // handle success
        setData1(response.data.data[0].attributes.posterImage.small);
        setData2(response.data.data[1].attributes.posterImage.small);
        setData3(response.data.data[2].attributes.posterImage.small);
        setData4(response.data.data[3].attributes.posterImage.small);
        setData5(response.data.data[4].attributes.posterImage.small);
        // console.log(data1);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    // sleep(1000);
    
    // console.log(data);
    
    return (
        <div className="explore-grid">
        <h6 className="margin-left">Most Popular Anime</h6>
        <div className="flex-grid margin-left">
            <GridCard src={data1}/>
            <GridCard src={data2}/>
            <GridCard src={data3}/>
            <GridCard src={data4}/>
            <GridCard src={data5}/>
        </div>
        </div>
    )
}

export default PopularGrid;