"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="zq_footer-area">
      <div className="zq_footer-top pt-205">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6">
              <div className="zq_footer-widget mr-85 mb-40">
                <h4 className="zq_footer-widget-title">Newsletter</h4>
                <p className="zq_footer-widget-text">Our team comprises professionals with extensive experience in creative design and digital solutions.</p>
                <div className="zq_footer-widget-mail">
                  <i className="fa-sharp fa-light fa-envelope"></i>
                  <a href="mailto:hello@pitamaas.com">hello@pitamaas.com</a>
                </div>
                <form action="#">
                  <input type="email" placeholder="Email Address" />
                  <button type="submit"><i className="fa-sharp fa-solid fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="zq_footer-widget ml-25 mb-35">
                <h4 className="zq_footer-widget-title">Services</h4>
                <ul>
                  <li><Link href="#">Packaging Design</Link></li>
                  <li><Link href="#">Logo Design</Link></li>
                  <li><Link href="#">Digital Marketing</Link></li>
                  <li><Link href="#">Video Ads</Link></li>
                  <li><Link href="#">Website Development</Link></li>
                  <li><Link href="#">Photography</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 order-lg-3 order-md-4 order-3">
              <div className="zq_footer-widget ml-15 mb-35">
                <h4 className="zq_footer-widget-title">Quick Links</h4>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="#">Portfolio</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="#">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 order-lg-4 order-md-3 order-4">
              <div className="zq_footer-widget ml-45 mb-40">
                <h4 className="zq_footer-widget-title">Our Office</h4>
                <div className="zq_footer-widget-post">
                  <h5><a href="#">Pitamaas, Scf-61, Main Market, opp. CFC School, F Block, Bhai Randhir Singh Nagar, Ludhiana, Punjab 141012</a></h5>
                </div>
                <div className="zq_footer-widget-post">
                  <span>Contact</span>
                  <h5><a href="tel:+919876543210">+91 70877-24552</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="zq_footer-bottom">
        <div className="container">
          <div className="zq_footer-bottom-wrap">
            <div className="zq_footer-logo">
              <Link href="/"><Image src="https://www.pitamaas.com/logo-dark-mobile.png" alt="Pitamaas" width={120} height={40} /></Link>
            </div>
            <div className="zq_footer-copyright">
              <p>Copyright © 2025 <Link href="#">Pitamaas</Link> All Rights Reserved</p>
            </div>
            <div className="zq_footer-social">
              <ul>
                <li><a href="https://www.facebook.com/pitamaas" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://x.com/pitamaas" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/company/pitamaas" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/pitamaas" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
