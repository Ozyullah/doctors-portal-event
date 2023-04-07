import React from 'react';
import footerbg from '../../../assets/footer.png';

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${footerbg})`}}>
            <footer className="footer p-10 pt-96 text-black">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                   
                </div>

                
            </footer>
            <div className="footer footer-center p-4 text-base-content">
                    <p>Copyright © 2023 - All right reserved by doctors portal</p>
                </div>
        </div>
    );
};

export default Footer;