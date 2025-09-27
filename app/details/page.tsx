'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { AboutHeader } from "@/components/about-header";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";
import '../../styles/globals.css';
import '../../styles/bootstrap.min.css';
import '../../styles/nice-select.css';
import '../../styles/meanmenu.css';
import '../../styles/swiper-bundle.min.css';
import '../../styles/animate.min.css';
import '../../styles/magnific-popup.css';
import '../../styles/main.css';

// Sample projects for the bottom grid
const sampleProjects = [
  { id: 1, title: "Phantom Reference", categories: ["Agency", "Grid"], imgSrc: "https://www.pitamaas.com/ludh.jpg" },
  { id: 2, title: "Travel Hacker", categories: ["Campaign", "Product"], imgSrc: "https://www.pitamaas.com/Home/packaging.jpg" },
  { id: 3, title: "Motion Lab", categories: ["3D", "R&D"], imgSrc: "https://www.pitamaas.com/Home/digital.jpg" },
  { id: 4, title: "Retail OS", categories: ["Platform", "Case Study"], imgSrc: "https://www.pitamaas.com/Home/product-photography.jpg" },
  { id: 5, title: "Neural Keys", categories: ["Brand", "Industrial"], imgSrc: "https://www.pitamaas.com/Home/website.jpg" },
  { id: 6, title: "Drifting", categories: ["Film", "Experimental"], imgSrc: "https://www.pitamaas.com/ludh.jpg" },
  { id: 7, title: "Cortex Bank", categories: ["Fintech", "App"], imgSrc: "https://www.pitamaas.com/Home/packaging.jpg" },
  { id: 8, title: "Sonic Off", categories: ["Interactive", "WebGL"], imgSrc: "https://www.pitamaas.com/digital.jpg" },
  { id: 9, title: "Midnight Drop", categories: ["E-commerce", "Launch"], imgSrc: "https://www.pitamaas.com/Home/packaging.jpg" },
  { id: 10, title: "Studio Suite", categories: ["SaaS", "Design"], imgSrc: "https://www.pitamaas.com/ludh.jpg" },
  { id: 11, title: "Sample Video", categories: ["Video", "Demo"], imgSrc: "/sam.mp4", isVideo: true },
  { id: 12, title: "Creative Works", categories: ["Design", "Brand"], imgSrc: "https://www.pitamaas.com/Home/digital.jpg" },
];

export default function DetailsPage() {
  const searchParams = useSearchParams();
  
  // Get data from URL params
  const title = searchParams.get('title') || 'Project Title';
  const categories = searchParams.get('categories')?.split(',') || ['Category'];
  const imgSrc = searchParams.get('imgSrc') || '/placeholder.svg';
  const isVideo = searchParams.get('isVideo') === 'true';

  return (
    <>
      <AboutHeader showIcon={false} />
      
      <motion.main 
        className="min-h-screen"
        style={{ backgroundColor: 'var(--clr-common-black)', color: 'var(--clr-body-text)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Image/Video */}
              <motion.div 
                className="relative"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-lg border border-gray-500 ">
                  {isVideo ? (
                    <video
                      src={imgSrc}
                      className="w-full h-auto object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <img
                      src={imgSrc}
                      alt={title}
                      className="w-full h-auto object-cover"
                    />
                  )}
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div 
                className="space-y-8"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Title and Categories */}
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4" style={{ 
                    background: 'linear-gradient(135deg, var(--clr-theme-primary), var(--clr-color-skyBlue))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {title}
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm rounded-full border"
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                          color: 'var(--clr-theme-primary)', 
                          borderColor: 'rgba(255, 255, 255, 0.2)' 
                        }}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold" style={{ color: 'var(--clr-body-heading)' }}>Project Overview</h2>
                  <p className="leading-relaxed" style={{ color: 'var(--clr-body-text)', opacity: 0.9 }}>
                    This project represents a breakthrough in creative design and technical innovation. 
                    We've combined cutting-edge technology with artistic vision to create something truly remarkable.
                  </p>
                  <p className="leading-relaxed" style={{ color: 'var(--clr-body-text)', opacity: 0.9 }}>
                    Our team worked tirelessly to ensure every detail meets the highest standards of quality and creativity. 
                    The result is a masterpiece that pushes the boundaries of what's possible.
                  </p>
                </div>


                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border" style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                    borderColor: 'rgba(255, 255, 255, 0.1)' 
                  }}>
                    <div className="text-2xl font-bold" style={{ color: 'var(--clr-theme-primary)' }}>100%</div>
                    <div className="text-sm" style={{ color: 'var(--clr-body-text)', opacity: 0.8 }}>Client Satisfaction</div>
          </div>
                  <div className="p-4 rounded-lg border" style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                    borderColor: 'rgba(255, 255, 255, 0.1)' 
                  }}>
                    <div className="text-2xl font-bold" style={{ color: 'var(--clr-color-skyBlue)' }}>24/7</div>
                    <div className="text-sm" style={{ color: 'var(--clr-body-text)', opacity: 0.8 }}>Support Available</div>
              </div>
              </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Projects Section */}
        <section className="py-16" style={{ backgroundColor: 'var(--clr-common-black)' }}>
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div 
              className="text-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--clr-body-heading)' }}>Related Images</h2>
            </motion.div>

            {/* Related Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {sampleProjects.slice(0, 10).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg border border-gray-500  group-hover:border-opacity-60 transition-all duration-300">
                    {project.isVideo ? (
                      <video
                        src={project.imgSrc}
                        className="w-full h-48 object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="w-full h-48 object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-sm font-semibold text-white mb-1">{project.title}</h3>
                      <div className="flex flex-wrap gap-1">
                        {project.categories.slice(0, 2).map((category, catIndex) => (
                          <span 
                            key={catIndex}
                            className="text-xs px-2 py-1 rounded-full"
                            style={{ 
                              backgroundColor: 'var(--clr-theme-primary)', 
                              color: 'var(--clr-common-black)',
                              fontSize: '0.75rem'
                            }}
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="py-16" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div 
              className="text-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--clr-body-heading)' }}>More Projects</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--clr-body-text)', opacity: 0.9 }}>
                Explore our collection of innovative projects that showcase creativity and technical excellence.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    categories={project.categories}
                    imgSrc={project.imgSrc}
                    isVideo={project.isVideo}
                    className="h-64 p-0"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.main>
      
      <Footer />
    </>
  );
}