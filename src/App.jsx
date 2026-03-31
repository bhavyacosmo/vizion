import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FullSiteContent from './components/FullSiteContent'
import ScrollToTop from './components/ScrollToTop'
import { Phone, Menu, ChevronDown } from 'lucide-react'
import './App.css'

// Page Imports
import LoyaltyProgram from './pages/LoyaltyProgram'
import OnlineOrdering from './pages/OnlineOrdering'
import BulkPricing from './pages/BulkPricing'
import Employees from './pages/Employees'
import Payments from './pages/Payments'
import Analytics from './pages/Analytics'
import Demo from './pages/Demo';
import Signup from './pages/Signup';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-main">

        <nav className="navbar-v2">
          <div className="navbar-container">
            <Link to="/" className="logo-section">
              <img src="/logo.png" alt="Vizion Logo" className="navbar-logo-img" />
              <span className="logo-text-v2">VIZION POS</span>
            </Link>
            
            <div className="nav-actions-v2">
              <div className="dropdown-container" 
                   onMouseEnter={() => setIsDropdownOpen(true)}
                   onMouseLeave={() => setIsDropdownOpen(false)}>
                <div className="dropdown-trigger">
                  Pages <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="dropdown-menu"
                    >
                      <Link to="/loyalty" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Loyalty Program</Link>
                      <Link to="/online-ordering" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Online Ordering</Link>
                      <Link to="/bulk-pricing" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Bulk Pricing</Link>
                      <Link to="/employees" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Employees</Link>
                      <Link to="/payments" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Payments</Link>
                      <Link to="/analytics" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Analytics</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="contact-info-v2 hidden xl:flex">
                <Phone size={18} className="phone-icon-v2" />
                <span>929-204-4923</span>
              </div>
              
              {/* Desktop Buttons */}
              <div className="hidden md:flex gap-4">
                <a href="https://cal.com/piyushchandak/30min" className="btn-navbar-pill" style={{ textDecoration: 'none' }}>Request Demo</a>
                <a href="https://cal.com/piyushchandak/30min" className="btn-navbar-pill-accent" style={{ textDecoration: 'none' }}>Sign up Now</a>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden p-2" 
                style={{ color: 'var(--accent)' }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu size={32} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mobile-nav-overlay md:hidden"
              >
                <div className="mobile-nav-content">
                  <a href="https://cal.com/piyushchandak/30min" className="btn-navbar-pill w-full mb-4 text-center" style={{ textDecoration: 'none', display: 'block' }}>Request Demo</a>
                  <a href="https://cal.com/piyushchandak/30min" className="btn-navbar-pill-accent w-full text-center" style={{ textDecoration: 'none', display: 'block' }}>Sign up Now</a>
                  
                  <div className="mobile-pages-links mt-8 pt-8 border-t border-gray-100">
                    <p className="text-gray-400 uppercase text-xs font-bold mb-4 tracking-widest">Navigation</p>
                    <Link to="/loyalty" className="block py-3 text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Loyalty Program</Link>
                    <Link to="/online-ordering" className="block py-3 text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Online Ordering</Link>
                    <Link to="/bulk-pricing" className="block py-3 text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Bulk Pricing</Link>
                    <Link to="/employees" className="block py-3 text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Employees</Link>
                    <Link to="/payments" className="block py-3 text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Payments</Link>
                    <Link to="/analytics" className="block py-3 text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Analytics</Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <main className="content-scroller">
          <Routes>
            <Route path="/" element={<FullSiteContent />} />
            <Route path="/loyalty" element={<LoyaltyProgram />} />
            <Route path="/online-ordering" element={<OnlineOrdering />} />
            <Route path="/bulk-pricing" element={<BulkPricing />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/payments" element={<Payments />} />
             <Route path="/analytics" element={<Analytics />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

