import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul className=" text-start ">
                            <li><Link to="">About Biker's Point</Link></li>
                            <li><Link to="">Customers Speak</Link></li>
                            <li><Link to="">In the News</Link></li>
                            <li><Link to="">Career</Link></li>
                            <li><Link to="">Terms and Conditions</Link></li>

                            <li><Link to="">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Survices</h4>
                        <ul className=" text-start ">
                            <li><Link to="">Bike </Link></li>
                            <li><Link to="">Wellness </Link></li>
                            <li><Link to="">Bike News</Link></li>
                            <li><Link to="">Engine Oil</Link></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Online Shop</h4>
                        <ul className=" text-start ">

                            <li><Link to="">Browse by A-Z</Link></li>
                            <li><Link to="">Browse by Manufacturers</Link></li>
                            <li><Link to="">Bike Articles</Link></li>
                            <li><Link to="">Offers / Coupons </Link></li>
                            <li><Link to="">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <Link to=""><i className="fab fa-twitter"></i></Link>
                            <Link to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link to=""><i className="fab fa-instagram"></i></Link>
                            <Link to=""><i className="fab fa-linkedin-in"></i></Link >
                        </div>
                    </div>
                </div>
            </div>
            <hr className=" text-light " />
            <small className=" text-light text-mute "> ©All Right Resurved by Mohammad Shakib </small>
        </div>
    );
};

export default Footer;