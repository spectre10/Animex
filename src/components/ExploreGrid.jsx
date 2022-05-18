import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GridCard from "./GridCard";
import { useCountRenders } from "./useCountRenders";
const ExploreGrid = React.memo(function ExploreGrid(props) {
  let myController = new AbortController();
  let mySignal = myController.signal;

  const [loading, setLoading] = useState(true);
  //   const [links, setLinks] = useState([]);
  const link = useRef([]);
  const isCurrent = useRef(true);
  useEffect(() => {
    return () => {
      isCurrent.current = false;
      console.log("unmounted");
      myController.abort();
      //   myController.abort();
    };
  }, []);
  async function load() {
    if (isCurrent.current) {
      const response = await axios.get(props.url, {
        signal: mySignal,
      });
      //   setLinks(response.data.data);
      link.current = response.data.data;
      setLoading(false);
    }
  }
  useEffect(() => {
    console.log("mounted");
    load();
  }, []);
  // console.log(isCurrent.current);
  //   useCountRenders();
  function x() {
    return (
      <>
        <div className="placeholder-item flex-div"></div>
        <div className="placeholder-item flex-div"></div>
        <div className="placeholder-item flex-div"></div>
        <div className="placeholder-item flex-div"></div>
        <div className="placeholder-item flex-div"></div>
      </>
    );
  }
  return (
    <div className={`explore-grid ${props.class}`}>
      <h6 className="margin-left">{props.title}</h6>
      <div className={`flex-grid margin-left ${props.class}`}>
        {loading
          ? x()
          : link.current.map((item, index) => (
              <React.Fragment key={index}>
                <GridCard
                  src={item.attributes.posterImage.small}
                  slug={item.attributes.slug}
                  id={item.id}
                />
              </React.Fragment>
            ))}
      </div>
    </div>
  );
});

export default ExploreGrid;
