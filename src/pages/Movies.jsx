import maintitle from"../assets/kgf-title.png"
import plus from"../assets/add-circle-line.svg"
import like from"../assets/thumb-up-line.svg"
import'./movies.css'
import MovieCard from "../components/MovieCard"
function Movies() {
  return (
    <div className="m-section">
      <div className="m-hero">
        <img src={maintitle} alt="" />
        <div className="m-hero-button">
        <button className="ply">play</button>
        <div className="special">
          <button><img src={plus} alt="" /></button>
          <button><img src={like} alt="" /></button>

        </div>
        </div>
      </div>
      <div className="content">
        <div className="slide1">
          <p>K.G.F: Chapter 1 is a high-octane action film that stands out for its grand scale, gritty cinematography, and exceptionally powerful background score. Yash delivers a towering combined with fast-paced editing and intense dialogue, makes it an unforgettable, mass-entertainment spectacle.</p>
        </div>
        <div className="slide2">
          <h1>cast :</h1><p>The movie KGF (Kolar Gold Fields) features a talented cast of actors. Yash plays the lead role of Rocky (Rocky Bhai), while Srinidhi Shetty plays Reena. Ramachandra Raju appears as Garuda, Anant Nag plays Anand Ingalagi, and Archana Jois plays Shanthamma, Rocky's mother. In KGF Chapter 2,  and the music is composed by Ravi Basrur. Both chapters became very popular among movie lovers.</p>
        <div className="genre">
          <h1>Genre</h1><p>period action,crime,and gangster-drama</p>
        </div>
        </div>
        
      </div>
      <MovieCard></MovieCard>
    </div>
  )
}

export default Movies