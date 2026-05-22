import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineGlobeAlt, HiOutlineOfficeBuilding, HiOutlineCode, 
  HiOutlineBriefcase, HiOutlineCog, HiOutlineTruck, 
  HiOutlineDocumentText, HiOutlineLibrary, HiOutlineHeart, 
  HiOutlineTrendingUp, HiOutlinePencilAlt, HiChevronDown, HiChevronUp 
} from 'react-icons/hi';
import { FaLeaf } from "react-icons/fa";

const services = [
  { title: "International Investment Consulting", desc: "Investment strategy and work permit assistance.", icon: <HiOutlineGlobeAlt />, color: "bg-cyan-500" },
  { title: "Business Setup & Management", desc: "Guidance for starting and managing businesses.", icon: <HiOutlineOfficeBuilding />, color: "bg-primary" },
  { title: "Software Development", desc: "Customized software and tech solutions.", icon: <HiOutlineCode />, color: "bg-blue-600" },
  { title: "Project Management", desc: "Professional PMC and implementation.", icon: <HiOutlineBriefcase />, color: "bg-indigo-500" },
  { title: "Govt Services Facilitation", desc: "Process design and system integration.", icon: <HiOutlineCog />, color: "bg-orange-400" },
  { title: "Export-Import Services", desc: "Buying house and business simplification.", icon: <HiOutlineTruck />, color: "bg-teal-500" },
  { title: "Licensing & Registration", desc: "Assistance in obtaining approvals.", icon: <HiOutlineDocumentText />, color: "bg-sky-500" },
  { title: "Infrastructure Development", desc: "Consultancy in road and building sectors.", icon: <HiOutlineLibrary />, color: "bg-slate-500" },
  { title: "Medical Technology", desc: "Solutions in health and medical services.", icon: <HiOutlineHeart />, color: "bg-rose-500" },
  { title: "Agro Technology", desc: "Innovative agricultural food production.", icon: <FaLeaf />, color: "bg-secondary" },
  { title: "Business Strategy", desc: "Strategy creation through policy analysis.", icon: <HiOutlineTrendingUp />, color: "bg-violet-500" },
  { title: "Design & Development", desc: "Creative design and technology solutions.", icon: <HiOutlinePencilAlt />, color: "bg-fuchsia-500" },
];

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show 5 cards initially
  const initialCount = 5;
  const visibleServices = isExpanded ? services : services.slice(0, initialCount);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Mesh Glow Background matching your brand */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="inline-block px-4 py-1.5 mb-4 text-[10px] font-bold text-primary bg-primary/10 rounded-full border border-primary/20 uppercase tracking-widest"
          >
            How We Can Help
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            <span  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Our Services</span>
          </h2>
        </div>

        {/* GRID LOGIC: 
            Not Expanded: Exactly 5 columns on Desktop (lg).
            Expanded: 4 columns on Desktop (lg).
        */}
        <motion.div 
          layout
          className={`
            grid gap-6 transition-all duration-700
            grid-cols-1 sm:grid-cols-2 
            ${isExpanded ? 'lg:grid-cols-4' : 'lg:grid-cols-5'}
          `}
        >
          <AnimatePresence mode='popLayout'>
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: isExpanded ? 0 : index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] flex flex-col h-full group transition-shadow hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className={`${service.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium mb-6">
                  {service.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] font-black uppercase tracking-tighter text-primary">Read More →</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-4 px-12 py-4 rounded-full font-black text-white bg-gradient-to-r from-primary to-secondary shadow-2xl shadow-primary/30 hover:scale-105 transition-all active:scale-95 cursor-pointer uppercase text-xs tracking-widest"
          >
            {isExpanded ? (
              <>Show Less <HiChevronUp className="text-xl" /></>
            ) : (
              <>View All Services <HiChevronDown className="text-xl group-hover:translate-y-1 transition-transform" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;