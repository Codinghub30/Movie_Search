import React,{useState, useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './context';

const SingleMovies = () => {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  
  const getMovies = async (url) => {
    setIsLoading(true);
      try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
         
          if(data.Response === "True"){
              setIsLoading(false);
              setMovie(data);
              
              
          }
           
          
      } 
      catch(error){
          console.log(error);
      }
  }
  useEffect(() => {
      let timeOut = setTimeout(() => {
          getMovies(`${API_URL}&i=${id}`);
      },1000)
      return () => clearTimeout(timeOut);
  },[id]);

  if(isLoading) {
    return(
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
    )
  }
 
  return (
    <div>
    
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
            <img src={movie.Poster} alt='poster'/>
          </figure>
          <div className='card-content'>
            <p className='title'><strong>Title:</strong>  {movie.Title}</p>
            <p className='card-text'><strong>Genre:</strong>  {movie.Genre}</p>
            <p className='card-text'><strong>Released on:</strong>   {movie.Released}</p>
            <p className='card-text'><strong>IMDB:</strong>   {movie.imdbRating}</p>
            <p className='card-text'><strong>Country:</strong>   {movie.Country}</p>
            <NavLink to="/">Go Back</NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleMovies
