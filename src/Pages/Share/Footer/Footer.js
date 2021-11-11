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
                            <li><Link to="">About Netmeds</Link></li>
                            <li><Link to="">Customers Speak</Link></li>
                            <li><Link to="">In the News</Link></li>
                            <li><Link to="">Career</Link></li>
                            <li><Link to="">Terms and Conditions</Link></li>
                            <li><Link to="">Privacy Policy</Link></li>
                            <li><Link to="">Fees and Payments Policy</Link></li>
                            <li><Link to="">Shipping and Delivery Policy</Link></li>
                            <li><Link to="">Return, Refund and Cancellation Policy</Link></li>
                            <li><Link to="">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Survices</h4>
                        <ul className=" text-start ">
                            <li><Link to="">Medicine</Link></li>
                            <li><Link to="">Wellness </Link></li>
                            <li><Link to="">LabTest</Link></li>
                            <li><Link to="">Fitness Product</Link></li>
                            <li><Link to="">Health Library</Link></li>
                            <li><Link to="">Hospital survice</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Online Shop</h4>
                        <ul className=" text-start ">

                            <li><Link to="">Browse by A-Z</Link></li>
                            <li><Link to="">Browse by Manufacturers</Link></li>
                            <li><Link to="">Health Articles</Link></li>
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