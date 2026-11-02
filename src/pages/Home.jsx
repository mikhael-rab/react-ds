import searchIcon from "../assets/magnifying-glass.svg"
import homeIcon from "../assets/house.svg"
import filmIcon from "../assets/film-slate.svg"
import monitorIcon from "../assets/monitor.svg"
import trentIcon from "../assets/trend-up.svg"
import plusIcon from "../assets/plus.svg"
import'./home.css';

function Home() {
  return (
    <div className="netflix">
     <div className="sidebar">
      <img src={searchIcon} alt="searchIcon" />
      <img src={homeIcon} alt="homeIcon" />
    <img src={filmIcon} alt="filmIcon" />
    <img src={monitorIcon} alt="monitorIcon" />
    <img src={trentIcon} alt="trentIcon" />
    <img src={plusIcon} alt="plusIcon" />
     </div>
      </div>

        
  )
}

export default Home