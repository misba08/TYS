import React from 'react';
import './Navbar.css';
import logo from './Images/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-box logo-box">
                    <img src={logo} alt="Logo" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="footer-box three-boxes">
                    <div className="repeating-box">
                        <h2>Links</h2>
                        <p>Home</p>
                        <p>Recipes</p>
                        <p>Blog</p>
                    </div>
                    <div className="repeating-box">
                        <h2>Links</h2>
                        <p>Share Recipe</p>
                        <p>About Us</p>
                        <p>Contact</p>
                    </div>
                    <div className="repeating-box">
                        <h2>Legal</h2>
                        <p>Terms of Use</p>
                        <p>Privacy & Cookies</p>
                    </div>
                </div>
                <div className="footer-box single-box">
                    <h2 style={{ textAlign: 'center' }}>Newsletter</h2>
                    <p style={{ textAlign: 'center', color: 'gray' }}>Subscribe to our newsletter to get more free tips</p>
                    <div className="input-container">
                        <input type="text" placeholder="Enter your E-mail" />
                        <button className='footer-button'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="footer-line" />
            <div className="footer-bottom">
                <p className="left-text">@2023 Misbarecipe.org All Rights Reserved</p>
                <div className="footer-right-icons">
                    <span className="material-icons"></span>
                    <span className="material-icons twitter-icon"></span>
                    <span className="material-icons instagram-icon"></span>
                    <span className="material-icons linkedin-icon"></span>
                    <span className="material-icons pint-icon"></span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
