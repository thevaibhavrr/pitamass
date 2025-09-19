"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function AboutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="zq_header-area">
      <div className="container container-custom-1">
        <div className="row align-items-center">
          <div className="col-xxl-9 col-lg-8 col-sm-6 col-8">
            <div className="zq_header-left">
              <div className="zq_header-logo">
                <Link href="/">
                  <Image 
                    src="/Pitamaas Logo White.png"
                    alt="Pitamaas Logo"
                    width={60}
                    height={60}
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
              <div className="zq_header-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link href="/">Work</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/pitmans-lab">Pitmans Lab</Link>
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
            <div className="zq_header-right">
              <Link href="/contact" className="zq_header-btn">
                Contact Now
                <svg width="11" height="13" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.57971 10.1668L9.55073 1.8335M9.55073 1.8335H2.37681M9.55073 1.8335V9.33349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span className="zq_header-menuIcon zq_menuIcon" onClick={toggleMenu}>
                <i className="fa-light fa-grid-2"></i>
              </span>
              <span className="zq_header-action-shape">
                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="currentColor"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
