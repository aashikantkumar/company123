import aiAdsLogo from "./assets/aiads_logo-removebg.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        
        {/* Logo */}
        <div className="shrink-0 flex items-center">
          <img
            src={aiAdsLogo}
            alt="AI ADS logo"
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
          />
        </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-sm font-semibold text-black hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-sm font-semibold text-black hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="text-sm font-semibold text-black hover:text-blue-600 transition-colors">Our Services</a>
            <a href="#" className="text-sm font-semibold text-black hover:text-blue-600 transition-colors">Blog</a>
            <a href="#" className="text-sm font-semibold text-black hover:text-blue-600 transition-colors">Contact Us</a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white bg-gradient-to-r from-[#00c6ff] to-[#8f00ff] hover:from-[#00b4e5] hover:to-[#8000e5] transition font-medium text-sm"
            >
              Start a Project
              <span className="flex items-center justify-center p-1 bg-black rounded-full text-white w-6 h-6 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M14.293 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6 5a1 1 0 011 1h6.586L9.293 10.293a1 1 0 11-1.414-1.414l5-5H7a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
