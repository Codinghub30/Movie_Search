import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MoviesPage = () => { 
  const {movie} = useGlobalContext();
  return (
    <>
    <Navbar/>
    <section className='movie-page'>
      <h1>Movies Page</h1>
      <div className='grid grid-4-col'>{
        movie.map((curr) => {
          const {imdbID, Title, Poster } = curr;
          const MovieName = Title.substring(0,15);
          return (
            
            <NavLink to={`/${imdbID}`} key={imdbID}>
              <div className='card'>
                <div className='card-info'>
                  <h2>{MovieName.length >= 15 ? `${MovieName}..... `: MovieName}</h2>
                  <img src={Poster} alt={imdbID}></img>
                </div>
              </div>
            </NavLink>
        )})
          }
     </div>
     <Footer/>
    </section>
     
    </>
  )
}

export default MoviesPage;
