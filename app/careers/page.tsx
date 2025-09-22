"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AboutHeader } from "@/components/about-header"
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Clock, 
  Users, 
  Award, 
  Heart, 
  Coffee, 
  Laptop, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Send,
  CheckCircle,
  Star,
  Briefcase,
  GraduationCap,
  Target,
  Lightbulb,
  Rocket,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Github
} from 'lucide-react'
import '../../styles/globals.css'
import '../../styles/bootstrap.min.css'
import '../../styles/nice-select.css'
import '../../styles/meanmenu.css'
import '../../styles/swiper-bundle.min.css'
import '../../styles/animate.min.css'
import '../../styles/magnific-popup.css'
import '../../styles/main.css'

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Graphic Designer",
      location: "Ludhiana",
      type: "Full-time",
      experience: "2+ Years",
      skills: ["Photoshop", "Corel Draw", "Illustrator", "InDesign"],
      description: "We're looking for a creative Graphic Designer to join our team. You'll be responsible for creating stunning visual designs for our clients across various industries.",
      responsibilities: [
        "Create compelling visual designs for marketing materials",
        "Develop brand identities and style guides",
        "Collaborate with clients to understand their vision",
        "Work on multiple projects simultaneously",
        "Stay updated with design trends and tools"
      ],
      requirements: [
        "Minimum 2 years of experience in graphic design",
        "Proficiency in Photoshop and Corel Draw",
        "Strong portfolio showcasing creative work",
        "Excellent communication skills",
        "Ability to work under tight deadlines"
      ],
      benefits: ["Competitive salary", "Health insurance", "Flexible working hours", "Professional development"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      experience: "3+ Years",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description: "Join our development team as a Frontend Developer and help us build amazing web experiences for our clients.",
      responsibilities: [
        "Develop responsive web applications using React/Next.js",
        "Implement modern UI/UX designs",
        "Optimize applications for performance",
        "Collaborate with backend developers",
        "Write clean, maintainable code"
      ],
      requirements: [
        "3+ years of frontend development experience",
        "Strong knowledge of React and Next.js",
        "Experience with TypeScript",
        "Proficiency in CSS frameworks like Tailwind",
        "Understanding of web performance optimization"
      ],
      benefits: ["Remote work", "Competitive salary", "Learning budget", "Flexible schedule"]
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      location: "New Delhi",
      type: "Full-time",
      experience: "2+ Years",
      skills: ["SEO", "Social Media", "Google Ads", "Analytics"],
      description: "We need a Digital Marketing Specialist to drive our clients' online presence and growth strategies.",
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Manage social media accounts and content",
        "Optimize websites for SEO",
        "Run paid advertising campaigns",
        "Analyze campaign performance and ROI"
      ],
      requirements: [
        "2+ years of digital marketing experience",
        "Knowledge of SEO best practices",
        "Experience with social media marketing",
        "Proficiency in Google Ads and Analytics",
        "Strong analytical skills"
      ],
      benefits: ["Performance bonuses", "Health insurance", "Team outings", "Career growth"]
    },
    {
      id: 4,
      title: "UI/UX Designer",
      location: "Mumbai",
      type: "Full-time",
      experience: "3+ Years",
      skills: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
      description: "Create intuitive and beautiful user experiences that delight our clients and their customers.",
      responsibilities: [
        "Design user interfaces for web and mobile apps",
        "Conduct user research and usability testing",
        "Create wireframes and prototypes",
        "Collaborate with developers and stakeholders",
        "Maintain design systems and style guides"
      ],
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio of design work",
        "Understanding of user-centered design principles",
        "Experience with prototyping tools"
      ],
      benefits: ["Design tools budget", "Health insurance", "Flexible hours", "Creative freedom"]
    },
    {
      id: 5,
      title: "Content Writer",
      location: "Remote",
      type: "Part-time",
      experience: "1+ Years",
      skills: ["Copywriting", "SEO Writing", "Blog Writing", "Social Media"],
      description: "Join our content team and help create compelling stories that engage and convert our clients' audiences.",
      responsibilities: [
        "Write engaging blog posts and articles",
        "Create social media content",
        "Develop marketing copy for campaigns",
        "Optimize content for SEO",
        "Collaborate with design and marketing teams"
      ],
      requirements: [
        "1+ years of content writing experience",
        "Excellent writing and grammar skills",
        "Understanding of SEO principles",
        "Experience with content management systems",
        "Ability to adapt writing style to different brands"
      ],
      benefits: ["Flexible schedule", "Remote work", "Creative projects", "Skill development"]
    },
    {
      id: 6,
      title: "Project Manager",
      location: "Bangalore",
      type: "Full-time",
      experience: "4+ Years",
      skills: ["Agile", "Scrum", "Team Management", "Client Relations"],
      description: "Lead our projects from conception to completion, ensuring timely delivery and client satisfaction.",
      responsibilities: [
        "Manage multiple client projects simultaneously",
        "Coordinate between design, development, and marketing teams",
        "Maintain client relationships and communication",
        "Track project progress and budgets",
        "Ensure quality deliverables on time"
      ],
      requirements: [
        "4+ years of project management experience",
        "Experience in digital agency environment",
        "Strong leadership and communication skills",
        "Knowledge of Agile/Scrum methodologies",
        "Client-facing experience"
      ],
      benefits: ["Leadership role", "Competitive salary", "Health insurance", "Team building events"]
    }
  ];

  const companyBenefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote work options and flexible working hours"
    },
    {
      icon: Laptop,
      title: "Latest Tools",
      description: "Access to the latest software and hardware"
    },
    {
      icon: Zap,
      title: "Fast Growth",
      description: "Rapid career advancement opportunities"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on projects that reach millions worldwide"
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Stable company with strong growth trajectory"
    }
  ];

  const teamStats = [
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries" },
    { number: "200+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We\'ll get back to you soon.');
  };

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

        /* Careers Page Styles */
        .careers-hero {
          background: linear-gradient(135deg, var(--clr-common-black) 0%, var(--clr-common-lightBlack) 100%);
          position: relative;
          overflow: hidden;
        }

        .careers-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(138, 241, 53, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(161, 238, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .job-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 30px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .job-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(138, 241, 53, 0.05), rgba(161, 238, 255, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .job-card:hover::before {
          opacity: 1;
        }

        .job-card:hover {
          transform: translateY(-5px);
          border-color: var(--clr-theme-primary);
          box-shadow: 0 15px 35px rgba(138, 241, 53, 0.1);
        }

        .job-card.selected {
          border-color: var(--clr-theme-primary);
          background: rgba(138, 241, 53, 0.05);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .job-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 8px;
        }

        .job-meta {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .job-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 14px;
        }

        .job-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .skill-tag {
          background: rgba(138, 241, 53, 0.1);
          color: var(--clr-theme-primary);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .job-type-badge {
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: var(--clr-common-black);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          border-color: var(--clr-theme-primary);
          box-shadow: 0 15px 35px rgba(138, 241, 53, 0.1);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-common-black);
          margin: 0 auto 20px auto;
          transition: all 0.3s ease;
        }

        .benefit-card:hover .benefit-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .stats-item {
          text-align: center;
          padding: 20px;
        }

        .stats-number {
          font-size: 3rem;
          font-weight: 800;
          color: var(--clr-theme-primary);
          line-height: 1;
          margin-bottom: 10px;
        }

        .stats-label {
          color: var(--clr-body-text);
          opacity: 0.8;
          font-size: 1rem;
          font-weight: 500;
        }

        .application-form {
          background: var(--clr-common-black);
          border-radius: 20px;
          padding: 40px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-label {
          display: block;
          color: var(--clr-body-text);
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: var(--clr-body-text);
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--clr-theme-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-file {
          padding: 8px 12px;
        }

        .submit-btn {
          background: linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue));
          color: var(--clr-common-black);
          padding: 14px 30px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(138, 241, 53, 0.4);
        }

        .job-details {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 30px;
          margin-top: 30px;
        }

        .details-section {
          margin-bottom: 25px;
        }

        .details-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--clr-body-heading);
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .details-list {
          list-style: none;
          padding: 0;
        }

        .details-list li {
          color: var(--clr-body-text);
          opacity: 0.9;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .details-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--clr-theme-primary);
          font-weight: bold;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .job-header {
            flex-direction: column;
            gap: 15px;
          }

          .job-meta {
            gap: 10px;
          }

          .application-form {
            padding: 30px 20px;
          }

          .stats-number {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="has-smooth" id="has_smooth">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper">
              {/* Hero Section */}
              <section className="careers-hero zq_hero-area">
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
<motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          ></motion.span> We're Looking For???
                        </motion.h1>
                        
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
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
                            alt="Careers Hero"
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

              {/* Stats Section */}
              <section className="zq_stats-area pt-95 pb-70">
                <div className="container">
                  <div className="row">
                    {teamStats.map((stat, index) => (
                      <div key={index} className="col-lg-3 col-md-6">
                        <motion.div 
                          className="stats-item"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="stats-number">{stat.number}</div>
                          <p className="stats-label">{stat.label}</p>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Current Openings */}
              <section id="openings" className="zq_service-area pt-95 pb-70">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                      <motion.div 
                        className="zq_section-area text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <span className="zq_section-subtitle mb-20">Current Openings</span>
                        <h2 className="zq_section-title mb-40">Join Our Amazing Team</h2>
                        <p className="services-intro-text">
                          We're always looking for talented individuals who can help us create exceptional digital experiences.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  <div className="row">
                    {jobOpenings.map((job, index) => (
                      <div key={job.id} className="col-lg-6 mb-30">
                        <motion.div 
                          className={`job-card ${selectedJob === job.id ? 'selected' : ''}`}
                          initial={{ opacity: 0, y: 50, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 100
                          }}
                          viewport={{ once: true }}
                          onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                          whileHover={{ 
                            y: -8, 
                            scale: 1.02,
                            transition: { duration: 0.3 }
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div 
                            className="job-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <div>
                              <motion.h3 
                                className="job-title"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                viewport={{ once: true }}
                              >
                                {job.title}
                              </motion.h3>
                              <motion.div 
                                className="job-meta"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{ once: true }}
                              >
                                <motion.div 
                                  className="job-meta-item"
                                  whileHover={{ scale: 1.05, x: 5 }}
                                >
                                  <MapPin size={14} />
                                  <span>{job.location}</span>
                                </motion.div>
                                <motion.div 
                                  className="job-meta-item"
                                  whileHover={{ scale: 1.05, x: 5 }}
                                >
                                  <Clock size={14} />
                                  <span>{job.experience}</span>
                                </motion.div>
                                <motion.div 
                                  className="job-meta-item"
                                  whileHover={{ scale: 1.05, x: 5 }}
                                >
                                  <Briefcase size={14} />
                                  <span>{job.type}</span>
                                </motion.div>
                              </motion.div>
                            </div>
                            <motion.div 
                              className="job-type-badge"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.5 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              {job.type}
                            </motion.div>
                          </motion.div>
                          <motion.p 
                            className="job-description"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            viewport={{ once: true }}
                          >
                            {job.description}
                          </motion.p>
                          <motion.div 
                            className="job-skills"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                            viewport={{ once: true }}
                          >
                            {job.skills.map((skill, skillIndex) => (
                              <motion.span 
                                key={skillIndex} 
                                className="skill-tag"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                  duration: 0.3, 
                                  delay: 0.8 + (skillIndex * 0.1)
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </motion.div>
                          
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Job Details */}
              <AnimatePresence>
                {selectedJob && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <section className="pb-70">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-lg-8">
                            {(() => {
                              const job = jobOpenings.find(j => j.id === selectedJob);
                              if (!job) return null;
                              
                              return (
                                <div className="job-details">
                                  <div className="details-section">
                                    <h3 className="details-title">
                                      <Target size={20} />
                                      Responsibilities
                                    </h3>
                                    <ul className="details-list">
                                      {job.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="details-section">
                                    <h3 className="details-title">
                                      <GraduationCap size={20} />
                                      Requirements
                                    </h3>
                                    <ul className="details-list">
                                      {job.requirements.map((requirement, index) => (
                                        <li key={index}>{requirement}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="details-section">
                                    <h3 className="details-title">
                                      <Award size={20} />
                                      Benefits
                                    </h3>
                                    <ul className="details-list">
                                      {job.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="text-center mt-40">
                                    <button 
                                      className="zq_theme-btn"
                                      onClick={() => {
                                        setFormData(prev => ({ ...prev, position: job.title }));
                                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                                      }}
                                    >
                                      Apply for this Position
                                      <Send size={16} className="ml-2" />
                                    </button>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    </section>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Company Culture & Benefits */}
              <section id="culture" className="zq_choose-area pt-95 pb-70">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                      <motion.div 
                        className="zq_section-area text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <span className="zq_section-subtitle mb-20">Why Work With Us</span>
                        <h2 className="zq_section-title mb-40">Our Culture & Benefits</h2>
                        <p className="services-intro-text">
                          We believe in creating an environment where our team can thrive, grow, and do their best work.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  <div className="row">
                    {companyBenefits.map((benefit, index) => {
                      const IconComponent = benefit.icon;
                      
                      return (
                        <div key={index} className="col-lg-4 col-md-6 mb-30">
                          <motion.div 
                            className="benefit-card"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.15,
                              type: "spring",
                              stiffness: 100
                            }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              y: -10, 
                              scale: 1.02,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <motion.div 
                              className="benefit-icon"
                              whileHover={{ 
                                scale: 1.1, 
                                rotate: 5,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <IconComponent size={24} />
                            </motion.div>
                            <motion.h4 
                              className="benefit-title"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                              viewport={{ once: true }}
                            >
                              {benefit.title}
                            </motion.h4>
                            <motion.p 
                              className="benefit-description"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                              viewport={{ once: true }}
                            >
                              {benefit.description}
                            </motion.p>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Application Form */}
              <section id="application-form" className="zq_testimonial-area pt-95 pb-70">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                      <motion.div 
                        className="application-form"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-center mb-40">
                          <h2 className="zq_section-title mb-20">Apply Now</h2>
                          <p className="services-intro-text">
                            Ready to join our team? Fill out the application form below and we'll get back to you soon.
                          </p>
                        </div>
                        
                        <form onSubmit={handleSubmit}>
                          <div className="row g-20">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Full Name *</label>
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className="form-input"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Email Address *</label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className="form-input"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className="form-input"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Position Applied For *</label>
                                <select
                                  name="position"
                                  value={formData.position}
                                  onChange={handleInputChange}
                                  className="form-input"
                                  required
                                >
                                  <option value="">Select Position</option>
                                  {jobOpenings.map((job) => (
                                    <option key={job.id} value={job.title}>{job.title}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Years of Experience *</label>
                                <select
                                  name="experience"
                                  value={formData.experience}
                                  onChange={handleInputChange}
                                  className="form-input"
                                  required
                                >
                                  <option value="">Select Experience</option>
                                  <option value="0-1">0-1 Years</option>
                                  <option value="1-2">1-2 Years</option>
                                  <option value="2-3">2-3 Years</option>
                                  <option value="3-5">3-5 Years</option>
                                  <option value="5+">5+ Years</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="form-label">Portfolio/Website URL</label>
                                <input
                                  type="url"
                                  name="portfolio"
                                  value={formData.portfolio}
                                  onChange={handleInputChange}
                                  className="form-input"
                                  placeholder="https://yourportfolio.com"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Cover Letter</label>
                                <textarea
                                  name="coverLetter"
                                  value={formData.coverLetter}
                                  onChange={handleInputChange}
                                  className="form-input form-textarea"
                                  placeholder="Tell us why you'd like to join our team..."
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Resume/CV *</label>
                                <input
                                  type="file"
                                  name="resume"
                                  onChange={handleFileChange}
                                  className="form-input form-file"
                                  accept=".pdf,.doc,.docx"
                                  required
                                />
                                <small className="text-muted">Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
                              </div>
                            </div>
                            <div className="col-12 text-center">
                              <button type="submit" className="submit-btn">
                                <Send size={18} />
                                Submit Application
                              </button>
                            </div>
                          </div>
                        </form>
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
                      Don't See Your Dream Job? <br />We'd Love to Hear From You!
                    </h2>
                    <div className="zq_cta-action">
                      <Image src="/placeholder.svg" alt="Call" width={60} height={60} />
                      <div className="zq_cta-action-info">
                        <span>Get in Touch</span>
                        <a href="mailto:careers@pitamaas.com">careers@pitamaas.com</a>
                      </div>
                    </div>
                    <div className="zq_cta-buttons">
                      <a href="mailto:careers@pitamaas.com" className="zq_theme-btn">Send Us Your Resume</a>
                      <a href="/about" className="zq_theme-btn zq_theme-btn-outline">Learn About Us</a>
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
                    <li><Link href="/careers">Careers</Link></li>
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
                <Link href="/"><Image src="https://www.pitamaas.com/logo-dark-mobile.png" alt="Pitamaas" width={120} height={40} /></Link>
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
