const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center pt-24 bg-white">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          {/* Placeholder video source */}
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 flex flex-col pt-10">
        <h1 className="font-black tracking-tight leading-[0.9] flex flex-col">
          
          <div className="flex items-center ml-[5%] md:ml-[10%]">
            <span className="text-black text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] uppercase">WE ENGINEER</span>
          </div>
          
          <div className="flex items-center ml-[5%] md:ml-[10%] -mt-1 md:-mt-3">
            <span className="text-[#DA3535] text-[6rem] md:text-[9rem] lg:text-[11rem] uppercase">BRAND</span>
          </div>

          <div className="flex items-baseline ml-[5%] md:ml-[10%] -mt-2 md:-mt-4">
            <span className="text-[#DA3535] text-[4rem] md:text-[6rem] lg:text-[7rem] uppercase mr-4 lg:mr-6">STRATEGY</span> 
            <span className="text-black text-[3.5rem] md:text-[5rem] lg:text-[6rem] uppercase">THAT</span>
          </div>

          <div className="flex items-center ml-[12%] md:ml-[25%] mt-1 md:mt-2">
            <span className="text-black text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] uppercase">ACCELERATE</span>
          </div>

          <div className="flex items-center ml-[10%] md:ml-[23%] -mt-2 md:-mt-4">
            <span className="text-[#DA3535] text-[5.5rem] md:text-[8rem] lg:text-[10rem] uppercase">GROWTH,</span>
          </div>

          <div className="flex items-center ml-[10%] md:ml-[23%] -mt-2 md:-mt-4">
            <span className="text-black text-[5.5rem] md:text-[8rem] lg:text-[10rem] uppercase">VISIBILITY,</span>
          </div>
          
        </h1>
      </div>
    </div>
  );
};

export default Hero;
