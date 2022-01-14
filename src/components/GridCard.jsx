import React from "react";
import { Link } from "react-router-dom";

function GridCard(props) {
    let x = "/anime/"+props.slug;
    // console.log(x);
    return (
        <div className="grid-card flex-div">
        <Link to={x} style={{ textDecoration: 'none' }}> 
    
        <img className="grid-img" src={props.src}></img>
    
        </Link>
        <div className="card-btn-div">
            <button className="card-btn">+</button>
        </div>
        </div>
    )
}

export default GridCard;