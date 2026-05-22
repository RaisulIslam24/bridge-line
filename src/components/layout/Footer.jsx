const Footer = () => {
  const logoPath = "/Images/Logo.png";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-[#001a2c] py-4 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-12">

          <div className="space-y-6">
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
              <div>
                <h2 className="text-2xl font-bold tracking-tight leading-none">Bridgeline</h2>
                <p className="text-white/60 text-[10px] mt-1 uppercase tracking-widest font-semibold">
                  Global Solutions Limited
                </p>
              </div>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed max-w-sm">
              Your trusted partner for integrated business solutions worldwide.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-white transition-all duration-300 text-[15px] cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-5 text-white/60 text-[15px]">
              <li>Dhaka, Bangladesh</li>
              <li>
                <a href="mailto:info@bridgelineglobal.com" className="hover:text-white transition-colors">
                  info@bgsl.com.bd
                </a>
              </li>
              <li>+880 1410 411749</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-center text-white/50 text-[13px] tracking-wide">
            © {new Date().getFullYear()} Bridgeline Global Services Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;