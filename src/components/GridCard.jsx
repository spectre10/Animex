// import axios from "axios";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Img} from "react-image"
import Popup from "reactjs-popup";
import { useProfile } from "./UserContext";
// import 'reactjs-popup/dist/index.css';
function GridCard(props) {
    // function 
    let { user } = useProfile()
    const [popup, setPopup] = useState(true);
    let x = "/anime/" + props.slug;
    let s = {
        borderRadius: "4px",
        animation: "fadeInAnimation ease 1.5s",
        animationIterationCount: "1",
        animationFillMode: "forwards",
    };

    async function dropped() {
        setPopup(!popup);
        if (!user) {
            alert("Login first!")
            return;
        }
        const response = await fetch("/user/add", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: props.id,
                lib_t: "dropped",
            }),
        });
        if (response.ok) {
            alert("Added to Dropped!")
        }
    }
    async function currentlywatching() {
        setPopup(!popup);
        if (!user) {
            alert("Login first!")
            return;
        }
        const response = await fetch("/user/add", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: props.id,
                lib_t: "currentlyWatching",
            }),
        });
        if (response.ok) {
            alert("Added to Currently Watching!")
        }
    }
    async function wantto() {
        setPopup(!popup);
        if (!user) {
            alert("Login first!")
            return;
        }
        const response = await fetch("/user/add", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: props.id,
                lib_t: "wantTo",
            }),
        });
        if (response.ok) {
            alert("Added to Want to Watch!")
        }
    }
    async function completed() {
        setPopup(!popup);
        if (!user) {
            alert("Login first!")
            return;
        }
        const response = await fetch("/user/add", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: props.id,
                lib_t: "completed",
            }),
        });
        if (response.ok) {
            alert("Added to Completed!")
        }
    }
    async function onhold() {
        setPopup(!popup);
        if (!user) {
            alert("Login first!")
            return;
        }
        const response = await fetch("/user/add", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: props.id,
                lib_t: "onHold",
            }),
        });
        if (response.ok) {
            alert("Added to On Hold!")
        }
    }
    return (
        <div className="hover:scale-105 transition transform card-parent">
            <OverlayTrigger
                placement="bottom"
                delay={100}
                overlay={
                    <Tooltip id="tooltip-bottom">
                        {props.nme.en || props.nme.en_us || props.nme.en_jp}
                    </Tooltip>
                }
            >
                <div className="grid-card flex-div group ">
                    <Link to={x} style={{ textDecoration: "none" }}>
                        <Img
                            className="g-img filter absolute"
                            src={props.src}
                            // onLoad={load}
                            id=""
                            style={s}
                        ></Img>
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
                                <button className="card-btn" >
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
                                <div className="menu-item" onClick={currentlywatching}> Currently Watching</div>
                                <div className="menu-item" onClick={wantto}> Want to Watch</div>
                                <div className="menu-item" onClick={completed}> Completed</div>
                                <div className="menu-item" onClick={onhold}> On Hold</div>
                                <div className="menu-item" onClick={dropped}> Dropped</div>
                            </div>
                        </Popup>
                    </div>
                </div>
            </OverlayTrigger>
        </div>
    );
}

export default GridCard;
