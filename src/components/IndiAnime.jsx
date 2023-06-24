import { useState } from "react";
import { Link } from "react-router-dom";

function IndiAnime({item, include}) {



const YoutubeThumbnail = ({item}) => {
    return (<div className="yt-thumbnail relative  col-start-5 row-start-4 h-[70px] w-full ml-5 mt-3">
      <a href={"https://www.youtube.com/watch?v=" + item.attributes.youtubeVideoId} className="no-underline h-full">
        <img src={"https://i.ytimg.com/vi/"+ item.attributes.youtubeVideoId +"/hqdefault.jpg"} 
          className="w-full h-full object-cover absolute rounded-md "
        />
        <div className="text-[white]  bg-gradient-to-t from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.1)] hover:from-[rgba(0,0,0,.8)] hover:to-[rgba(0,0,0,.8)] relative h-[inherit] w-[inherit] rounded-md text-center " >
          <i className="fab fa-youtube fa-2x inline mt-3"></i>
          <h3 className="inline font-medium ml-1">Play Trailer</h3>
        </div>
      </a>
    </div>)
}

const AnimeDetails = ({item}) => {
    return(<div className="anime-details ml-5 relative col-start-5 row-span-1 row-start-3 w-full bg-stone-300 h-full rounded-md">
    <div className="mt-3">
      <h5 className="ml-5">Anime Details</h5>
      <table className="info-table ml-6 border-separate table-auto [border-spacing:0.5rem]">
        <tbody>
          <tr>
          <td className="font-bold">Episodes</td>
          <td className="font-medium">{item.attributes.episodeCount === null ? "-" : item.attributes.episodeCount}</td>
          </tr>
          <tr>
          <td className="font-bold">Status</td>
          <td className="font-medium">{item.attributes.status === null ? "-" : item.attributes.status}</td>
          </tr>
          <tr>
          <td className="font-bold">Age Rating</td>
          <td className="font-medium">{item.attributes.ageRating + " - " + item.attributes.ageRatingGuide}</td>
          </tr>
          <tr>
          <td className="font-bold">Length</td>
          <td className="font-medium">{item.attributes.episodeLength === null ? "-" : item.attributes.episodeLength + " minutes each"}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>)
}

const Description = ({item, include}) => {
  const [isClicked, setIsClicked] = useState(false);

  return(<div className="info-description relative col-start-3 row-start-3 col-span-2 "> 
  { item.attributes.description.length < 300 ? <p className="whitespace-pre-line">{item.attributes.description}</p> :
    (isClicked ? 
  <p className="whitespace-pre-line">
    {item.attributes.description}
    <button style={{"border": "none", "backgroundColor": "white", "color": "red"}} onClick={() => setIsClicked(!isClicked)}>...Read Less</button>
  </p> :
  <p className="whitespace-pre-line">
    {item.attributes.description.slice(0, 300) + "..."}
    <button style={{"border": "none", "backgroundColor": "white", "color": "red"}} onClick={() => setIsClicked(!isClicked)}>Read More</button>
  </p>)
  }
  {include.map((link, ind) => { 
    return <div key={ind} className="inline mt-3 col-span-2">
    <li className="inline"> 
      <Link to={"/categories/" + link.attributes.slug} 
    className=" bg-stone-100 mt-1 inline-block border-[1px] leading-5 pl-[4px] pr-[4px] ml-[4px] mr-[4px] no-underline text-[#464646] rounded-[3px] object-fill ">
    {link.attributes.title}
    </Link>  
    </li>
  </div>
  }).sort()}

    <hr />
    <div className="h-[30px]">
    <Link to="/Most Popular Anime" className="text-[#464646] no-underline hover:text-[#000000] float-left bg-stone-100">{"❤ Rank #" + item.attributes.popularityRank + " (Most Popular Anime)"}</Link>
    <Link to="/Highest Rated Anime" className="text-[#464646] no-underline hover:text-[#000000] float-right bg-stone-100">{"⭐ Rank #" + item.attributes.ratingRank + " (Highest Rated Anime)"}</Link>
    </div>
    <hr />
    </div>)
}

const AnimeImage = ({item}) => {
  const defaultImage = "https://kitsu.io/images/default_cover-22e5f56b17aeced6dc7f69c8d422a1ab.png";
  return(<>
      <div className="cover-img absolute col-span-6 w-full">
        {item.attributes.coverImage === null ? 
            <img src={defaultImage} className="h-[450px] w-[inherit] object-cover absolute" /> 
            : 
            <img src={item.attributes.coverImage.original} className="h-[450px] w-[inherit] object-cover absolute" />
        }
        <div className="bg-gradient-to-t from-[#000000cc] to-[#0000001a] relative h-[450px] w-[inherit]" />
      </div>
            
      <div className="poster-img  sticky col-start-2 row-start-1 my-44">
        <img src={item.attributes.posterImage.original}
          className="h-[426px] w-[286px] absolute rounded-md object-cover  "
          />
        <div className="bg-gradient-to-t from-[#000000cc] to-[#0000001a] relative h-[426px] w-[286px] rounded-md" />
      </div>
    </>)
}

const AnimeTitle = ({item}) => {
    return(<div className="info-title relative block col-start-3 col-span-full mt-60">
      <span className="inline font-bold opacity-95 leading-none text-[60px] text-[#fff]" style={{"textTransform": "capitalize"}}>{item.attributes.slug}</span>
      <span className="text-[30px] text-[white] opacity-75 font-bold ml-[2%]">{item.attributes.startDate.slice(0, 4)}</span>
      <span className="text-[#1abc9c] block font-bold mt-[2%] ">{item.attributes.averageRating + "% Community Approval"}</span>
    </div>)
}
return (<>
  <AnimeImage item={item} />
  <AnimeTitle item={item} />
  <Description item={item} include={include} />
  <AnimeDetails item={item} />
  <YoutubeThumbnail item={item} />
</>)
}
export default IndiAnime;
