import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GridCard from "./GridCard";
// import { useCountRenders } from "./useCountRenders";
const ExploreGrid = React.memo(function ExploreGrid(props) {
  let myController = new AbortController();
  let mySignal = myController.signal;

  const [loading, setLoading] = useState(true);
  //   const [links, setLinks] = useState([]);
  const [reload, setLoad] = useState(0);
  reload
  const link = useRef([]);
  const isCurrent = useRef(true);
  let page_offset = 21;
  useEffect(() => {
    return () => {
      isCurrent.current = false;
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
      const res_test = await axios.get(props.url + "&page[offset]=" + (page_offset).toString());
      setTimeout(() => {
        // link.current.push(res_test.data.data[0]);
        link.current = link.current.concat(res_test.data.data);
        updateState();
      }, 1);
      link.current = response.data.data;
      setLoading(false);
    }
  }
  useEffect(() => {
    console.log("mounted");
    window.addEventListener("scroll", handleScroll, { passive: true });
    load();
    return () => { window.removeEventListener('scroll', handleScroll); }
  }, []);
  let updateState = async () => {
    setLoad(Math.random());
  }
  const handleScroll = async () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = winScroll / height
    if (scrolled > 0.5) {
      window.removeEventListener('scroll', handleScroll)
      page_offset += 20
      const nextRes = await axios.get(props.url + "&page[offset]=" + (page_offset).toString());
      setTimeout(() => {
        link.current = link.current.concat(nextRes.data.data);
        updateState();
      }, 1);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
  }
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
      <div className={`flex flex-wrap gap-2 w-full margin-left ${props.class}`}>
        {loading
          ? x()
          : link.current.map((item, index) => (
            <React.Fragment key={index}>
              <GridCard
                src={item.attributes.posterImage.small}
                slug={item.attributes.slug}
                nme={item.attributes.titles}
                id={item.id}
              />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
});

export default ExploreGrid;
