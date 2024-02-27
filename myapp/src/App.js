import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import './App.css';
import SingleMovies from './SingleMovies';
import Error from './Error'
import Movies from './Movies';
import MoviesPage from './MoviesPage';
import Footer from './Footer';
import AboutPage from './AboutPage';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/aboutUs" element={<AboutPage/>} />
      <Route path="movies/:id" element={<SingleMovies/>} />
      <Route path="/moviesPage" element={<MoviesPage/>} />
      <Route path="/:id" element={<SingleMovies/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
