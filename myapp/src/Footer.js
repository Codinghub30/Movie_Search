import React from 'react'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>This Website basically Provides Different movies search and Proper details of the movies like the IMBD rating, Movie Genre and Release Date</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Bhubaneswar, Odisha , India</p>
            <p>Email: BookLibrary@gmail.com</p>
            <p>Phone: +91 7598343454</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Movies Search. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  

export default Footer
