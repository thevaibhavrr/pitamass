"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

interface AboutHeaderProps {
  showIcon?: boolean;
  hideContactButton?: boolean;
  useLabLogo?: boolean;
}

export function AboutHeader({ showIcon = true, hideContactButton = false, useLabLogo = false }: AboutHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="zq_header-area">
        <div className="container container-custom-1">
          <div className="row align-items-center">
            <div className="col-xxl-9 col-lg-8 col-sm-6 col-8">
              <div className="zq_header-left">
                <div className="zq_header-logo">
                  <Link href="/">
                    <Image 
                      src={useLabLogo ? "/Pitamaas lab logo.png" : "/Pitamaas logo new.png"}
                      alt={useLabLogo ? "Pitamaas Lab Logo" : "Pitamaas Logo"}
                      width={useLabLogo ? 80 : 100}
                      height={useLabLogo ? 80 : 100}
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginLeft: '15px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </Link>
                </div>
                <div className="zq_header-menu desktop-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link href="/">Work</Link>
                      </li>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/lab">Pitamaas Lab</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/careers">Careers</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-4 d-flex justify-content-end">
              <div className={`zq_header-right ${hideContactButton ? 'zq_header-right-no-contact' : ''}`}>
                {!hideContactButton && (
                  <Link href="/contact" className="zq_header-btn desktop-contact-btn">
                    Contact Now
                    <svg width="11" height="13" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.57971 10.1668L9.55073 1.8335M9.55073 1.8335H2.37681M9.55073 1.8335V9.33349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                )}
                <button 
                  className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                  onClick={toggleMenu}
                  aria-label="Toggle mobile menu"
                >
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>
                {showIcon && (
                  <span className="zq_header-action-shape desktop-shape">
                    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="currentColor"></path>
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className={`mobile-menu-container ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <Link href="/" onClick={toggleMenu}>
              <Image 
                src={useLabLogo ? "/Pitamaas lab logo.png" : "/Pitamaas logo new.png"}
                alt={useLabLogo ? "Pitamaas Lab Logo" : "Pitamaas Logo"}
                width={60}
                height={60}
              />
            </Link>
          </div>
          <button 
            className="mobile-menu-close"
            onClick={toggleMenu}
            aria-label="Close mobile menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
        
        <nav className="mobile-menu-nav">
          <ul>
            <li>
              <Link href="/" onClick={toggleMenu}>Work</Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link href="/lab" onClick={toggleMenu}>Pitamaas Lab</Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href="/careers" onClick={toggleMenu}>Careers</Link>
            </li>
          </ul>
        </nav>

        {!hideContactButton && (
          <div className="mobile-menu-footer">
            <Link href="/contact" className="mobile-contact-btn" onClick={toggleMenu}>
              Contact Now
              <svg width="11" height="13" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.57971 10.1668L9.55073 1.8335M9.55073 1.8335H2.37681M9.55073 1.8335V9.33349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        )}
      </div>

      <style jsx global>{`
        /* Mobile Menu Styles */
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 30px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
          position: relative;
          outline: none;
        }

        .mobile-menu-toggle:focus {
          outline: none;
          box-shadow: none;
        }

        .mobile-menu-toggle:hover {
          background: transparent;
        }

        .mobile-menu-toggle:active {
          background: transparent;
        }

        .mobile-menu-toggle.active {
          background: transparent;
        }

        .hamburger-line {
          width: 25px;
          height: 3px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .mobile-menu-toggle.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-toggle.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-container {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          height: 100%;
          background: #000;
          z-index: 999;
          transition: right 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu-container.active {
          right: 0;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-logo img {
          max-height: 40px;
          width: auto;
        }

        .mobile-menu-close {
          width: 30px;
          height: 30px;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
        }

        .mobile-menu-close span {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 2px;
          background: white;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .mobile-menu-close span:last-child {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        .mobile-menu-nav {
          flex: 1;
          padding: 30px 20px;
        }

        .mobile-menu-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-menu-nav li {
          margin-bottom: 20px;
        }

        .mobile-menu-nav a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          display: block;
          padding: 10px 0;
          transition: color 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .mobile-menu-nav a:hover {
          color: #A3EB17;
          border-bottom-color: #A3EB17;
        }

        .mobile-menu-footer {
          padding: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #A3EB17, #FF00A0);
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .mobile-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(163, 235, 23, 0.3);
        }

        /* Desktop Menu Styles */
        .desktop-menu {
          display: block;
        }

        .desktop-contact-btn {
          display: inline-flex;
        }

        .desktop-shape {
          display: block;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .desktop-contact-btn {
            display: none;
          }

          .desktop-shape {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .mobile-menu-container {
            width: 85%;
            right: -85%;
          }

          .mobile-menu-container.active {
            right: 0;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu-nav a {
            font-size: 16px;
          }

          .mobile-menu-header {
            padding: 15px;
          }

          .mobile-menu-nav {
            padding: 20px 15px;
          }

          .mobile-menu-footer {
            padding: 15px;
          }
        }

        /* Fix for zq_header-right green background on mobile */
        .zq_header-right {
          background: transparent !important;
        }

        .zq_header-right-no-contact {
          background: transparent !important;
        }

        @media (max-width: 991px) {
          .zq_header-right {
            background: transparent !important;
          }

          .zq_header-right-no-contact {
            background: transparent !important;
          }
        }
      `}</style>
    </>
  )
}
