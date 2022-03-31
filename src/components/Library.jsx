import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ExploreGrid from "./ExploreGrid";
// import GridCard from "./GridCard";
// import { UserContext } from "./UserContext";
// import useFetch from "./useFetch";
// import Explore from "./Explore";
export default function Library() {
 
  return (
    <>
      <div className="explore-div">
        {/* <Header/> */}
        <div className="flex-explore">
          <div className="flex-item-right ml-48">
            <h1 className="ml-16">Library</h1>
            <ExploreGrid url="/user/library" title="" />
          </div>
        </div>
      </div>
    </>
  );
}
