import React from 'react';

const Performance = () => {
  return (
    <section className="w-full bg-white py-20 pb-0 flex flex-col items-center">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Performance Statement */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#E53935]"></div>
          <span className="text-sm font-semibold tracking-widest text-gray-700 uppercase">
            Performance Statement
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-24 max-w-5xl tracking-tight">
          We drive performance that amplifies reach, builds trust, and delivers
          results backed by a fast, precise process that keeps brands ahead.
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 w-full mb-32">
          
          <div className="flex flex-col items-center text-center relative group">
            {/* Decorative ladybug position placeholder */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-100 rounded-full opacity-0"></div>
            <span className="text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-[#E53935] tracking-tighter leading-none mb-4">
              95%
            </span>
            <span className="text-gray-700 text-sm md:text-base font-medium">Success Rate</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-[#E53935] tracking-tighter leading-none mb-4">
              90%
            </span>
            <span className="text-gray-700 text-sm md:text-base font-medium">On Time Delivery</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-[#E53935] tracking-tighter leading-none mb-4">
              85%
            </span>
            <span className="text-gray-700 text-sm md:text-base font-medium">Client Retention</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-[#E53935] tracking-tighter leading-none mb-4">
              100+
            </span>
            <span className="text-gray-700 text-sm md:text-base font-medium">Campaign Rollouts</span>
          </div>

        </div>
      </div>

      {/* Marquee / Ticker */}
      <div className="w-full bg-black py-4 overflow-hidden relative border-t-2 border-black">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* We map twice to create a seamless infinite scroll effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center shrink-0 pr-8">
              <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase">STRATEGY</span>
              <span className="text-white text-[10px]">●</span>
              <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase">COMPETITIVE MAPPING</span>
              <span className="text-white text-[10px]">●</span>
              <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase">PACKAGING DESIGN</span>
              <span className="text-white text-[10px]">●</span>
              <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase">BUSINESS GROWTH</span>
              <span className="text-white text-[10px]">●</span>
              <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase">SOCIAL MEDIA CAMPAIGNS</span>
              <span className="text-white text-[10px]">●</span>
              <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase">WEBSITE DESIGN</span>
              <span className="text-white text-[10px]">●</span>
              <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase">SEO AGENCY</span>
              <span className="text-white text-[10px]">●</span>
              <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase">PAID ADVERTISING</span>
              <span className="text-white text-[10px]">●</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Performance;
