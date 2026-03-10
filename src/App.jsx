import React from 'react'
import ThreeScene from './components/ThreeScene'
import FullSiteContent from './components/FullSiteContent'
import { Phone } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="app-main">
      <ThreeScene />

      <nav className="navbar-v2">
        <div className="navbar-container">
          <div className="logo-section">
            <img src="/logo.png" alt="Vizion Logo" className="navbar-logo-img" />
          </div>
          <div className="nav-actions-v2">
            <div className="contact-info-v2">
              <Phone size={18} className="phone-icon-v2" />
              <span>929-204-4923</span>
            </div>
            <button className="btn-navbar-pill">Request Demo</button>
            <button className="btn-navbar-pill">Sign up Now</button>
          </div>
        </div>
      </nav>

      <main className="content-scroller">
        <FullSiteContent />
      </main>
    </div>
  )
}

export default App
