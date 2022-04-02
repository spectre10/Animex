import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { Collapse } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SidebarButton(props) {
    const [open, setOpen] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [links, setLinks] = useState([]);
    // const [enable,setEnable] = useState(false);
    function handleClick(){
        setTimeout(()=>{
          window.location.reload(false);
        },0); 
    // }
    // if (params) {
    //   useEffect(()=>{
    //     window.location.reload(false);
    //   },[params])
      
    }
  
    useEffect(() => {
        const loadPost = async () => {
            // console.log("hello");
            // Till the data is fetched using API 
            // the Loading page will show.
            // setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its reult
            const response = await axios.get(props.url);
  
            // After fetching data, stored it in posts state.
            setLinks(response.data.data);
            // setLinks([1,2,3]);

            // Closed the loading page
            // setLoading(false);
        }
  
        // Call the function
        loadPost();
    }, []);
    
    // console.log(links);
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
            {/* <Button className="sidebar-btn shadow-none drop-btn">Violence</Button> */}
            {links.map((item,index)=>{
              let temp="/categories/"+item.attributes.slug;
              return <React.Fragment key={index}>
                <Link to={temp} onClick={handleClick}>
                <Button className="sidebar-btn shadow-none drop-btn">{item.attributes.title}</Button>
                </Link>
              </React.Fragment>
            })}
          </div>
        </Collapse>
      </>
    );
}