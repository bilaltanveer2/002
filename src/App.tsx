import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ResultsPage from './pages/ResultsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';

function AppShell() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="app-shell">
      <header className={`nav ${isMobileMenuOpen ? 'nav--open' : ''}`}>
        <div className="nav__inner">
          <div className="nav__brand">
            <div className="nav__logo-mark">HB</div>
            <div className="nav__logo-text">
              <span className="nav__logo-title">Virtual Digital HB</span>
              <span className="nav__logo-sub">Digital Growth Studio</span>
            </div>
          </div>

          <button
            className={`nav__hamburger ${isMobileMenuOpen ? 'nav__hamburger--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav__menu ${isMobileMenuOpen ? 'nav__menu--open' : ''}`}>
            <nav className="nav__links">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                About
              </NavLink>
              <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                Services
              </NavLink>
              <NavLink to="/results" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                Client Results
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                Contact
              </NavLink>
            </nav>
            <div className="nav__cta">
              <NavLink to="/admin" onClick={closeMenu} className="btn btn--ghost" style={{ opacity: 0.8, borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                Admin Login
              </NavLink>
              <NavLink to="/blog" onClick={closeMenu} className="btn btn--ghost">
                Insights
              </NavLink>
              <a href="https://wa.me/923705978907" target="_blank" rel="noreferrer" className="btn btn--primary">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="layout">
        <Suspense fallback={<div className="section">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/portfolio" element={<Navigate to="/" replace />} />
            <Route path="/pricing" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} Virtual Digital HB. All rights reserved.</span>
          <div className="footer__right">
            <a href="https://www.instagram.com/virtual_digital_hb" target="_blank" rel="noreferrer" className="footer__link">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/virtual_digital_hb" target="_blank" rel="noreferrer" className="footer__link">
              LinkedIn
            </a>
            <a href="https://www.tiktok.com/@virtual_digital_hb" target="_blank" rel="noreferrer" className="footer__link">
              TikTok
            </a>
            <a href="#privacy" className="footer__link">
              Privacy
            </a>
            <a href="#terms" className="footer__link">
              Terms
            </a>
            <a href="mailto:hello@virtualdigitalhb.com" className="footer__link">
              hello@virtualdigitalhb.com
            </a>
          </div>
        </div>
      </footer>

      <div className="sticky-cta">
        <div className="sticky-cta__inner">
          <span className="sticky-cta__text">
            Ready to scale with Shopify, Google & Meta ads?
          </span>
          <a
            href="https://wa.me/923705978907?text=Hi,%20I%20would%20like%20to%20schedule%20a%20call%20with%20you.%20Please%20let%20me%20know%20your%20available%20time%20slots."
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Book Free Growth Call
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/923705978907"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-fab"
      >
        ⌾
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
