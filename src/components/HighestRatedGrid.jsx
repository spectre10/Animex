import axios from "axios";
import React, { useState, Suspense } from "react";

function HighestRatedGrid() {
    let [data1,setData1] = useState("");
    let [data2,setData2] = useState("");
    let [data3,setData3] = useState("");
    let [data4,setData4] = useState("");
    let [data5,setData5] = useState("");
    axios.get('https://kitsu.io/api/edge/anime?sort=ratingRank&page[limit]=5&page[offset]=0')
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
        <h6 className="margin-left">Highest Rated Anime</h6>
        <div className="flex-grid margin-left">
            <div>
                <Suspense fallback={<div className="hello"></div>}>
                <img src={data1}></img>
                </Suspense>
            </div>
            <div>
            <img src={data2}></img>
            </div>
            <div>
            <img src={data3}></img>
            </div>
            <div>
            <img src={data4}></img>
            </div>
            <div>
            <img src={data5}></img>
            </div>
        </div>
        </div>
    )
}

export default HighestRatedGrid;