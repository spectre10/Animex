import React from "react";
import { Link } from "react-router-dom";

function GridCard(props) {
    let x = "/anime/"+props.slug;
    let s={ 
        "borderRadius": "4px",
        "animation": "fadeInAnimation ease 1.5s",
        "animationIterationCount": "1",
        "animationFillMode": "forwards",
     };
    // console.log(props.i);
    function load() {

    }
    return (
        
        <div className="grid-card flex-div group">
        <Link to={x} style={{ textDecoration: 'none' }}>
        
        <img className="g-img filter absolute" src={props.src} onLoad={load} id="" style={s}></img>
        <div className="bg-gradient-to-t group-hover:from-[#000000cc] group-hover:to-[#0000001a] group-hover:bg-opacity-50 hover:rounded-md h-full w-full relative"></div>
        
        </Link>
        <div className="card-btn-div">
            <button className="card-btn">+</button>
        </div>
        </div>
       
    )
}

export default GridCard;