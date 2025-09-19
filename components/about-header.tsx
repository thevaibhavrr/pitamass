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
                    src="https://themephi.net/template/zeniqsh/zeniqs/assets/images/logo/logo.png" 
                    alt="Logo" 
                    width={120} 
                    height={40}
                  />
                </Link>
              </div>
              <div className="zq_header-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li className="menu-has-child">
                      <Link href="#">Home</Link>
                      {/* <ul className="submenu">
                        <li>
                          <Link href="/">Home 1</Link>
                        </li>
                        <li>
                          <Link href="/">Home 2</Link>
                        </li>
                        <li>
                          <Link href="/">Home 3</Link>
                        </li>
                        <li>
                          <Link href="/">Home 4</Link>
                        </li>
                        <li>
                          <Link href="/">Home 5</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-has-child">
                      <Link href="#">Work</Link>
                      {/* <ul className="submenu">
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="/service">Service</Link>
                        </li>
                        <li>
                          <Link href="/service-details">Service Details</Link>
                        </li>
                        <li>
                          <Link href="/team">Team</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                        <li>
                          <Link href="/faq">FAQ</Link>
                        </li>
                        <li>
                          <Link href="/404">404</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-has-child">
                      <Link href="#">Pitmans Lab</Link>
                      {/* <ul className="submenu">
                        <li>
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-details">Portfolio Details</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link href="#">About</Link>
                    </li>
                    <li className="menu-has-child">
                      <Link href="#">Careers</Link>
                      {/* <ul className="submenu">
                        <li>
                          <Link href="/blog">Blog Grid</Link>
                        </li>
                        <li>
                          <Link href="/blog-2">Blog Classic</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Blog Details</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link href="#">Contact</Link>
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
