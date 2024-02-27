import React, { useContext } from 'react'
import { AppContext } from './context'
import { useGlobalContext } from './context';
import Movies from './Movies';
import Search from './Search';
import FrontImages from './images/frontMovie.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  // const name = useContext(AppContext);
  // const name = useGlobalContext();
  return (
    <div>
        <Navbar/>
      <div className='front'>
        <img src={FrontImages} alt='/' />
      <Search/>
      </div>
      
    
     <Movies/>
     <Footer/>
    </div>
   
  )
}

export default Home
