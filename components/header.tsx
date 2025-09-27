"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLetsTalk = () => {
    router.push("/contact")
  }

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
      <motion.header
        className="pointer-events-none fixed left-3 top-3 right-3 sm:left-6 sm:top-6 sm:right-6 z-40 flex items-center justify-between"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Logo */}
        <Link href="/" className="pointer-events-auto block">
          <motion.img
            src="https://www.pitamaas.com/logo-dark-mobile.png"
            alt="Pitamaas Logo"
            className="h-16 w-auto sm:h-20 md:h-24 lg:h-30"
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="pointer-events-auto hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-200">
            Work
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300 transition-colors duration-200">
            Services
          </Link>
          <Link href="/lab" className="text-white hover:text-gray-300 transition-colors duration-200">
            Pitamaas Lab
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-200">
            About
          </Link>
          <Link href="/careers" className="text-white hover:text-gray-300 transition-colors duration-200">
            Careers
          </Link>
        </nav>

        {/* Right Side - Desktop Contact Button & Mobile Menu */}
        <div className="pointer-events-auto flex items-center space-x-4">
          {/* Desktop Contact Button */}
          <motion.button
            aria-label="Let's Talk"
            className={cn(
              "hidden lg:block rounded-full bg-white px-5 py-2 text-sm font-semibold text-black",
              "shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]",
            )}
            onClick={handleLetsTalk}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Talk
          </motion.button>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className={`mobile-menu-container ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <Link href="/" onClick={toggleMenu}>
              <Image 
                src="https://www.pitamaas.com/logo-dark-mobile.png"
                alt="Pitamaas Logo"
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

        <div className="mobile-menu-footer">
          <button 
            className="mobile-contact-btn" 
            onClick={() => {
              handleLetsTalk()
              toggleMenu()
            }}
          >
            Let's Talk
            <svg width="11" height="13" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.57971 10.1668L9.55073 1.8335M9.55073 1.8335H2.37681M9.55073 1.8335V9.33349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        /* Mobile Menu Styles */
        .mobile-menu-toggle {
          display: flex;
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
          border: none;
          cursor: pointer;
          width: 100%;
          justify-content: center;
        }

        .mobile-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(163, 235, 23, 0.3);
        }

        /* Responsive Design */
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
      `}</style>
    </>
  )
}
