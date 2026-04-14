import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 1. Data Structure
const servicesData = [
  {
    id: 1,
    number: '01.',
    title: 'STRATEGY DEVELOPMENT',
    description: 'We build comprehensive brand strategies that align with your business goals, target audience, and market positioning. Our approach ensures every move is calculated and impactful.',
    tags: ['MARKET RESEARCH', 'AUDIENCE PROFILING', 'COMPETITIVE ANALYSIS'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    number: '02.',
    title: 'BRAND IDENTITY',
    description: 'Creating memorable visual identities that capture the essence of your brand and resonate deeply with your core audience. From logos to complete design systems.',
    tags: ['LOGO DESIGN', 'TYPOGRAPHY', 'COLOR PALETTES', 'GUIDELINES'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    number: '03.',
    title: 'DIGITAL MARKETING',
    description: 'Data-driven marketing campaigns designed to increase visibility, engagement, and conversions across all critical digital channels.',
    tags: ['SEO', 'SOCIAL MEDIA', 'PAID ADVERTISING', 'CONTENT'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    number: '04.',
    title: 'CAMPAIGN DESIGN FOR BRANDS',
    description: 'We build integrated, high-impact campaigns that attract attention and turn interest into action. Every concept blends creativity, clarity, and market insight to create memorable brand moments that resonate.',
    tags: ['BRAND AWARENESS', 'PRODUCT LAUNCH', 'SEASONAL OFFERS'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
];

// Individual Service Component
const ServiceItem = ({ service, index }: { service: any; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']);

  return (
    <div
      ref={containerRef}
      className={`w-full min-h-[90vh] pt-12 pb-32 flex flex-col lg:flex-row items-start justify-between gap-12 border-t border-dashed border-gray-300 bg-white sticky shadow-[0_-4px_10px_rgba(0,0,0,0.02)]`}
      style={{ top: `calc(${index * 135}px + 80px)` }}
    >
      {/* Left Column: Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12 items-start w-full">
          <span className="text-base font-bold text-black pt-4 md:pt-6">
            {service.number}
          </span>

          {/* The Animation Container */}
          <div className="relative inline-block w-full">
            <h2
              className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter text-transparent relative w-full break-words uppercase leading-[0.9]"
              style={{ WebkitTextStroke: '2px #e5e7eb' }}
            >
              {service.title}
            </h2>

            <motion.h2
              className="absolute top-0 left-0 text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter text-black w-full break-words uppercase leading-[0.9]"
              style={{ clipPath }}
            >
              {service.title}
            </motion.h2>
            
            <div className="mt-8">
              <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center">
                <a href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white bg-red-600 hover:bg-red-700 transition font-medium text-sm">
                  Explore Now
                  <span className="flex items-center justify-center p-1 bg-black rounded-full text-white w-6 h-6 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M14.293 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {service.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-gray-200 rounded-full text-xs font-semibold tracking-wider text-black mt-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="hidden lg:flex w-full lg:w-[45%] h-[500px] justify-center items-center pr-8">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

// Main Services Section
const Services = () => {
  return (
    <section className="w-full bg-gray-50 pt-32 pb-[80vh]">
      <div className="max-w-[1400px] mx-auto relative pt-10">
        <div className="flex flex-col w-full relative">
          {servicesData.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
