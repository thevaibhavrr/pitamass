
'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { AboutHeader } from "@/components/about-header";
import { Footer } from "@/components/footer";
import '../../styles/globals.css';
import '../../styles/bootstrap.min.css';
import '../../styles/nice-select.css';
import '../../styles/meanmenu.css';
import '../../styles/swiper-bundle.min.css';
import '../../styles/animate.min.css';
import '../../styles/magnific-popup.css';
import '../../styles/main.css';

const ProductDetails: NextPage = () => {
  useEffect(() => {
    // Any client-side scripts if needed, but for this page, perhaps none
    window.addEventListener('scroll', () => {
      // Simple scroll effect if needed
    });
  }, []);

  return (
    <>
      <AboutHeader showIcon={false} />
      <Head>
        <title>Product Details | Pitamaas Lab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --primary: #8AF135;
            --secondary: #2A4741;
            --dark: #000;
            --light: #fff;
            --background: var(--secondary);
            --text: var(--light);
            --card-bg: rgba(42, 71, 65, 0.8);
            --gradient: linear-gradient(135deg, rgba(138, 241, 53, 0.1) 0%, rgba(42, 71, 65, 0.9) 100%);
          }

          body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--background);
            color: var(--text);
            overflow-x: hidden;
            line-height: 1.6;
          }

          h1, h2, h3, h4 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
          }

          .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
          }

          .btn {
            display: inline-block;
            padding: 12px 30px;
            background: var(--primary);
            color: var(--secondary);
            text-decoration: none;
            font-weight: 600;
            border-radius: 30px;
            transition: all 0.3s ease;
            border: 2px solid var(--primary);
          }

          .btn:hover {
            background: transparent;
            color: var(--primary);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px var(--primary);
          }

          .product-hero {
            height: 60vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            background: var(--gradient);
          }

          .product-hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background: url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
            opacity: 0.5;
          }

          .product-content {
            max-width: 800px;
          }

          .product-content h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            color: var(--primary);
          }

          .product-content p {
            font-size: 1.2rem;
            margin-bottom: 30px;
          }

          .product-details {
            padding: 80px 0;
            background: var(--background);
          }

          .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .product-image {
            border-radius: 10px;
            overflow: hidden;
          }

          .product-image img {
            width: 100%;
            display: block;
          }

          .product-info h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--primary);
          }

          .price {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 20px;
          }

          .features {
            list-style: none;
            margin-bottom: 30px;
          }

          .features li {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
          }

          .features i {
            color: var(--primary);
            margin-right: 10px;
          }

          .product-description {
            padding: 80px 0;
            background: var(--card-bg);
          }

          .product-process {
            padding: 80px 0;
            background: var(--background);
          }

          .process-steps {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .process-step {
            width: 30%;
            text-align: center;
            margin-bottom: 30px;
          }

          .step-number {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 10px;
          }

          .product-why-choose {
            padding: 80px 0;
            background: var(--card-bg);
          }

          .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }

          .why-item {
            text-align: center;
          }

          .why-item i {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 20px;
          }

          .product-case-studies {
            padding: 80px 0;
            background: var(--background);
          }

          .case-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }

          .case-card {
            background: var(--card-bg);
            border-radius: 10px;
            padding: 20px;
          }

          .case-card img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .product-testimonials {
            padding: 80px 0;
            background: var(--card-bg);
          }

          .testimonial-card {
            background: var(--background);
            border-radius: 10px;
            padding: 30px;
            margin-bottom: 30px;
          }

          .testimonial-text {
            font-style: italic;
            margin-bottom: 20px;
          }

          .testimonial-author {
            font-weight: bold;
            color: var(--primary);
          }

          .product-faq {
            padding: 80px 0;
            background: var(--background);
          }

          .faq-item {
            margin-bottom: 20px;
          }

          .faq-question {
            cursor: pointer;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .faq-answer {
            display: none;
          }

          .faq-item.active .faq-answer {
            display: block;
          }

          .product-related {
            padding: 80px 0;
            background: var(--card-bg);
          }

          .related-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }

          .related-card {
            background: var(--background);
            border-radius: 10px;
            padding: 20px;
            text-align: center;
          }

          .related-card img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          @media (max-width: 768px) {
            .details-grid {
              grid-template-columns: 1fr;
            }

            .product-content h1 {
              font-size: 2rem;
            }

            .process-step {
              width: 100%;
            }

            .why-grid, .case-grid, .related-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <section className="product-hero">
          <div className="product-hero-bg"></div>
          <div className="container product-content">
            <h1>Video Production Service</h1>
            <p>Professional video production tailored to your needs, from concept to final delivery.</p>
            <a href="#contact" className="btn">Get a Quote</a>
          </div>
        </section>

        <section className="product-details">
          <div className="container">
            <div className="details-grid">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Video Production" />
              </div>
              <div className="product-info">
                <h2>Video Production</h2>
                <p>Create stunning videos that captivate your audience and tell your story effectively.</p>
                <ul className="features">
                  <li><i className="fas fa-check"></i>Full HD/4K Resolution</li>
                  <li><i className="fas fa-check"></i>Professional Editing</li>
                  <li><i className="fas fa-check"></i>Custom Sound Design</li>
                  <li><i className="fas fa-check"></i>Motion Graphics</li>
                  <li><i className="fas fa-check"></i>Unlimited Revisions</li>
                </ul>
                <a href="#contact" className="btn">Book Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="product-description">
          <div className="container">
            <h2>Detailed Description</h2>
            <p>Our video production service includes everything from pre-production planning to post-production polishing. We work closely with you to understand your vision and deliver a product that exceeds expectations.</p>
            <p>Whether it's a corporate video, music video, or promotional content, our team of experts uses state-of-the-art equipment and creative techniques to bring your ideas to life.</p>
          </div>
        </section>



        <section className="product-case-studies">
          <div className="container">
            <h2>Case Studies</h2>
            <div className="case-grid">
              <div className="case-card">
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800" alt="Case Study 1" />
                <h3>Music Video for Artist X</h3>
                <p>Increased views by 200% on YouTube.</p>
              </div>
              <div className="case-card">
                <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800" alt="Case Study 2" />
                <h3>Corporate Promo for Company Y</h3>
                <p>Boosted sales by 150% after launch.</p>
              </div>
              <div className="case-card">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800" alt="Case Study 3" />
                <h3>Event Coverage for Festival Z</h3>
                <p>Reached 1M+ impressions on social media.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default ProductDetails;