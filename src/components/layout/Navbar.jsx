import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoPath = "/Images/Logo.png";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      setIsOpen(false);

      setTimeout(() => {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100); 
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <img 
              src={logoPath} 
              alt="Bridgeline Logo" 
              className="w-12 h-12 object-contain rounded-lg"
              onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=B" }}
            />
            
            <div className="flex flex-col leading-tight">
              <span className="font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-[#9333ea] to-[#d946ef]">
                Bridgeline
              </span>
              <span className="text-[11px] font-semibold text-[#475569] tracking-normal">
                Global Solutions Limited
              </span>
            </div>
          </div>

          <div className="hidden md:flex space-x-10 items-center text-sm font-semibold">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-500 hover:text-primary transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 px-6 rounded-xl font-bold shadow-lg shadow-purple-200 text-white bg-gradient-to-r from-[#2563eb] via-[#9333ea] to-[#d946ef] hover:brightness-110 transition-all active:scale-[0.98] cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 p-2 focus:outline-none"
            >
              {isOpen ? <HiX size={30}/> : <HiMenuAlt3 size={30}/>}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-lg font-semibold text-gray-600 hover:text-primary w-full py-2"
                >
                  {link.name}
                </button>
              ))}
              <button 
				onClick={() => scrollToSection('contact')}
				className="w-full py-4 rounded-2xl font-bold shadow-lg shadow-purple-200 text-white bg-gradient-to-r from-[#2563eb] via-[#9333ea] to-[#d946ef] hover:brightness-110 transition-all active:scale-[0.98] cursor-pointer"
			  >
				Contact Us
			  </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;