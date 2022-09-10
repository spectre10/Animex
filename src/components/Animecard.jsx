import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IndiAnime from "../components/IndiAnime";


function Animecard() {
  const [data,setData] = useState([]);
  const [include ,setInclude] = useState([]);
  const isCurrent = useRef(true);
  let params = useParams();

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    }
  }, []);

  useEffect(() => {
    const url = `https://kitsu.io/api/edge/anime?fields%5Bcategories%5D=slug%2Ctitle&filter%5Bslug%5D=${params.animeId}&include=categories&sortField=Title`;
    axios.get(url)
      .then(response => { 
        const title = response.data.data[0].attributes.titles;
        if(title.en === undefined) {
          document.title = (`${title.en_jp} | AnimeX `);
        } else {
          document.title = (`${title.en} | AnimeX `);
        }
        return ({data: response.data.data, data2: response.data.included})
      })
      .then((data) => {
        if(isCurrent.current){
          setData(data.data);
          setInclude(data.data2);
        }
      })
  }, []); 
  return (
  <>
    {data.map((item, index) => {
      return (
        <div key={index} className="grid grid-cols-6 h-screen grid-rows-4">
          <IndiAnime item={item} include={include} />
        </div>)
    })}
  </>
  )
}

export default Animecard;
