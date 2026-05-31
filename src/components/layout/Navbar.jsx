import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  HiMenuAlt3, HiX, HiOutlineSearch, HiOutlineUserCircle, HiChevronDown, HiOutlineLockClosed, HiOutlineMail 
} from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ name: 'English', code: 'EN' });

  const location = useLocation();
  const navigate = useNavigate();
  const logoPath = "/Logos/Logo.png";

  const languages = [
    { name: 'Bangla', code: 'BN' },
    { name: 'English', code: 'EN' },
    { name: 'Chinese', code: 'ZH' },
    { name: 'Arabic', code: 'AR' },
  ];

  const handleNavAction = (sectionId, path = '/') => {
    setIsOpen(false);

    if (location.pathname === path) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Our Insights', id: 'insights', path: '/' },
    { name: 'What we do', id: 'services', path: '/' },
    { name: 'About Bridgeline', id: 'about', path: '/' },
    { name: 'News Room', id: 'news', path: '/news' },
    { name: 'Careers', id: 'careers', path: '/' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 font-sans shadow-sm">
        <div className="hidden md:block bg-[#001a2c] text-white py-2 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-8 text-[11px] font-bold uppercase tracking-wider">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-2 hover:text-[#00c2fe] transition-colors cursor-pointer"
            >
              <HiOutlineUserCircle size={16} /> Login
            </button>
            
            <div className="relative border-l border-white/20 pl-8">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 hover:text-[#00c2fe] transition-colors cursor-pointer">
                {selectedLang.name}
                <HiChevronDown className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-3 w-40 bg-white shadow-2xl border border-gray-100 py-2 z-[60]">
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={() => { setSelectedLang(lang); setIsLangOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-[#00c2fe] transition-all text-xs font-bold text-left">
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
              
              <div 
                className="flex items-center gap-3 cursor-pointer shrink-0 py-2" 
                onClick={() => handleNavAction('home', '/')}
              >
                  <img src={logoPath} alt="Logo" className="w-12 h-12 object-contain" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00c2fe] to-[#bdeb0f]">
                      Bridgeline
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Global Solutions Limited
                    </span>
                  </div>
              </div>

              <div className="hidden lg:flex ml-10 space-x-8 h-full items-center">
                  {navLinks.map((link) => (
                    <button key={link.name} onClick={() => handleNavAction(link.id, link.path)} className="text-[#00338d] hover:text-[#00c2fe] text-[15px] font-medium transition-colors cursor-pointer h-full border-b-4 border-transparent hover:border-[#00c2fe] px-1 pt-1">
                      {link.name}
                    </button>
                  ))}
              </div>

              <div className="hidden md:flex items-center gap-2 text-[#00338d] hover:text-[#00c2fe] cursor-pointer group transition-colors">
                 <HiOutlineSearch size={22} className="group-hover:scale-110 transition-transform"/>
                 <span className="text-[15px] font-semibold">Search</span>
              </div>

              <div className="lg:hidden flex items-center gap-4">
                <HiOutlineSearch size={24} className="text-[#00338d]"/>
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 p-2">
                  {isOpen ? <HiX size={32}/> : <HiMenuAlt3 size={32}/>}
                </button>
              </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="lg:hidden bg-white border-b shadow-2xl overflow-hidden">
              <div className="bg-[#001a2c] text-white px-6 py-6 flex flex-col gap-5">
                 <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-wider">
                    <button onClick={() => { setIsLoginOpen(true); setIsOpen(false); }} className="flex items-center gap-2">
                      <HiOutlineUserCircle size={18}/> Login
                    </button>
                    <div className="flex flex-wrap gap-3">
                      {languages.map(l => (
                        <button key={l.code} onClick={() => setSelectedLang(l)} className={`flex items-center gap-1 ${selectedLang.code === l.code ? 'text-[#00c2fe]' : 'text-white/60'}`}>
                          {l.code}
                        </button>
                      ))}
                    </div>
                 </div>
              </div>
              <div className="px-6 py-8 space-y-6 flex flex-col">
                {navLinks.map((link) => (
                  <button key={link.name} onClick={() => handleNavAction(link.id, link.path)} className="text-left text-lg font-bold text-[#00338d] hover:text-[#00c2fe] border-l-4 border-transparent hover:border-[#00c2fe] pl-4 transition-all">
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsLoginOpen(false)} className="absolute inset-0 bg-[#001a2c]/80 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden">
              <button onClick={() => setIsLoginOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 cursor-pointer"><HiX size={24} /></button>
              <div className="p-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-black text-[#001a2c] mb-2">Welcome Back</h3>
                  <p className="text-slate-500 text-sm font-medium">Enter your details to access your account</p>
                </div>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Username or Email</label>
                    <div className="relative">
                      <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input type="text" placeholder="your@email.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00c2fe]/20 focus:border-[#00c2fe] transition-all text-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Password</label>
                      <button className="text-[11px] font-black uppercase tracking-widest text-[#00c2fe] hover:text-[#bdeb0f] transition-colors cursor-pointer">Forgot Password?</button>
                    </div>
                    <div className="relative">
                      <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00c2fe]/20 focus:border-[#00c2fe] transition-all text-sm font-medium" />
                    </div>
                  </div>
                  <button className="w-full py-4 mt-4 bg-gradient-to-r from-[#00c2fe] to-[#bdeb0f] text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">Sign In</button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;