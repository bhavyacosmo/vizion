import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-v3">
            <div className="section-container footer-v3-container">
                <div className="footer-main-grid">
                    {/* Contact Column */}
                    <div className="footer-contact-col">
                        <h2 className="footer-v3-title">Contact Us</h2>
                        <div className="contact-item-group">
                            <a href="mailto:ravi@viziontools.com" className="footer-contact-link">
                                <Mail size={24} className="contact-icon" />
                                <span>ravi@viziontools.com</span>
                            </a>
                            <a href="tel:9292044923" className="footer-contact-link">
                                <Phone size={24} className="contact-icon" />
                                <span>929-204-4923</span>
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-links-wrapper">
                        <div className="footer-links-header-group">
                            <h2 className="footer-v3-title">Quick Links</h2>
                        </div>
                        <div className="footer-links-grid">
                            <div className="footer-v3-col">
                                <ul>
                                    <li><Link to="/loyalty">Loyalty Program</Link></li>
                                    <li><Link to="/online-ordering">Online Ordering</Link></li>
                                    <li><Link to="/bulk-pricing">Bulk Pricing</Link></li>
                                </ul>
                            </div>
                            <div className="footer-v3-col">
                                <ul>
                                    <li><Link to="/employees">Employees</Link></li>
                                    <li><Link to="/payments">Payments</Link></li>
                                    <li><Link to="/analytics">Analytics</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-v3-bottom">
                    <p>Copyright 2026 All Rights Reserved Vizion Tools</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

