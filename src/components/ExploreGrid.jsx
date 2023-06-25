import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GridCard from "./GridCard";
// import { useCountRenders } from "./useCountRenders";
const ExploreGrid = React.memo(function ExploreGrid(props) {
    let myController = new AbortController();
    let mySignal = myController.signal;
    const [loading, setLoading] = useState(true);
    const [links, setLinks] = useState([]);
    console.log(links.length)
    // const [name, setName] = useState();
    // const link = useRef([]);
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
            setLinks(response.data.data);
            // link.current = response.data.data;
            // if (link.current.)
            setLoading(false);
        }
    }
    useEffect(() => {
        console.log("red")
        setLoading(true);
        load();
    }, [props.libi])
    // useEffect(() => {
    // load();
    // }, []);
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
            <div className={`flex flex-wrap gap-2 w-full margin-left ${props.class}`}>
                {loading
                    ? x()
                    : links.length != 0 ? (links.map((item, index) => {
                        // let n = item.attributes.titles.en;
                        // let name = (typeof n)==='undefined'?item.attributes.title.en:item.attributes.titles.jp;
                        return (
                            <React.Fragment key={index}>
                                <GridCard
                                    src={item.attributes.posterImage.small}
                                    slug={item.attributes.slug}
                                    nme={item.attributes.titles}
                                    id={item.id}
                                />
                            </React.Fragment>
                        )
                    })) : (<div className="m-52 text-xl">There are no items in this library currently.</div>)}
            </div>
        </div>
    );
});

export default ExploreGrid;
