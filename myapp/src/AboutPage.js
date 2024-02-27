import React from 'react';
import './App.css'; 
import Navbar from './Navbar';
import Footer from './Footer';

function AboutPage() {
    return (
        <>
        <Navbar/>
        <div className='heading'>

        <h1>About Us</h1>
        </div>
        <div className="about-page">
          <div className="about-box">
            <h2>Our Mission</h2>
            <p>
            Our mission is to simplify the process of finding reliable information about movies online. We strive to create a user-friendly website that enhances the movie-watching experience for our users.
             </p>
          </div>
          <div className="about-box">
            <h2>Our Team</h2>
            <p>
            Behind MovieSearch is a team of passionate movie buffs, developers, and designers who are committed to delivering an exceptional user experience. We're constantly working to improve our website and add new features to better serve our users.
            </p>
          </div>
          <div className="about-box">
            <h2>Get In Touch</h2>
            <p>
            We love hearing from our users! Whether you have feedback, suggestions, or just want to say hello, feel free to reach out to us via email, social media, or through our website's contact form.
            </p>
          </div>
        </div>
        <Footer/>
        </>
      );
}

export default AboutPage;