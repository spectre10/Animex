// import axios from "axios";
import React, { useState } from "react";
import { OverlayTrigger ,Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
// import 'reactjs-popup/dist/index.css';
function GridCard(props) {
  const [popup, setPopup] = useState(false);
  let x = "/anime/" + props.slug;
  let s = {
    borderRadius: "4px",
    animation: "fadeInAnimation ease 1.5s",
    animationIterationCount: "1",
    animationFillMode: "forwards",
  };
  // console.log(props.i);
  function load() {}

  async function plusHandle() {
    setPopup(!popup);
    console.log(props.id);
    const response = await fetch("/user/add", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: props.id,
      }),
    });
    console.log(response);
  }
  return (
    <div className="hover:scale-105 transition transform card-parent">
    <OverlayTrigger
      placement="bottom"
      delay={100}
      overlay={
        <Tooltip id="tooltip-bottom">
          {props.slug}
        </Tooltip>
      }
      >
    <div className="grid-card flex-div group ">
      <Link to={x} style={{ textDecoration: "none" }}>
        <img
          className="g-img filter absolute"
          src={props.src}
          onLoad={load}
          id=""
          style={s}
        ></img>
        <div className="bg-gradient-to-t group-hover:from-[#000000cc] group-hover:to-[#0000001a] group-hover:bg-opacity-50 group-hover:rounded-md h-full w-full relative"></div>
      </Link>
      <div className="card-btn-div">
        {/* <button className="card-btn" onClick={plusHandle}>
          +
        </button>
        {popup && (
            
                    <div className="absolute z-30">
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                    </div>
        )} */}
        <Popup
          trigger={
            <button className="card-btn" onClick={plusHandle}>
              +
            </button>
          }
          position="right top"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none" }}
          arrow={false}
        >
          <div className="menu rounded-md">
            <div className="menu-item" onClick={plusHandle}> Currently Watching</div>
            <div className="menu-item"> Want to Watch</div>
            <div className="menu-item"> Completed</div>
            <div className="menu-item"> On Hold</div>
            <div className="menu-item"> Dropped</div>
          </div>
        </Popup>
      </div>
    </div>
      </OverlayTrigger>
    </div>
  );
}

export default GridCard;
