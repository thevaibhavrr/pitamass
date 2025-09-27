"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AboutHeader } from "@/components/about-header"
import { Footer } from "@/components/footer"
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
  MapPin,
  Calendar
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
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ src: '', title: '' });

  // Filter functionality
  const handleFilterClick = (e: React.MouseEvent, filter: string) => {
    e.preventDefault();
    setActiveFilter(filter);
    
    // Update active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    // Filter portfolio items
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
      const categories = item.getAttribute('data-category')?.split(' ') || [];
      const element = item as HTMLElement;
      if (filter === 'all' || categories.includes(filter)) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  };

  // Video modal functionality
  const openVideoModal = (src: string, title: string) => {
    setCurrentVideo({ src, title });
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideo({ src: '', title: '' });
  };

  const servicesData = [
    {
      id: 1,
      title: "Brand Strategy & Architecture",
      icon: Target,
      description: "Comprehensive brand strategy development that defines your unique value proposition, market positioning, and brand architecture to create a strong foundation for business growth.",
      features: ["Brand positioning", "Market analysis", "Competitive research", "Brand architecture", "Strategic planning"],
      image: "https://www.adobe.com/express/learn/blog/media_180ca7b3671c056beb10c30316a084ac6180f4b79.jpg?width=750&format=jpg&optimize=medium",
      price: "Starting at ₹25,000",
      duration: "3-4 weeks",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Integrated Marketing Solutions",
      icon: Megaphone,
      description: "End-to-end marketing solutions including social media marketing and SEO optimization to boost your online presence and drive qualified leads to your business.",
      features: ["Social Media Marketing", "Search Engine Optimization", "Content Strategy", "Analytics & Reporting", "Campaign Management"],
      image: "https://www.podssolutions.com/wp-content/uploads/2020/12/Four-Advantages-of-Using-an-Integrated-Marketing-Agency.jpg",
      price: "Starting at ₹15,000/month",
      duration: "Ongoing",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "IT Solutions",
      icon: Code,
      description: "Complete IT solutions including website development (corporate & e-commerce), ERP systems, and mobile app development to digitize and streamline your business operations.",
      features: ["Website Development", "E-commerce Solutions", "ERP Systems", "Mobile Apps", "System Integration"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      price: "Starting at ₹50,000",
      duration: "6-12 weeks",
      color: "from-orange-500 to-yellow-600"
    },
    {
      id: 4,
      title: "Content Creation",
      icon: PenTool,
      description: "Professional content creation services including visual content and content strategy to engage your audience and build brand awareness across all digital platforms.",
      features: ["Visual Content", "Content Strategy", "Video Production", "Photography", "Copywriting"],
      image: "https://imageio.forbes.com/specials-images/imageserve/626b70d70a3dae74c91617f9/How-To-Become-a-Successful-Video-Content-Creator---Insights-From-KallmeKris/960x0.jpg?height=473&width=711&fit=bounds",
      price: "Starting at ₹20,000",
      duration: "2-3 weeks",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 5,
      title: "Graphic Design",
      icon: Palette,
      description: "Complete graphic design services including logo & brand elements, packaging design, and marketing collateral to create a cohesive visual identity for your brand.",
      features: ["Logo & Brand Elements", "Packaging Design", "Marketing Collateral", "Brand Guidelines", "Print Design"],
      image: "https://facts.net/wp-content/uploads/2023/09/13-enigmatic-facts-about-graphic-design-1695793822.jpg",
      price: "Starting at ₹12,000",
      duration: "2-4 weeks",
      color: "from-pink-500 to-red-600"
    },
    {
      id: 6,
      title: "TVC & Jingles (Traditional Media)",
      icon: Video,
      description: "Professional television commercials and jingles for traditional media campaigns that reach mass audiences and create memorable brand experiences.",
      features: ["Television Commercials", "Jingles & Audio", "Script Writing", "Production", "Post-Production"],
      image: "https://img.freepik.com/premium-photo/man-typing-laptop-with-icons-background_252214-4674.jpg",
      price: "Starting at ₹1,00,000",
      duration: "4-8 weeks",
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
        /* Modern Services Section Styles */
        .services-modern-section {
          background: var(--clr-common-black);
          position: relative;
        }

        .service-card-modern {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
          position: relative;
          transition: all 0.4s ease;
          height: 100%;
        }

        .service-card-modern:hover {
          border-color: rgba(138, 241, 53, 0.3);
          box-shadow: 0 20px 40px rgba(138, 241, 53, 0.1);
          transform: translateY(-15px) scale(1.03);
        }

        .service-image-modern {
          position: relative;
          overflow: hidden;
          height: 250px;
          border-radius: 20px 20px 0 0;
        }

        .service-img-modern {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .service-image-modern:hover .service-img-modern {
          transform: scale(1.1);
        }

        .service-overlay-modern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(138, 241, 53, 0.8), rgba(56, 189, 248, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-icon-modern {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          backdrop-filter: blur(10px);
        }

        .service-content-modern {
          padding: 30px;
          position: relative;
        }

        .service-title-modern {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .service-desc-modern {
          color: var(--clr-body-text);
          opacity: 0.9;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95rem;
        }

        .service-features-modern {
          margin-bottom: 20px;
        }

        .feature-modern {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          padding: 8px 0;
          transition: all 0.3s ease;
        }

        .feature-modern:hover {
          transform: translateX(8px);
        }

        .feature-icon-modern {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          color: white;
          transition: all 0.3s ease;
        }

        .feature-modern span {
          color: var(--clr-body-text);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .service-duration-modern {
          display: inline-flex;
          align-items: center;
          background: rgba(138, 241, 53, 0.1);
          border: 1px solid rgba(138, 241, 53, 0.3);
          border-radius: 25px;
          padding: 8px 16px;
          color: var(--clr-theme-primary);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .service-duration-modern:hover {
          background: rgba(138, 241, 53, 0.2);
          transform: scale(1.1);
        }

        .service-duration-modern svg {
          margin-right: 6px;
        }

        /* CTA Section Styles */
        .services-cta-modern {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 60px 40px;
          position: relative;
          overflow: hidden;
        }

        .services-cta-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(138, 241, 53, 0.05), rgba(56, 189, 248, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .services-cta-modern:hover::before {
          opacity: 1;
        }

        .cta-content-modern {
          position: relative;
          z-index: 2;
        }

        .cta-title-modern {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-desc-modern {
          font-size: 1.1rem;
          color: var(--clr-body-text);
          opacity: 0.9;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button-modern {
          display: inline-block;
        }

        /* Comprehensive Responsive Design */
        
        /* Large Desktop (1600px+) */
        @media (min-width: 1600px) {
          .service-card-modern {
            margin-bottom: 50px;
          }
          
          .service-image-modern {
            height: 300px;
          }
          
          .service-content-modern {
            padding: 40px;
          }
          
          .service-title-modern {
            font-size: 1.8rem;
          }
          
          .service-desc-modern {
            font-size: 1.1rem;
          }
          
          .cta-title-modern {
            font-size: 3rem;
          }
          
          .services-cta-modern {
            padding: 80px 60px;
          }
        }
        
        /* Desktop (1200px - 1599px) */
        @media (min-width: 1200px) and (max-width: 1599px) {
          .service-image-modern {
            height: 280px;
          }
          
          .service-content-modern {
            padding: 35px;
          }
          
          .service-title-modern {
            font-size: 1.6rem;
          }
          
          .cta-title-modern {
            font-size: 2.8rem;
          }
          
          .services-cta-modern {
            padding: 70px 50px;
          }
        }
        
        /* Laptop (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .service-image-modern {
            height: 260px;
          }
          
          .service-content-modern {
            padding: 30px;
          }
          
          .service-title-modern {
            font-size: 1.4rem;
          }
          
          .cta-title-modern {
            font-size: 2.5rem;
          }
          
          .services-cta-modern {
            padding: 60px 40px;
          }
        }
        
        /* Tablet (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .service-card-modern {
            margin-bottom: 35px;
          }
          
          .service-image-modern {
            height: 240px;
          }
          
          .service-content-modern {
            padding: 25px 20px;
          }
          
          .service-title-modern {
            font-size: 1.3rem;
          }
          
          .service-desc-modern {
            font-size: 0.9rem;
          }
          
          .cta-title-modern {
            font-size: 2.2rem;
          }
          
          .cta-desc-modern {
            font-size: 1rem;
          }
          
          .services-cta-modern {
            padding: 50px 30px;
          }
        }
        
        /* Mobile Large (576px - 767px) */
        @media (min-width: 576px) and (max-width: 767px) {
          .service-card-modern {
            margin-bottom: 30px;
          }
          
          .service-image-modern {
            height: 220px;
          }
          
          .service-content-modern {
            padding: 25px 20px;
          }
          
          .service-title-modern {
            font-size: 1.2rem;
          }
          
          .service-desc-modern {
            font-size: 0.85rem;
          }
          
          .feature-modern span {
            font-size: 0.8rem;
          }
          
          .cta-title-modern {
            font-size: 2rem;
          }
          
          .cta-desc-modern {
            font-size: 0.95rem;
          }
          
          .services-cta-modern {
            padding: 40px 25px;
          }
        }
        
        /* Mobile Small (320px - 575px) */
        @media (max-width: 575px) {
          .service-card-modern {
            margin-bottom: 25px;
          }
          
          .service-image-modern {
            height: 200px;
          }
          
          .service-content-modern {
            padding: 20px 15px;
          }
          
          .service-title-modern {
            font-size: 1.1rem;
          }
          
          .service-desc-modern {
            font-size: 0.8rem;
            line-height: 1.5;
          }
          
          .feature-modern {
            margin-bottom: 8px;
            padding: 6px 0;
          }
          
          .feature-icon-modern {
            width: 20px;
            height: 20px;
            margin-right: 8px;
          }
          
          .feature-modern span {
            font-size: 0.75rem;
          }
          
          .cta-title-modern {
            font-size: 1.8rem;
          }
          
          .cta-desc-modern {
            font-size: 0.9rem;
          }
          
          .services-cta-modern {
            padding: 35px 20px;
          }
        }
        
        /* Extra Small Mobile (320px and below) */
        @media (max-width: 320px) {
          .service-image-modern {
            height: 180px;
          }
          
          .service-content-modern {
            padding: 15px 10px;
          }
          
          .service-title-modern {
            font-size: 1rem;
          }
          
          .service-desc-modern {
            font-size: 0.75rem;
          }
          
          .feature-modern {
            margin-bottom: 6px;
            padding: 4px 0;
          }
          
          .feature-icon-modern {
            width: 18px;
            height: 18px;
            margin-right: 6px;
          }
          
          .feature-modern span {
            font-size: 0.7rem;
          }
          
          .cta-title-modern {
            font-size: 1.5rem;
          }
          
          .cta-desc-modern {
            font-size: 0.8rem;
          }
          
          .services-cta-modern {
            padding: 30px 15px;
          }
        }
        
        /* Grid Responsive Adjustments */
        @media (max-width: 991px) {
          .row .col-lg-4 {
            margin-bottom: 30px;
          }
        }
        
        @media (max-width: 767px) {
          .row .col-md-6 {
            margin-bottom: 25px;
          }
        }
        
        /* Container Responsive */
        @media (max-width: 576px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
        }

        /* Blog Section Styles */
        .blog-section {
          background: var(--clr-common-black);
          position: relative;
        }

        .blog-card-modern {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
          position: relative;
          transition: all 0.4s ease;
          height: 100%;
        }

        .blog-card-modern:hover {
          border-color: rgba(138, 241, 53, 0.3);
          box-shadow: 0 20px 40px rgba(138, 241, 53, 0.1);
          transform: translateY(-10px) scale(1.02);
        }

        .blog-image-modern {
          position: relative;
          overflow: hidden;
          height: 250px;
          border-radius: 20px 20px 0 0;
        }

        .blog-img-modern {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .blog-image-modern:hover .blog-img-modern {
          transform: scale(1.1);
        }

        .blog-category-modern {
          position: absolute;
          top: 20px;
          left: 20px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .blog-content-modern {
          padding: 30px;
          position: relative;
        }

        .blog-title-modern {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 15px;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .blog-card-modern:hover .blog-title-modern {
          color: var(--clr-theme-primary);
        }

        .blog-excerpt-modern {
          color: var(--clr-body-text);
          opacity: 0.9;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .blog-meta-modern {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 15px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .blog-date-modern,
        .blog-read-time-modern {
          display: flex;
          align-items: center;
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .blog-date-modern svg,
        .blog-read-time-modern svg {
          margin-right: 6px;
          color: var(--clr-theme-primary);
        }

        .blog-read-more-modern {
          margin-top: 15px;
        }

        .blog-read-btn-modern {
          display: inline-flex;
          align-items: center;
          color: var(--clr-theme-primary);
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 10px 0;
        }

        .blog-read-btn-modern:hover {
          color: var(--clr-color-skyBlue);
          transform: translateX(5px);
        }

        .blog-cta-modern {
          margin-top: 60px;
        }

        /* Blog Responsive Design */
        @media (max-width: 768px) {
          .blog-card-modern {
            margin-bottom: 30px;
          }
          
          .blog-content-modern {
            padding: 25px 20px;
          }
          
          .blog-title-modern {
            font-size: 1.2rem;
          }
          
          .blog-image-modern {
            height: 220px;
          }
        }

        @media (max-width: 576px) {
          .blog-image-modern {
            height: 200px;
          }
          
          .blog-content-modern {
            padding: 20px 15px;
          }
          
          .blog-title-modern {
            font-size: 1.1rem;
          }
          
          .blog-excerpt-modern {
            font-size: 0.85rem;
          }
          
          .blog-meta-modern {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

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
            padding-bottom: 60px !important; /* Reduced padding */
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

        /* Portfolio Section Styles */
        .portfolio-section {
          background: var(--clr-bg-2);
          position: relative;
        }

        .portfolio-filter-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 12px 24px;
          background: transparent;
          border: 2px solid var(--clr-primary);
          color: var(--clr-primary);
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--clr-primary);
          color: var(--clr-bg-1);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(163, 235, 23, 0.3);
        }

        .portfolio-card {
          background: var(--clr-bg-1);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .portfolio-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .portfolio-img-wrapper {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .portfolio-card:hover .portfolio-img {
          transform: scale(1.1);
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(163, 235, 23, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-content {
          text-align: center;
          color: white;
          padding: 20px;
        }

        .portfolio-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: white;
        }

        .portfolio-content p {
          font-size: 1rem;
          margin-bottom: 20px;
          opacity: 0.9;
        }

        .play-btn {
          width: 60px;
          height: 60px;
          background: var(--clr-bg-1);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--clr-primary);
          font-size: 1.2rem;
        }

        .play-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        /* Video Modal Styles */
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .video-modal-content {
          background: var(--clr-bg-1);
          border-radius: 15px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
        }

        .video-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .video-modal-close:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: scale(1.1);
        }

        .video-modal-header {
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .video-modal-header h3 {
          color: var(--clr-primary);
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .video-modal-body {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
        }

        .video-modal-body iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 768px) {
          .portfolio-filter-buttons {
            gap: 10px;
          }
          
          .filter-btn {
            padding: 10px 20px;
            font-size: 0.8rem;
          }
          
          .video-modal-content {
            margin: 10px;
            max-height: 80vh;
          }
          
          .portfolio-img-wrapper {
            height: 200px;
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
                          COMPREHENSIVE <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >DIGITAL SOLUTIONS</motion.span> FOR YOUR BUSINESS
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
                          From brand strategy to IT solutions, we provide end-to-end digital services that transform your business.
                          Our comprehensive approach covers everything from brand architecture and marketing to website development,
                          content creation, and traditional media production.
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
                            src="https://i.ibb.co/wrsLLJ1t/358-3589403-digital-marketing-services-icon-png-download-digital-service-removebg-preview.png"
                            alt="Digital Services Hero"
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
              <section id="services" className="services-modern-section pt-95 pb-70">
                <div className="container">
                  {/* Section Header */}
                  <div className="row justify-content-center mb-60">
                    <div className="col-xl-8 col-lg-10">
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <motion.span 
                          className="zq_section-subtitle mb-20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          Our Services
                        </motion.span>
                        <motion.h2 
                          className="zq_section-title mb-30"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          Complete Digital Solutions
                        </motion.h2>
                        <motion.p 
                          className="services-intro-text"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          From brand strategy to IT solutions, we provide comprehensive digital services that transform your business.
                          Our integrated approach covers brand architecture, marketing, development, content creation, and traditional media.
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Services Grid - Modern Cards */}
                  <div className="row">
                    {servicesData.map((service, index) => {
                      const IconComponent = service.icon;
                      
                      return (
                        <div key={service.id} className="col-lg-4 col-md-6 mb-40">
                          <motion.div 
                            className="service-card-modern"
                            initial={{ opacity: 0, y: 60, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.8, 
                              delay: index * 0.2,
                              type: "spring",
                              stiffness: 80
                            }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              y: -15, 
                              scale: 1.03,
                              transition: { duration: 0.4, ease: "easeOut" }
                            }}
                          >
                            {/* Service Image */}
                            <motion.div 
                              className="service-image-modern"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={250}
                                className="service-img-modern"
                              />
                              
                              {/* Gradient Overlay */}
                              <motion.div 
                                className="service-overlay-modern"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                              >
                                <motion.div 
                                  className="service-icon-modern"
                                  initial={{ scale: 0, rotate: -180 }}
                                  whileHover={{ scale: 1, rotate: 0 }}
                                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                                >
                                  <IconComponent size={32} />
                                </motion.div>
                              </motion.div>
                            </motion.div>

                            {/* Service Content */}
                            <motion.div 
                              className="service-content-modern"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.7 }}
                              viewport={{ once: true }}
                            >
                              <motion.h4 
                                className="service-title-modern"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true }}
                              >
                                {service.title}
                              </motion.h4>
                              
                              <motion.p 
                                className="service-desc-modern"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                viewport={{ once: true }}
                              >
                                {service.description}
                              </motion.p>
                              
                              {/* Features List */}
                              <motion.div 
                                className="service-features-modern"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                viewport={{ once: true }}
                              >
                                {service.features.slice(0, 3).map((feature, featureIndex) => (
                                  <motion.div 
                                    key={featureIndex} 
                                    className="feature-modern"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                      duration: 0.4, 
                                      delay: 1.1 + (featureIndex * 0.1)
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 8, scale: 1.05 }}
                                  >
                                    <motion.div
                                      className="feature-icon-modern"
                                      whileHover={{ scale: 1.3, rotate: 10 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <CheckCircle size={16} />
                                    </motion.div>
                                    <span>{feature}</span>
                                  </motion.div>
                                ))}
                              </motion.div>

                            </motion.div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom CTA */}
                  <motion.div 
                    className="services-cta-modern text-center mt-80"
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="cta-content-modern"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.h3 
                        className="cta-title-modern"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        Need Something Custom?
                      </motion.h3>
                      <motion.p 
                        className="cta-desc-modern"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        We love tackling unique challenges and creating bespoke solutions.
                      </motion.p>
                      <motion.div
                        className="cta-button-modern"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href="#contact" className="zq_theme-btn">
                          Let's Discuss Your Project
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight size={18} className="ml-2" />
                          </motion.div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </section>





              {/* Portfolio Section with Video Filter */}
              <section id="portfolio" className="portfolio-section pt-95 pb-70">
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
                        <span className="zq_section-subtitle mb-20">Our Portfolio</span>
                        <h2 className="zq_section-title mb-30">Creative Video Showcase</h2>
                        <p className="portfolio-intro-text">
                          Explore our latest video productions and creative work. From brand storytelling to visual effects,
                          we create compelling content that engages and inspires.
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Filter Buttons */}
                  <div className="row justify-content-center mb-50">
                    <div className="col-lg-8">
                      <motion.div 
                        className="portfolio-filter-buttons text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <button 
                          className="filter-btn active" 
                          data-filter="all"
                          onClick={(e) => handleFilterClick(e, 'all')}
                        >
                          All Work
                        </button>
                        <button 
                          className="filter-btn" 
                          data-filter="video"
                          onClick={(e) => handleFilterClick(e, 'video')}
                        >
                          Videos
                        </button>
                        <button 
                          className="filter-btn" 
                          data-filter="brand"
                          onClick={(e) => handleFilterClick(e, 'brand')}
                        >
                          Brand Content
                        </button>
                        <button 
                          className="filter-btn" 
                          data-filter="creative"
                          onClick={(e) => handleFilterClick(e, 'creative')}
                        >
                          Creative
                        </button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Portfolio Grid */}
                  <div className="row portfolio-grid">
                    {/* Video 1 */}
                    <div className="col-lg-6 col-md-6 mb-30 portfolio-item" data-category="video brand">
                      <motion.div 
                        className="portfolio-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                      >
                        <div className="portfolio-img-wrapper">
                          <img 
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                            alt="Pitamaas Lab Showcase" 
                            className="portfolio-img"
                          />
                          <div className="portfolio-overlay">
                            <div className="portfolio-content">
                              <h3>Pitamaas Lab Showcase</h3>
                              <p>Creative video production showcasing our capabilities</p>
                              <button 
                                className="play-btn"
                                onClick={() => openVideoModal('https://www.youtube.com/embed/YOJO5pBfEoU', 'Pitamaas Lab Showcase')}
                              >
                                <i className="fas fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Video 2 */}
                    <div className="col-lg-6 col-md-6 mb-30 portfolio-item" data-category="video creative">
                      <motion.div 
                        className="portfolio-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                      >
                        <div className="portfolio-img-wrapper">
                          <img 
                            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                            alt="Creative Production" 
                            className="portfolio-img"
                          />
                          <div className="portfolio-overlay">
                            <div className="portfolio-content">
                              <h3>Creative Production</h3>
                              <p>Professional video production and editing</p>
                              <button 
                                className="play-btn"
                                onClick={() => openVideoModal('https://www.youtube.com/embed/ijmz-KSFd-w', 'Creative Production')}
                              >
                                <i className="fas fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Video 3 */}
                    <div className="col-lg-6 col-md-6 mb-30 portfolio-item" data-category="video creative">
                      <motion.div 
                        className="portfolio-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                      >
                        <div className="portfolio-img-wrapper">
                          <img 
                            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                            alt="Visual Storytelling" 
                            className="portfolio-img"
                          />
                          <div className="portfolio-overlay">
                            <div className="portfolio-content">
                              <h3>Visual Storytelling</h3>
                              <p>Compelling visual narratives that engage audiences</p>
                              <button 
                                className="play-btn"
                                onClick={() => openVideoModal('https://www.youtube.com/embed/rwrFoXBCKCU', 'Visual Storytelling')}
                              >
                                <i className="fas fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Video 4 */}
                    <div className="col-lg-6 col-md-6 mb-30 portfolio-item" data-category="video brand">
                      <motion.div 
                        className="portfolio-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                      >
                        <div className="portfolio-img-wrapper">
                          <img 
                            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                            alt="Brand Video" 
                            className="portfolio-img"
                          />
                          <div className="portfolio-overlay">
                            <div className="portfolio-content">
                              <h3>Brand Video</h3>
                              <p>Professional brand storytelling and marketing content</p>
                              <button 
                                className="play-btn"
                                onClick={() => openVideoModal('https://www.youtube.com/embed/PtwE9osboJM', 'Brand Video')}
                              >
                                <i className="fas fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
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
                      Ready to Transform Your Business? <br />Let's Build Your Complete Digital Ecosystem!
                    </h2>
                    <div className="zq_cta-action">
                      <Image src="/placeholder.svg" alt="Call" width={60} height={60} />
                      <div className="zq_cta-action-info">
                        <span>Get in Touch</span>
                        <a href="tel:+704-555-0127">+91 70877-24552</a>
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

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="video-modal-header">
              <h3>{currentVideo.title}</h3>
            </div>
            <div className="video-modal-body">
              <iframe
                src={currentVideo.src}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Latest from our blog Section */}
      <section className="blog-section pt-95 pb-70">
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
                <motion.span 
                  className="zq_section-subtitle mb-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Latest from our blog
                </motion.span>
                <motion.h2 
                  className="zq_section-title mb-30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Insights & Updates
                </motion.h2>
                <motion.p 
                  className="blog-intro-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Stay updated with the latest trends, insights, and tips from our team of experts.
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="row">
            {[
              {
                id: 1,
                title: "The Future of Digital Marketing in 2024",
                excerpt: "Explore the emerging trends and technologies that will shape digital marketing in the coming year.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Digital Marketing",
                date: "Dec 15, 2024",
                readTime: "5 min read"
              },
              {
                id: 2,
                title: "Brand Identity Design: Creating Memorable Logos",
                excerpt: "Learn the essential principles of logo design and how to create a brand identity that resonates with your audience.",
                image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Design",
                date: "Dec 12, 2024",
                readTime: "7 min read"
              },
              {
                id: 3,
                title: "Web Development Best Practices for 2024",
                excerpt: "Discover the latest web development techniques and best practices for building modern, responsive websites.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Development",
                date: "Dec 10, 2024",
                readTime: "6 min read"
              }
            ].map((post, index) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-40">
                <motion.article 
                  className="blog-card-modern"
                  initial={{ opacity: 0, y: 60, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 80
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  {/* Blog Image */}
                  <motion.div 
                    className="blog-image-modern"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="blog-img-modern"
                    />
                    
                    {/* Category Badge */}
                    <motion.div 
                      className="blog-category-modern"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {post.category}
                    </motion.div>
                  </motion.div>

                  {/* Blog Content */}
                  <motion.div 
                    className="blog-content-modern"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.h4 
                      className="blog-title-modern"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      {post.title}
                    </motion.h4>
                    
                    <motion.p 
                      className="blog-excerpt-modern"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      {post.excerpt}
                    </motion.p>
                    
                    {/* Blog Meta */}
                    <motion.div 
                      className="blog-meta-modern"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <div className="blog-date-modern">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="blog-read-time-modern">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </motion.div>

                    {/* Read More Button */}
                    <motion.div
                      className="blog-read-more-modern"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="#" className="blog-read-btn-modern">
                        Read More
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.article>
              </div>
            ))}
          </div>

          {/* View All Blog Posts Button */}
          <motion.div 
            className="blog-cta-modern text-center mt-60"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#" className="zq_theme-btn">
                View All Blog Posts
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={18} className="ml-2" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  )
}

