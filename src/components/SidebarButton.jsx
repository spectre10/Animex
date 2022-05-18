import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import { Collapse } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCountRenders } from "./useCountRenders";
export default function SidebarButton(props) {
  const [open, setOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [links, setLinks] = useState([]);
  const links = useRef([]);
  // const [enable,setEnable] = useState(false);
  const isCurrent = useRef(true);
  function handleClick() {
    setTimeout(() => {
      window.location.reload(false);
    }, 0);
    // }
    // if (params) {
    //   useEffect(()=>{
    //     window.location.reload(false);
    //   },[params])
  }
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  });
  useEffect(() => {
    const loadPost = async () => {
      // setLoading(true);
      if (isCurrent.current) {
        const response = await axios.get(props.url);
        // setLinks(response.data.data);
        links.current=response.data.data;
      }
    };

    loadPost();
  }, []);
  useCountRenders()
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="sidebar-btn shadow-none"
      >
        <span className="name-span">
          <i className="fas fa-angle-right arrow"></i>
          {props.name}
        </span>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {links.current.map((item, index) => {
            let temp = "/categories/" + item.attributes.slug;
            return (
              <React.Fragment key={index}>
                <Link to={temp} onClick={handleClick}>
                  <Button className="sidebar-btn shadow-none drop-btn">
                    {item.attributes.title}
                  </Button>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </Collapse>
    </>
  );
}
