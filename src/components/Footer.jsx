import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-minimal">
            <div className="section-container footer-minimal-container">
                <div className="footer-top-grid">
                    <div className="footer-brand-col">
                        <Link to="/" className="footer-logo">
                            VIZION
                        </Link>
                        <p className="footer-tagline">Elevating retail experiences through smart POS technology.</p>
                    </div>

                    <div className="footer-nav-grid">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/features">Features</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Resources</h4>
                            <ul>
                                <li><Link to="/docs">Documentation</Link></li>
                                <li><Link to="/#faq">FAQ</Link></li>
                                <li><Link to="/support">Support</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-flex">
                    <div className="status-indicator">
                        <span className="dot"></span>
                        All systems operational
                    </div>
                    <div className="footer-legal">
                        <span>© 2026 Vizion. All rights reserved</span>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

