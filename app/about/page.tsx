// "use client"

// import { AboutHeader } from "@/components/about-header"
// import "../../styles/bootstrap.min.css"
// import "../../styles/main.css"
// import "../../styles/meanmenu.css"

// export default function AboutPage() {
//   return (
//     <div className="about-page">
//       <AboutHeader />
      
//       {/* Main content area */}
//       <main className="main-content">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1>About Us</h1>
//               <p>This is the about page with the new header component.</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }


"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AboutHeader } from "@/components/about-header"

  //i set all css in styles folder
  import '../../styles/globals.css'
 
 import '../../styles/bootstrap.min.css'
 import '../../styles/nice-select.css'
 import '../../styles/meanmenu.css'
 import '../../styles/swiper-bundle.min.css'
 import '../../styles/animate.min.css'
 import '../../styles/magnific-popup.css'
 import '../../styles/main.css'


export default function AboutPage() {
  useEffect(() => {
    // Add any necessary initialization here
    // The CSS will handle most of the styling
    console.log('About page loaded')
  }, [])

  return (
    <>
      <AboutHeader />
        {/* Override template CSS for navigation */}
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
                    <div className="zq_hero-content">
                      <h1 className="zq_hero-content-title">
                        Digital <span>Solution</span> Zone
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Aliquam <br />
                        in hendrerit urna. Pellentesque sit amet sapien fringilla.
                      </p>
        </div>
                    <div className="zq_hero-img">
                      <Image 
                        src="https://themephi.net/template/zeniqsh/zeniqs/assets/images/hero/h1_1.png" 
                        alt="Hero Image" 
                        width={600} 
                        height={400}
                        className="w-full h-auto"
                      />
        </div>
                    <div className="zq_hero-circle-btn">
                      <Image 
                        src="/placeholder.svg" 
                        alt="Circle" 
                        width={100} 
                        height={100}
                        className="w-full h-auto"
                      />
                      <a href="#">
                        <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_129_42)">
                            <path d="M13.8922 10.568C17.1308 7.32937 20.2842 4.17596 23.4376 1.02255C24.1195 0.34073 24.8013 -0.170634 25.824 0.0850478C27.6138 0.425957 28.2956 2.55664 27.0172 3.92028C25.3979 5.62482 23.7786 7.15891 22.1592 8.77823C20.0286 10.9089 17.9831 13.0396 15.8524 15.085C14.4888 16.4487 13.3808 16.4487 12.0172 15.085C8.35242 11.4203 4.60242 7.7555 0.937644 4.0055C-0.17031 2.89755 -0.255538 1.53391 0.76719 0.596411C1.78992 -0.341089 3.06833 -0.341089 4.17628 0.852093C7.07401 3.83505 10.057 6.818 13.0399 9.80096C13.2104 10.0566 13.5513 10.2271 13.8922 10.568Z" fill="currentColor"/>
                            <path d="M13.7217 24.5454C16.9603 21.3068 20.0285 18.2386 23.0115 15.1704C23.3524 14.8295 23.608 14.5738 23.949 14.3181C24.8865 13.6363 26.0796 13.7215 26.8467 14.5738C27.699 15.4261 27.7842 16.534 27.1024 17.4715C26.9319 17.7272 26.6762 17.9829 26.4205 18.1534C22.841 21.7329 19.2615 25.3124 15.7671 28.8068C14.3183 30.2556 13.2103 30.2556 11.7615 28.8068C8.18191 25.2272 4.51714 21.5624 0.937591 17.9829C0.255773 17.3011 -0.255591 16.534 0.0853179 15.5113C0.596682 13.7215 2.64214 13.2954 4.00577 14.659C6.98873 17.5568 9.88645 20.5397 12.8694 23.5227C13.2103 23.7784 13.3808 24.1193 13.7217 24.5454Z" fill="currentColor"/>
                          </g>
                  </svg>
                      </a>
      </div>
        </div>
                </div>
        </div>
      </section>

            {/* Brand Section */}
            <div className="zq_brand-area pt-95 pb-100">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="zq_section-area mb-45 text-center">
                      <span className="zq_section-subtitle">MEET OUR TRUSTED CLIENTS</span>
                    </div>
                  </div>
                </div>
                <div className="swiper h1_brand-active">
                  <div className="swiper-wrapper">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="swiper-slide">
                        <div className="zq_brand-item">
                          <Image 
                            src="/placeholder-logo.svg" 
                            alt={`Brand ${item}`} 
                            width={150} 
                            height={80}
                            className="w-full h-auto"
                          />
          </div>
        </div>
                    ))}
                  </div>
                </div>
              </div>
        </div>

            {/* FAQ Section */}
            <div className="zq_faq-area pb-60">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="zq_faq-img mb-40">
                      <Image 
                        src="https://themephi.net/template/zeniqsh/zeniqs/assets/images/faq/1.png" 
                        alt="FAQ Image" 
                        width={600} 
                        height={400}
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="zq_faq-wrapper ml-50 mr-30 mb-40">
                      <div className="zq_section-area">
                        <span className="zq_section-subtitle mb-20">day-to-day operations</span>
                        <h2 className="zq_section-title mb-35">Empowering Excellence: Our IT Solutions Story</h2>
                      </div>
                      <div className="zq_faq-content">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item mb-20">
                            <h2 className="accordion-header" id="headingOne">
                              <button 
                                className="accordion-button" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseOne" 
                                aria-expanded="true" 
                                aria-controls="collapseOne"
                              >
                                <span>01.</span>
                                Instant Entry
                              </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.</p>
                              </div>
            </div>
          </div>
                          <div className="accordion-item mb-20">
                            <h2 className="accordion-header" id="headingTwo">
                              <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseTwo" 
                                aria-expanded="false" 
                                aria-controls="collapseTwo"
                              >
                                <span>02.</span>
                                Multi-Platform
                              </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item mb-20">
                            <h2 className="accordion-header" id="headingThree">
                              <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseThree" 
                                aria-expanded="false" 
                                aria-controls="collapseThree"
                              >
                                <span>03.</span>
                                Handy Integration
                              </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.</p>
        </div>
                            </div>
        </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseFour" 
                                aria-expanded="false" 
                                aria-controls="collapseFour"
                              >
                                <span>04.</span>
                                Latest Technology
                              </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.</p>
                </div>
        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Section */}
            <section className="zq_project-area">
              <div className="zq_common_width">
                <div className="zq_common_width_inner pt-100 pb-100">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-5 col-lg-6">
                        <div className="zq_section-area text-center">
                          <span className="zq_section-subtitle mb-20">Our Projects</span>
                          <h2 className="zq_section-title mb-40">Elevating Tomorrow's IT Landscape</h2>
                        </div>
                      </div>
                    </div>
                    <div className="zq_project-wrapper">
                      <div className="zq_project-single pr-40">
                        <div className="zq_project-item">
                          <div className="zq_project-img">
                            <Link href="/details">
                              <Image 
                                src="https://themephi.net/template/zeniqsh/zeniqs/assets/images/project/h1_1.png" 
                                alt="Project 1" 
                                width={400} 
                                height={300}
                                className="w-full h-auto"
                              />
                </Link>
                          </div>
                          <div className="zq_project-content">
                            <div className="zq_project-content-head">
                              <h3 className="zq_project-content-title">
                                <Link href="/details">TechVantage Solutions</Link>
                              </h3>
                              <Link href="/details" className="zq_project-content-btn">
                                <i className="fa-light fa-arrow-up-right"></i>
                              </Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna pellentesque sitame.</p>
                          </div>
                        </div>
                        <div className="zq_project-item">
                          <div className="zq_project-img">
                            <Link href="/details">
                              <Image 
                                src="https://themephi.net/template/zeniqsh/zeniqs/assets/images/project/h1_3.png" 
                                alt="Project 2" 
                                width={400} 
                                height={300}
                                className="w-full h-auto"
                              />
                            </Link>
                </div>
                          <div className="zq_project-content">
                            <div className="zq_project-content-head">
                              <h3 className="zq_project-content-title">
                                <Link href="/details">DigitalNest Solutions</Link>
                              </h3>
                              <Link href="/details" className="zq_project-content-btn">
                                <i className="fa-light fa-arrow-up-right"></i>
                              </Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna pellentesque sitame.</p>
                          </div>
                        </div>
                      </div>
                      <div className="zq_project-single pl-40">
                        <div className="zq_project-client">
                          <div className="zq_project-client-img">
                            <Image src="/placeholder-user.jpg" alt="Client 1" width={60} height={60} className="rounded-full" />
                            <Image src="/placeholder-user.jpg" alt="Client 2" width={60} height={60} className="rounded-full" />
                            <Image src="/placeholder-user.jpg" alt="Client 3" width={60} height={60} className="rounded-full" />
                          </div>
                          <div className="zq_project-client-info">
                            <h3>10K+</h3>
                            <p>Trusted Clients</p>
                          </div>
                        </div>
                        <div className="zq_project-item">
                          <div className="zq_project-img">
                            <Link href="/details">
                              <Image 
                                // src="/placeholder.jpg" 
                                src="https://themephi.net/template/zeniqsh/zeniqs/assets/images/project/h1_2.png" 
                                alt="Project 3" 
                                width={400} 
                                height={300}
                                className="w-full h-auto"
                              />
                            </Link>
          </div>
                          <div className="zq_project-content">
                            <div className="zq_project-content-head">
                              <h3 className="zq_project-content-title">
                                <Link href="/details">LogicLeap Technologies</Link>
                              </h3>
                              <Link href="/details" className="zq_project-content-btn">
                                <i className="fa-light fa-arrow-up-right"></i>
                              </Link>
        </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna pellentesque sitame.</p>
        </div>
                        </div>
                        <div className="zq_project-item">
                          <div className="zq_project-img">
                            <Link href="/details">
                              <Image 
                                src="https://themephi.net/template/zeniqsh/zeniqs/assets/images/project/h1_4.png" 
                                alt="Project 4" 
                                width={400} 
                                height={300}
                                className="w-full h-auto"
                              />
                            </Link>
                  </div>
                          <div className="zq_project-content">
                            <div className="zq_project-content-head">
                              <h3 className="zq_project-content-title">
                                <Link href="/details">DataDynamo Innovations</Link>
                              </h3>
                              <Link href="/details" className="zq_project-content-btn">
                                <i className="fa-light fa-arrow-up-right"></i>
                              </Link>
            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna pellentesque sitame.</p>
          </div>
                        </div>
                      </div>
                    </div>
                    <div className="zq_project-btn text-center pt-20">
                      <Link href="/" className="zq_theme-btn">More Projects</Link>
                    </div>
                  </div>
                </div>
        </div>
      </section>

            {/* Choose Section */}
            <section className="zq_choose-area pt-95 pb-70">
              <div className="container">
                <div className="row justify-content-between align-items-end">
                  <div className="col-lg-6 col-md-8">
                    <div className="zq_section-area">
                      <span className="zq_section-subtitle mb-20">why chose us</span>
                      <h2 className="zq_section-title mb-30">Our Identity Defines</h2>
                </div>
                </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="zq_choose-right text-md-end mb-40">
                      <Link href="#" className="zq_theme-btn">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="zq_choose-wrapper">
                  <div className="row align-items-center">
                    <div className="col-xl-7">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="zq_choose-item mb-30">
                            <div className="zq_choose-item-top">
                              <div className="zq_choose-item-icon">
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_199_104)">
                                    <path d="M3.23684 29.5605C3.45263 28.7912 3.56053 27.5824 3.88421 26.3737C4.1 25.6044 3.88421 25.055 3.34474 24.6154C2.58947 24.066 1.94211 23.4066 1.29474 22.7473C-0.431579 20.989 -0.431579 19.011 1.29474 17.1429C1.94211 16.4835 2.69737 15.8242 3.45263 15.1649C3.99211 14.7253 4.20789 14.1758 3.99211 13.4066C3.77632 12.5275 3.56053 11.6484 3.45263 10.7693C3.02105 8.1319 4.20789 6.48354 7.01316 6.15387C7.76842 6.04398 8.41579 6.04398 9.17105 5.93409C9.92632 5.93409 10.4658 5.60442 10.7895 4.7253C11.1132 3.84618 11.5447 2.85717 11.9763 2.08794C13.1632 -0.109863 14.8895 -0.659314 17.0474 0.439587C17.6947 0.769258 18.3421 1.09893 18.8816 1.53849C19.9605 2.41761 20.9316 2.41761 22.0105 1.53849C22.4421 1.20882 22.8737 0.989038 23.3053 0.769258C26.0026 -0.659314 28.0526 2.67178e-05 29.2395 2.85717C29.5632 3.51651 29.8868 4.28574 30.1026 5.05497C30.3184 5.71431 30.8579 6.04398 31.5053 6.04398C32.3684 6.04398 33.1237 6.15387 33.9868 6.26376C36.9 6.81321 38.0868 8.46157 37.4395 11.4286C37.3316 12.1978 37.1158 12.8572 36.9 13.6264C36.6842 14.2857 36.9 14.8352 37.4395 15.1649C38.0868 15.7143 38.8421 16.2638 39.4895 16.9231C41.4316 18.7912 41.4316 20.8791 39.5974 22.8572C39.0579 23.4066 38.4105 23.9561 37.7632 24.5055C37.0079 25.055 36.7921 25.7143 37.1158 26.5934C37.3316 27.2528 37.4395 27.9121 37.5474 28.4616C38.1947 31.6484 36.7921 33.5165 33.6632 33.7363C33.0158 33.7363 32.2605 33.8462 31.6132 33.9561C30.9658 33.9561 30.5342 34.2857 30.3184 34.9451C29.9947 35.7143 29.6711 36.3736 29.4553 37.1429C28.1605 40.1099 26.1105 40.7693 23.4132 39.1209C22.7658 38.7912 22.2263 38.3517 21.5789 38.022C20.9316 37.5824 20.3921 37.5824 19.7447 38.022C18.9895 38.5714 18.1263 39.011 17.3711 39.4506C15.2132 40.5495 13.3789 40 12.1921 37.8022C11.7605 36.9231 11.4368 36.044 11.0053 35.1649C10.6816 34.2857 10.1421 34.066 9.27895 33.9561C8.30789 33.8462 7.22895 33.8462 6.25789 33.6264C4.31579 33.2967 3.23684 31.8682 3.23684 29.5605ZM6.58158 9.78025C6.90526 10.989 7.12105 12.0879 7.33684 13.0769C7.76842 14.8352 7.33684 16.3737 5.93421 17.5824C5.17895 18.2418 4.53158 18.7912 3.88421 19.4506C3.45263 19.7802 3.45263 20.1099 3.88421 20.4396C4.63947 21.0989 5.39474 21.7583 6.15 22.5275C7.33684 23.6264 7.66053 25.055 7.33684 26.7033C7.12105 27.5824 7.01316 28.5715 6.68947 29.4506C6.47368 30.1099 6.79737 30.3297 7.44474 30.3297C8.2 30.3297 8.84737 30.4396 9.60263 30.5495C11.0053 30.6594 12.4079 30.989 13.1632 32.3077C13.5947 32.9671 13.9184 33.7363 14.2421 34.5055C14.5658 35.1649 14.8895 35.8242 15.2132 36.5934C16.2921 35.9341 17.1553 35.3846 18.1263 34.8352C19.7447 33.8462 21.3632 33.8462 22.8737 34.8352C23.6289 35.2747 24.4921 35.7143 25.2474 36.2638C25.6789 36.4835 25.8947 36.4835 26.1105 35.9341C26.3263 35.2747 26.65 34.6154 26.8658 33.9561C27.7289 31.6484 29.2395 30.5495 31.6132 30.4396C32.4763 30.4396 33.3395 30.2198 34.4184 30.1099C34.2026 28.9011 33.8789 27.9121 33.6632 26.8132C33.2316 24.9451 33.6632 23.4066 35.0658 22.1978C35.7132 21.6484 36.3605 20.989 37.0079 20.4396C37.4395 20 37.4395 19.6704 37.0079 19.3407C36.3605 18.7912 35.6053 18.1319 34.9579 17.5824C33.6632 16.3737 33.2316 14.9451 33.5553 13.1868C33.6632 12.4176 33.8789 11.6484 34.0947 10.7693C34.3105 9.78025 34.2026 9.67036 33.2316 9.56047C32.4763 9.45058 31.6132 9.45058 30.8579 9.34069C29.1316 9.12091 27.9447 8.35167 27.1895 6.70332C26.8658 6.04398 26.5421 5.27475 26.2184 4.50552C26.0026 4.06596 25.7868 3.73629 25.5711 3.29673C24.7079 3.84618 23.8447 4.28574 23.0895 4.83519C21.2553 6.04398 19.4211 6.04398 17.5868 4.83519C17.0474 4.50552 16.5079 4.06596 15.8605 3.73629C15.6447 3.6264 15.3211 3.51651 14.8895 3.29673C14.4579 4.28574 14.1342 5.16486 13.7026 6.04398C12.8395 8.13189 11.3289 9.2308 9.06316 9.34069C8.41579 9.45058 7.55263 9.67036 6.58158 9.78025Z" fill="currentColor"/>
                                    <path d="M18.1263 22.967C19.7447 20.989 21.3632 19.0109 22.9816 17.0329C23.8447 16.0439 24.6 14.945 25.4632 13.956C26.2184 13.0769 27.1895 12.8571 27.9447 13.5164C28.7 14.1758 28.8079 15.1648 28.0526 16.1538C25.2474 19.5604 22.4421 23.0769 19.6368 26.4835C18.7737 27.4725 17.8026 27.5824 16.8316 26.5933C15.429 25.1648 14.0263 23.7362 12.6237 22.3076C11.7605 21.4285 11.7605 20.4395 12.5158 19.6703C13.2711 19.0109 14.2421 19.0109 15.1053 19.8901C16.0763 20.8791 17.0474 21.8681 18.1263 22.967Z" fill="currentColor"/>
                                  </g>
                                </svg>
                              </div>
                              <a href="#" className="zq_choose-item-btn">
                                <i className="fa-light fa-arrow-up-right"></i>
                              </a>
                            </div>
                            <h2 className="zq_choose-item-title">600+</h2>
                            <p>Successful Projects Lorem ipsum dolor sit amet consectetur our adipiscing of the best conditions.</p>
                          </div>
                        </div>
                        {/* Add more choose items here */}
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="zq_choose-img mb-30">
                        <Image 
                          src="https://themephi.net/template/zeniqsh/zeniqs/assets/images/choose/h1_1.png" 
                          alt="Choose Image" 
                          width={500} 
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </section>

      {/* Team Section */}
            <section className="zq_team-area pt-95 pb-70">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="zq_section-area text-center">
                      <span className="zq_section-subtitle mb-20">Our Team</span>
                      <h2 className="zq_section-title mb-40">Meet the Experts Behind Our Success</h2>
                  </div>
                    </div>
                  </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_team-item mb-30">
                      <div className="zq_team-item-img">
                        <Image src="/placeholder-user.jpg" alt="Team Member" width={300} height={350} className="w-100" />
                        <div className="zq_team-item-social">
                          <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          </ul>
                </div>
                      </div>
                      <div className="zq_team-item-content">
                        <h3 className="zq_team-item-content-title">Alex Rivera</h3>
                        <span className="zq_team-item-content-designation">CEO & Founder</span>
                        <p>Visionary leader with 12+ years in digital innovation. Former Apple Design Award winner.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_team-item mb-30">
                      <div className="zq_team-item-img">
                        <Image src="/placeholder-user.jpg" alt="Team Member" width={300} height={350} className="w-100" />
                        <div className="zq_team-item-social">
                          <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="zq_team-item-content">
                        <h3 className="zq_team-item-content-title">Maya Chen</h3>
                        <span className="zq_team-item-content-designation">Head of Design</span>
                        <p>Design systems expert with a passion for human-centered experiences and innovation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_team-item mb-30">
                      <div className="zq_team-item-img">
                        <Image src="/placeholder-user.jpg" alt="Team Member" width={300} height={350} className="w-100" />
                        <div className="zq_team-item-social">
                          <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="zq_team-item-content">
                        <h3 className="zq_team-item-content-title">Jonas Patel</h3>
                        <span className="zq_team-item-content-designation">Lead Developer</span>
                        <p>Full-stack architect specializing in performance, scalability, and cutting-edge technologies.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_team-item mb-30">
                      <div className="zq_team-item-img">
                        <Image src="/placeholder-user.jpg" alt="Team Member" width={300} height={350} className="w-100" />
                        <div className="zq_team-item-social">
                          <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="zq_team-item-content">
                        <h3 className="zq_team-item-content-title">Sofia Lee</h3>
                        <span className="zq_team-item-content-designation">Project Manager</span>
                        <p>Operations specialist ensuring seamless delivery and exceptional client satisfaction.</p>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </section>

            {/* Services Section */}
            <section className="zq_service-area pt-95 pb-70">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="zq_section-area text-center">
                      <span className="zq_section-subtitle mb-20">Our Services</span>
                      <h2 className="zq_section-title mb-40">Comprehensive Digital Solutions</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="zq_service-item mb-30">
                      <div className="zq_service-item-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <h4 className="zq_service-item-title">
                        <Link href="#">Web Development</Link>
                      </h4>
                      <p>Custom web applications built with modern technologies. From simple websites to complex enterprise solutions.</p>
                      <div className="zq_service-btn">
                        <Link href="#" className="zq_service-item-btn">
                          Learn More<i className="fa-regular fa-angle-right"></i>
                </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="zq_service-item mb-30">
                      <div className="zq_service-item-icon">
                        <i className="fas fa-palette"></i>
                      </div>
                      <h4 className="zq_service-item-title">
                        <Link href="#">UI/UX Design</Link>
                      </h4>
                      <p>User-centered design that creates intuitive and engaging experiences across all digital platforms.</p>
                      <div className="zq_service-btn">
                        <Link href="#" className="zq_service-item-btn">
                          Learn More<i className="fa-regular fa-angle-right"></i>
                </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="zq_service-item mb-30">
                      <div className="zq_service-item-icon">
                        <i className="fas fa-mobile-alt"></i>
                      </div>
                      <h4 className="zq_service-item-title">
                        <Link href="#">Mobile Development</Link>
                      </h4>
                      <p>Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.</p>
                      <div className="zq_service-btn">
                        <Link href="#" className="zq_service-item-btn">
                          Learn More<i className="fa-regular fa-angle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="zq_service-item mb-30">
                      <div className="zq_service-item-icon">
                        <i className="fas fa-cube"></i>
                      </div>
                      <h4 className="zq_service-item-title">
                        <Link href="#">3D & Motion Graphics</Link>
                      </h4>
                      <p>Immersive 3D experiences and stunning motion graphics that bring your brand to life.</p>
                      <div className="zq_service-btn">
                        <Link href="#" className="zq_service-item-btn">
                          Learn More<i className="fa-regular fa-angle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="zq_service-item mb-30">
                      <div className="zq_service-item-icon">
                        <i className="fas fa-shopping-cart"></i>
                      </div>
                      <h4 className="zq_service-item-title">
                        <Link href="#">E-commerce Solutions</Link>
                      </h4>
                      <p>Complete e-commerce platforms with advanced features, payment integration, and inventory management.</p>
                      <div className="zq_service-btn">
                        <Link href="#" className="zq_service-item-btn">
                          Learn More<i className="fa-regular fa-angle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="zq_service-item mb-30">
                      <div className="zq_service-item-icon">
                        <i className="fas fa-cloud"></i>
                      </div>
                      <h4 className="zq_service-item-title">
                        <Link href="#">Cloud Solutions</Link>
                      </h4>
                      <p>Scalable cloud infrastructure and deployment solutions for modern applications and businesses.</p>
                      <div className="zq_service-btn">
                        <Link href="#" className="zq_service-item-btn">
                          Learn More<i className="fa-regular fa-angle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </section>

            {/* Testimonials Section */}
            <section className="zq_testimonial-area pt-100 pb-60">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="zq_section-area text-center">
                      <span className="zq_section-subtitle mb-20">Client Testimonials</span>
                      <h2 className="zq_section-title mb-40">What Our Clients Say</h2>
              </div>
            </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="zq_testimonial-form mr-25 mb-40">
                      <h2 className="zq_testimonial-form-title">Get a Free Quote</h2>
                      <form action="#">
                        <div className="row g-20">
                          <div className="col-sm-6">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div className="col-sm-6">
                            <input type="email" placeholder="Email" />
                          </div>
                          <div className="col-sm-6">
                            <input type="text" placeholder="Phone" />
                          </div>
                          <div className="col-sm-6">
                            <select name="select" className="has-nice-select">
                              <option value="1">Select Service</option>
                              <option value="2">Web Development</option>
                              <option value="3">UI/UX Design</option>
                              <option value="4">Mobile Development</option>
                              <option value="5">3D & Motion</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <textarea name="message" placeholder="Write a Message"></textarea>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="zq_testimonial-btn">
                              Send Now <i className="fa-regular fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="zq_testimonial-wrap ml-45 mb-40">
                      <div className="testimonial-active swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="zq_testimonial-item">
                              <ul className="zq_testimonial-item-rating">
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
              </ul>
                              <p>"Pitamaas transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The team delivered a stunning website that perfectly represents our brand."</p>
                              <div className="zq_testimonial-admin">
                                <div className="zq_testimonial-admin-img">
                                  <Image src="/placeholder-user.jpg" alt="Client" width={60} height={60} className="zq_testimonial-admin-img-inner" />
            </div>
                                <div className="zq_testimonial-admin-info">
                                  <h3>Sarah Johnson</h3>
                                  <span>CEO, TechStart Inc.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="zq_testimonial-item">
                              <ul className="zq_testimonial-item-rating">
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
              </ul>
                              <p>"Working with Pitamaas was a game-changer for our business. Their 3D animations and motion graphics brought our product to life in ways we never imagined possible."</p>
                              <div className="zq_testimonial-admin">
                                <div className="zq_testimonial-admin-img">
                                  <Image src="/placeholder-user.jpg" alt="Client" width={60} height={60} className="zq_testimonial-admin-img-inner" />
            </div>
                                <div className="zq_testimonial-admin-info">
                                  <h3>Michael Chen</h3>
                                  <span>Founder, InnovateLab</span>
                </div>
              </div>
            </div>
            </div>
                          <div className="swiper-slide">
                            <div className="zq_testimonial-item">
                              <ul className="zq_testimonial-item-rating">
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                <li><i className="fa-sharp fa-solid fa-star"></i></li>
                              </ul>
                              <p>"The team at Pitamaas understood our vision from day one. Their expertise in modern web technologies and user experience design is unmatched. Highly recommended!"</p>
                              <div className="zq_testimonial-admin">
                                <div className="zq_testimonial-admin-img">
                                  <Image src="/placeholder-user.jpg" alt="Client" width={60} height={60} className="zq_testimonial-admin-img-inner" />
        </div>
                                <div className="zq_testimonial-admin-info">
                                  <h3>Emily Rodriguez</h3>
                                  <span>Marketing Director, GlobalCorp</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="zq_stats-area pt-95 pb-70">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_stats-item text-center mb-30">
                      <div className="zq_stats-item-icon">
                        <i className="fas fa-project-diagram"></i>
                      </div>
                      <h2 className="zq_stats-item-number">150+</h2>
                      <p className="zq_stats-item-text">Projects Completed</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_stats-item text-center mb-30">
                      <div className="zq_stats-item-icon">
                        <i className="fas fa-users"></i>
                      </div>
                      <h2 className="zq_stats-item-number">75+</h2>
                      <p className="zq_stats-item-text">Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_stats-item text-center mb-30">
                      <div className="zq_stats-item-icon">
                        <i className="fas fa-award"></i>
                      </div>
                      <h2 className="zq_stats-item-number">25+</h2>
                      <p className="zq_stats-item-text">Awards Won</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_stats-item text-center mb-30">
                      <div className="zq_stats-item-icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <h2 className="zq_stats-item-number">5+</h2>
                      <p className="zq_stats-item-text">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="zq_process-area pt-95 pb-70">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="zq_section-area text-center">
                      <span className="zq_section-subtitle mb-20">Our Process</span>
                      <h2 className="zq_section-title mb-40">How We Work</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_process-item text-center mb-30">
                      <div className="zq_process-item-number">01</div>
                      <div className="zq_process-item-icon">
                        <i className="fas fa-lightbulb"></i>
                      </div>
                      <h3 className="zq_process-item-title">Discovery</h3>
                      <p>We start by understanding your business goals, target audience, and project requirements through detailed consultation.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_process-item text-center mb-30">
                      <div className="zq_process-item-number">02</div>
                      <div className="zq_process-item-icon">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h3 className="zq_process-item-title">Design</h3>
                      <p>Our design team creates wireframes, mockups, and prototypes to visualize your project before development begins.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_process-item text-center mb-30">
                      <div className="zq_process-item-number">03</div>
                      <div className="zq_process-item-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <h3 className="zq_process-item-title">Development</h3>
                      <p>Our developers bring the design to life using cutting-edge technologies and best practices for optimal performance.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="zq_process-item text-center mb-30">
                      <div className="zq_process-item-number">04</div>
                      <div className="zq_process-item-icon">
                        <i className="fas fa-rocket"></i>
                      </div>
                      <h3 className="zq_process-item-title">Launch</h3>
                      <p>We deploy your project with comprehensive testing and provide ongoing support to ensure continued success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="zq_cta-area">
              <div className="container">
                <div className="zq_cta-wrapper">
                  <h2 className="zq_cta-title">
                    Ready to Start Your Project? <br />Let's Get Started!
                  </h2>
                  <div className="zq_cta-action">
                    <Image src="/placeholder.svg" alt="Call" width={60} height={60} />
                    <div className="zq_cta-action-info">
                      <span>Get in Touch</span>
                      <a href="tel:+704-555-0127">(+704) 555-0127</a>
                    </div>
                  </div>
                  <div className="zq_cta-buttons">
                    <Link href="/" className="zq_theme-btn">Start a Project</Link>
                    <Link href="/details" className="zq_theme-btn zq_theme-btn-outline">View Portfolio</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}