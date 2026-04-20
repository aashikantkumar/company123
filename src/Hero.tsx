const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center pt-24 ">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-45"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 flex flex-col pt-10">
        <h1 className="font-black tracking-tight leading-none flex flex-col">
          <div className="flex items-center ml-[5%] md:ml-[10%]">
            <span className="text-black text-[2.5rem] md:text-[4rem] lg:text-[4.5rem]">समय बदल रहा है,</span>
          </div>

          <div className="flex flex-col items-start ml-[5%] md:ml-[10%] mt-1 md:mt-2 leading-[0.95]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#8f00ff] text-[4.8rem] md:text-[7.2rem] lg:text-[8.8rem] font-extrabold">आपकी</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#8f00ff] text-[4.8rem] md:text-[7.2rem] lg:text-[8.8rem] font-extrabold">मार्केटिंग</span>
          </div>

          <div className="flex items-center ml-[12%] md:ml-[25%] mt-1 md:mt-2">
            <span className="text-black text-[4rem] md:text-[6rem] lg:text-[7rem]">कब बदलेगी?</span>
          </div>
          
        </h1>
      </div>
    </div>
  );
};

export default Hero;
