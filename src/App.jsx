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

  return (
    <Router>
      <ScrollToTop />
      <div className="app-main">

        <nav className="navbar-v2">
          <div className="navbar-container">
            <Link to="/" className="logo-section">
              <img src="/logo.png" alt="Vizion Logo" className="navbar-logo-img" />
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
                <Link to="/demo" className="btn-navbar-pill" style={{ textDecoration: 'none' }}>Request Demo</Link>
              <Link to="/signup" className="btn-navbar-pill-accent" style={{ textDecoration: 'none' }}>Sign up Now</Link>
            </div>
          </div>
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

