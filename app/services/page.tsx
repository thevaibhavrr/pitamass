"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AboutHeader } from "@/components/about-header"
import Marquee from "react-fast-marquee"
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  Package, 
  Palette, 
  Megaphone, 
  Video, 
  Monitor, 
  Camera,
  Code,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  TrendingUp,
  Layers,
  PenTool,
  Eye,
  MousePointer,
  Database,
  Cloud,
  Cpu,
  Wifi,
  Lock,
  Settings,
  BarChart3,
  MessageSquare,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import '../../styles/globals.css'
import '../../styles/bootstrap.min.css'
import '../../styles/nice-select.css'
import '../../styles/meanmenu.css'
import '../../styles/swiper-bundle.min.css'
import '../../styles/animate.min.css'
import '../../styles/magnific-popup.css'
import '../../styles/main.css'

export default function ServicesPage() {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);


  const servicesData = [
    {
      id: 1,
      title: "Packaging Design",
      icon: Package,
      description: "Create stunning, functional packaging that captures attention and drives sales. From concept to production, we design packaging that tells your brand story and stands out on shelves.",
      features: ["Brand-aligned design", "Print-ready files", "3D mockups", "Material selection", "Sustainability focus"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      price: "Starting at $299",
      duration: "2-3 weeks",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Logo Design",
      icon: Palette,
      description: "Memorable logos that represent your brand identity. We create timeless designs that work across all platforms and mediums, from business cards to billboards.",
      features: ["Multiple concepts", "Vector formats", "Brand guidelines", "Logo variations", "Style guide"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      price: "Starting at $199",
      duration: "1-2 weeks",
      color: "from-pink-500 to-red-600"
    },
    {
      id: 3,
      title: "Digital Marketing",
      icon: Megaphone,
      description: "Comprehensive digital marketing strategies that drive growth. From social media campaigns to SEO optimization, we help you reach and engage your target audience effectively.",
      features: ["Social media strategy", "SEO optimization", "Content marketing", "Analytics tracking", "Campaign management"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      price: "Starting at $499/month",
      duration: "Ongoing",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "Video Ads",
      icon: Video,
      description: "Compelling video advertisements that convert viewers into customers. We create engaging video content for social media, YouTube, and TV that drives results.",
      features: ["Script writing", "Professional production", "Motion graphics", "Multi-platform optimization", "Performance tracking"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      price: "Starting at $799",
      duration: "3-4 weeks",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 5,
      title: "Website Development",
      icon: Monitor,
      description: "Your website is the gateway where people discover and connect with your business. We create user-focused websites that increase online engagement and strengthen your brand presence.",
      features: ["User-focused design", "Mobile responsive", "SEO optimized", "Fast performance", "Brand strengthening"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      price: "Starting at $999",
      duration: "4-6 weeks",
      color: "from-orange-500 to-yellow-600"
    },
    {
      id: 6,
      title: "Photography",
      icon: Camera,
      description: "Professional photography services for products, events, and lifestyle. High-quality images that showcase your brand and products in the best light.",
      features: ["Product photography", "Event coverage", "Lifestyle shoots", "Post-production editing", "Stock photo access"],
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop",
      price: "Starting at $399",
      duration: "1-2 days",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const processData = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and prototypes to visualize your project before development begins.",
      icon: PenTool,
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "Our developers bring the design to life using cutting-edge technologies and best practices for optimal performance.",
      icon: Code,
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      title: "Launch & Support",
      description: "We deploy your project with comprehensive testing and provide ongoing support to ensure continued success.",
      icon: Rocket,
      color: "from-green-400 to-emerald-500"
    }
  ];


  return (
    <>
      <AboutHeader />
      <style jsx global>{`
        /* Ensure navigation maintains rounded corners */
        nav[aria-label="Primary"] button {
          border-radius: 9999px !important;
        }
        
        /* Override any template button styles that affect navigation */
        nav[aria-label="Primary"] .rounded-full {
          border-radius: 9999px !important;
        }
        
        /* Ensure navigation backdrop blur works */
        nav[aria-label="Primary"] .backdrop-blur {
          backdrop-filter: blur(8px) !important;
        }
        
        /* Fix text styling to match other pages */
        nav[aria-label="Primary"] button {
          font-size: 0.75rem !important; /* text-xs */
          font-weight: 600 !important; /* font-semibold */
          line-height: 1rem !important;
          padding: 0.375rem 0.75rem !important; /* py-1.5 px-3 */
        }
        
        /* Responsive text size and padding */
        @media (min-width: 640px) {
          nav[aria-label="Primary"] button {
            font-size: 0.875rem !important; /* sm:text-sm */
            line-height: 1.25rem !important;
            padding: 0.5rem 1.25rem !important; /* sm:py-2 sm:px-5 */
          }
        }
        
        /* Override any template font-weight overrides */
        nav[aria-label="Primary"] button * {
          font-weight: inherit !important;
        }
        
        /* Fix navigation container padding and gaps */
        nav[aria-label="Primary"] > div {
          padding: 0.25rem !important; /* py-1 px-1 */
          gap: 0.25rem !important; /* gap-1 */
        }
        
        @media (min-width: 640px) {
          nav[aria-label="Primary"] > div {
            padding: 0.5rem !important; /* sm:py-2 sm:px-2 */
            gap: 0.5rem !important; /* sm:gap-2 */
          }
        }
        
        /* Fix header "Let's Talk" button styling */
        header button[aria-label="Let's Talk"] {
          border-radius: 9999px !important;
          font-size: 0.75rem !important; /* text-xs */
          font-weight: 600 !important; /* font-semibold */
          line-height: 1rem !important;
          padding: 0.375rem 0.75rem !important; /* py-1.5 px-3 */
        }
        
        /* Responsive header button styling */
        @media (min-width: 640px) {
          header button[aria-label="Let's Talk"] {
            font-size: 0.875rem !important; /* sm:text-sm */
            line-height: 1.25rem !important;
            padding: 0.5rem 1.25rem !important; /* sm:py-2 sm:px-5 */
          }
        }
        
        /* Adjust hero section title font size */
        .zq_hero-content-title {
          font-size: 3.5rem !important; /* Increased more */
          line-height: 1.2 !important;
        }
        
        /* Responsive hero title font size */
        @media (min-width: 640px) {
          .zq_hero-content-title {
            font-size: 4rem !important; /* Increased more */
          }
        }
        
        @media (min-width: 768px) {
          .zq_hero-content-title {
            font-size: 4.5rem !important; /* Increased more */
          }
        }
        
        @media (min-width: 1024px) {
          .zq_hero-content-title {
            font-size: 5rem !important; /* Increased more */
          }
        }
        
        /* Reduce hero section height on desktop */
        @media (min-width: 1024px) {
          .zq_hero-area {
            min-height: 60vh !important; /* Reduced from default */
            padding: 60px 0 !important; /* Reduced padding */
          }
          
          .zq_hero-container {
            min-height: 60vh !important; /* Reduced container height */
          }
          
          .zq_hero-wrap {
            min-height: 60vh !important; /* Reduced wrap height */
            display: flex !important;
            align-items: center !important;
          }
        }

        /* Service card hover effects */
        .service-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .service-card:hover::before {
          opacity: 0.1;
        }

        .service-card-content {
          position: relative;
          z-index: 2;
        }

        /* Pricing card styles */
        .pricing-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }

        .pricing-card.popular {
          border: 2px solid var(--clr-theme-primary);
          transform: scale(1.05);
        }

        .pricing-card.popular:hover {
          transform: scale(1.05) translateY(-5px);
        }

        /* Process step animations */
        .process-step {
          transition: all 0.3s ease;
        }

        .process-step:hover {
          transform: translateY(-5px);
        }

        /* Feature list animations */
        .feature-item {
          transition: all 0.2s ease;
        }

        .feature-item:hover {
          transform: translateX(5px);
          color: var(--clr-theme-primary);
        }

        /* Compact Services Section Styles */
        .services-compact-section {
          background: var(--clr-common-black);
          position: relative;
        }

        .services-intro-text {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .service-card-compact {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 0;
          transition: all 0.3s ease;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card-compact:hover {
          transform: translateY(-8px);
          border-color: var(--clr-theme-primary);
          box-shadow: 0 15px 35px rgba(138, 241, 53, 0.15);
        }

        .service-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 20px 0 20px;
          margin-bottom: 15px;
        }

        .service-icon-wrapper {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-common-black);
          transition: all 0.3s ease;
        }

        .service-card-compact:hover .service-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .service-price-tag {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .service-price-tag .price {
          color: var(--clr-theme-primary);
          font-weight: 600;
          font-size: 12px;
        }

        .service-image-compact {
          position: relative;
          margin: 0 20px 20px 20px;
          border-radius: 12px;
          overflow: hidden;
        }

        .service-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .service-card-compact:hover .service-img {
          transform: scale(1.05);
        }

        .service-overlay-compact {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
          display: flex;
          align-items: flex-end;
          padding: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card-compact:hover .service-overlay-compact {
          opacity: 1;
        }

        .service-duration-badge {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 6px 10px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--clr-common-black);
          font-size: 12px;
          font-weight: 500;
        }

        .service-content-compact {
          padding: 0 20px 20px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-title-compact {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .service-desc-compact {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 16px;
          flex: 1;
        }

        .service-features-compact {
          margin-bottom: 20px;
        }

        .feature-compact {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 13px;
          color: var(--clr-body-text);
          opacity: 0.9;
        }

        .feature-compact svg {
          color: var(--clr-theme-primary);
          flex-shrink: 0;
        }

        .service-action-compact {
          margin-top: auto;
        }

        .service-link-compact {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--clr-theme-primary);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          padding: 8px 0;
        }

        .service-link-compact:hover {
          color: var(--clr-color-skyBlue);
          transform: translateX(5px);
        }

        .services-cta-compact {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 40px 30px;
        }

        .cta-title-compact {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 12px;
        }

        .cta-desc-compact {
          color: var(--clr-body-text);
          opacity: 0.8;
          margin-bottom: 25px;
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .service-card-compact {
            margin-bottom: 20px;
          }

          .service-card-header {
            padding: 15px 15px 0 15px;
          }

          .service-image-compact {
            margin: 0 15px 15px 15px;
          }

          .service-content-compact {
            padding: 0 15px 15px 15px;
          }

          .services-cta-compact {
            padding: 30px 20px;
          }

          .cta-title-compact {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="has-smooth" id="has_smooth">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper">
              {/* Hero Section */}
              <section className="zq_hero-area">
                <div className="container container-custom-1">
                  <div className="zq_hero-container">
                    <div className="zq_hero-wrap">
                      <motion.div 
                        className="zq_hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <motion.h1 
                          className="zq_hero-content-title"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          BUILDING A BUSINESS <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >WEBSITE</motion.span> FOR THE MODERN ERA
                        </motion.h1>
                        <motion.p 
                          className="hero-description"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          style={{ 
                            fontSize: '1.2rem', 
                            color: 'var(--clr-body-text)', 
                            opacity: 0.9, 
                            lineHeight: 1.6, 
                            marginTop: '20px',
                            maxWidth: '600px'
                          }}
                        >
                          Your website is the gateway where people discover and connect with your business, helping you
                          reach new heights in today's digital age.
                          Pitamaas is recognized as one of the top website development agencies in India, specializing in
                          designing user-focused websites that increase online engagement, strengthen brands.
                        </motion.p>
                      </motion.div>
                      <motion.div 
                        className="zq_hero-img"
                        initial={{ opacity: 0, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                            alt="Services Hero"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg"
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>


              {/* Services Showcase Section - Compact Design */}
              <section id="services" className="services-compact-section pt-95 pb-70">
                <div className="container">
                  {/* Section Header */}
                  <div className="row justify-content-center mb-60">
                    <div className="col-xl-6 col-lg-8">
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <span className="zq_section-subtitle mb-20">Our Services</span>
                        <h2 className="zq_section-title mb-30">Website Development Solutions</h2>
                        <p className="services-intro-text">
                          We create modern, responsive websites that serve as powerful digital gateways for your business, 
                          designed to engage users and drive conversions in today's competitive online landscape.
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Services Grid - Compact Cards */}
                  <div className="row">
                    {servicesData.map((service, index) => {
                      const IconComponent = service.icon;
                      
                      return (
                        <div key={service.id} className="col-lg-4 col-md-6 mb-30">
                          <motion.div 
                            className="service-card-compact"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.15,
                              type: "spring",
                              stiffness: 100
                            }}
                            viewport={{ once: true }}
                            onHoverStart={() => setHoveredService(service.id)}
                            onHoverEnd={() => setHoveredService(null)}
                            whileHover={{ 
                              y: -10, 
                              scale: 1.02,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <motion.div 
                              className="service-card-header"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              viewport={{ once: true }}
                            >
                              <motion.div 
                                className="service-icon-wrapper"
                                whileHover={{ 
                                  scale: 1.1, 
                                  rotate: 5,
                                  transition: { duration: 0.3 }
                                }}
                              >
                                <IconComponent size={24} />
                              </motion.div>
                              <motion.div 
                                className="service-price-tag"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                viewport={{ once: true }}
                              >
                                <span className="price">{service.price}</span>
                              </motion.div>
                            </motion.div>

                            <motion.div 
                              className="service-image-compact"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Image
                                src={service.image}
                                alt={service.title}
                                width={300}
                                height={180}
                                className="service-img"
                              />
                              <motion.div 
                                className="service-overlay-compact"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              >
                                <motion.div 
                                  className="service-duration-badge"
                                  initial={{ y: 20, opacity: 0 }}
                                  whileHover={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                  <Clock size={14} />
                                  <span>{service.duration}</span>
                                </motion.div>
                              </motion.div>
                            </motion.div>

                            <motion.div 
                              className="service-content-compact"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                              viewport={{ once: true }}
                            >
                              <motion.h4 
                                className="service-title-compact"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                viewport={{ once: true }}
                              >
                                {service.title}
                              </motion.h4>
                              <motion.p 
                                className="service-desc-compact"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                viewport={{ once: true }}
                              >
                                {service.description}
                              </motion.p>
                              
                              <motion.div 
                                className="service-features-compact"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                viewport={{ once: true }}
                              >
                                {service.features.slice(0, 3).map((feature, featureIndex) => (
                                  <motion.div 
                                    key={featureIndex} 
                                    className="feature-compact"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                      duration: 0.3, 
                                      delay: 0.9 + (featureIndex * 0.1)
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 5, scale: 1.05 }}
                                  >
                                    <motion.div
                                      whileHover={{ scale: 1.2, rotate: 5 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <CheckCircle size={14} />
                                    </motion.div>
                                    <span>{feature}</span>
                                  </motion.div>
                                ))}
                              </motion.div>

                              <motion.div 
                                className="service-action-compact"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 1.0 }}
                                viewport={{ once: true }}
                              >
                                <motion.div
                                  whileHover={{ scale: 1.05, x: 5 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Link href="#" className="service-link-compact">
                                    Learn More
                                    <motion.div
                                      whileHover={{ x: 3 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <ArrowRight size={14} />
                                    </motion.div>
                                  </Link>
                                </motion.div>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom CTA */}
                  <motion.div 
                    className="services-cta-compact text-center mt-60"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.h3 
                      className="cta-title-compact"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Need Something Custom?
                    </motion.h3>
                    <motion.p 
                      className="cta-desc-compact"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      We love tackling unique challenges and creating bespoke solutions.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="#contact" className="zq_theme-btn">
                        Let's Discuss Your Project
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight size={16} className="ml-2" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </section>





              {/* CTA Section */}
              <div className="zq_cta-area">
                <div className="container">
                  <motion.div 
                    className="zq_cta-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="zq_cta-title">
                      Ready to Transform Your Business? <br />Let's Create Something Amazing Together!
                    </h2>
                    <div className="zq_cta-action">
                      <Image src="/placeholder.svg" alt="Call" width={60} height={60} />
                      <div className="zq_cta-action-info">
                        <span>Get in Touch</span>
                        <a href="tel:+704-555-0127">(+704) 555-0127</a>
                      </div>
                    </div>
                    <div className="zq_cta-buttons">
                      <Link href="/contact" className="zq_theme-btn">Start a Project</Link>
                      <Link href="/about" className="zq_theme-btn zq_theme-btn-outline">Learn More</Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
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
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 order-lg-4 order-md-3 order-4">
                <div className="zq_footer-widget ml-45 mb-40">
                  <h4 className="zq_footer-widget-title">Our Office</h4>
                  <div className="zq_footer-widget-post">
                    <span>Head Office</span>
                    <h5><a href="#">New Delhi, India 🇮🇳</a></h5>
                  </div>
                  <div className="zq_footer-widget-post">
                    <span>Contact</span>
                    <h5><a href="tel:+919876543210">+91 98765 43210</a></h5>
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
                <Link href="/"><Image src="https://www.pitamaas.com/logo-dark-clile.png" alt="Pitamaas" width={120} height={40} /></Link>
              </div>
              <div className="zq_footer-copyright">
                <p>Copyright © 2024 <Link href="#">Pitamaas</Link> All Rights Reserved</p>
              </div>
              <div className="zq_footer-social">
                <ul>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
