import React, { useContext, useEffect, useState } from "react";
import Img from "./Img";
import Grid from "./Grid";
import axios from "axios";
import { UserContext } from "./UserContext";

function Home() {
  
  return (
    <div>
      {/* <Header /> */}
      <Img />
      <Grid />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;