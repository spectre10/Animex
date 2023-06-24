// import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
// import React, { useContext, useEffect, useState } from "react";
import ExploreGrid from "./ExploreGrid";
// import GridCard from "./GridCard";
import { useProfile } from "./UserContext";
// import useFetch from "./useFetch";
// import Explore from "./Explore";
import { useCountRenders } from "./useCountRenders"

export default function Library() {
    const { user } = useProfile()
    let [lib, setlib] = useState(0)
    let [title,settitle]=useState("Currently Watching")
    useCountRenders()
    return (
        <>
            <div className="explore-div">
                {/* <Header/> */}
                <div className="flex-explore">
                    <div className="flex-item-right ml-48">
                        <h1 className="ml-16">{title}</h1>
                        {(!user ? <h1>Please sign in first</h1> : <ExploreGrid url={`/user/library/${lib}`} title="" libi={lib} />)}
                    </div>
                    <div className="flex-item-left  h-7 w-7 mt-52 mr-[10%] text-center content-center">
                        <div className="text-2xl sidebar-btn hover:bg-white">Libraries</div>
                        <Button type="button" className="sidebar-btn shadow-none" onClick={() => {
                            let e = 0
                            setlib(() => e)
                            settitle(()=>("Currently Watching"))
                        }}>Currently Watching</Button>
                        <Button type="button" className="sidebar-btn shadow-none" onClick={() => {
                            let ne = 1
                            setlib(() => ne)
                            settitle(()=>("Completed"))
                        }}>Completed</Button>
                        <Button type="button" className="sidebar-btn shadow-none" onClick={() => {
                            setlib(() => 2)
                            settitle(()=>("Want to Watch"))
                        }}>Want to Watch</Button>
                        <Button type="button" className="sidebar-btn shadow-none" onClick={() => {
                            setlib(() => 3)
                            settitle(()=>("On Hold"))
                        }}>On Hold</Button>
                        <Button type="button" className="sidebar-btn shadow-none" onClick={() => {
                            setlib(() => 4)
                            settitle(()=>("Dropped"))
                        }}>Dropped</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
