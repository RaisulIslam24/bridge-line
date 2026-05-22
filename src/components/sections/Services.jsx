import { motion } from 'framer-motion';
import { 
  HiOutlineGlobeAlt, HiOutlineOfficeBuilding, HiOutlineCode, 
  HiOutlineBriefcase, HiOutlineCog, HiOutlineTruck, 
  HiOutlineDocumentText, HiOutlineLibrary, HiOutlineHeart, HiOutlineTrendingUp, HiOutlinePencilAlt 
} from 'react-icons/hi';
import { FaLeaf } from "react-icons/fa";

const services = [
  {
    title: "International Investment Consulting",
    desc: "Investment strategy planning and work permit assistance for domestic and international markets",
    icon: <HiOutlineGlobeAlt />,
    color: "bg-cyan-500",
  },
  {
    title: "Business Setup & Management",
    desc: "Complete guidance for starting, managing, and ensuring profitability of businesses in Bangladesh",
    icon: <HiOutlineOfficeBuilding />,
    color: "bg-violet-500",
  },
  {
    title: "Software Development",
    desc: "Customized software, web applications, and cutting-edge technology solutions",
    icon: <HiOutlineCode />,
    color: "bg-pink-500",
  },
  {
    title: "Project Management Consultancy",
    desc: "Professional PMC services and expert project implementation guidance",
    icon: <HiOutlineBriefcase />,
    color: "bg-rose-500",
  },
  {
    title: "Government Services Facilitation",
    desc: "Business process design, system development, and software integration support",
    icon: <HiOutlineCog />,
    color: "bg-orange-400",
  },
  {
    title: "Export-Import Services",
    desc: "Buying house operations and business activity simplification",
    icon: <HiOutlineTruck />,
    color: "bg-teal-500",
  },
  {
    title: "Licensing & Registration",
    desc: "Assistance in obtaining necessary licenses, certificates, registrations, and approvals",
    icon: <HiOutlineDocumentText />,
    color: "bg-sky-500",
  },
  {
    title: "Infrastructure Development",
    desc: "Expert consultancy in road construction and building sectors",
    icon: <HiOutlineLibrary />,
    color: "bg-slate-500",
  },
  {
    title: "Medical Technology",
    desc: "Modern solutions in health technology and medical services sector",
    icon: <HiOutlineHeart />,
    color: "bg-pink-600",
  },
  {
    title: "Agro Technology",
    desc: "Innovative services in agricultural technology and food production",
    icon: <FaLeaf />,
    color: "bg-emerald-500",
  },
  {
    title: "Business Strategy",
    desc: "Effective business strategy creation through government policy analysis",
    icon: <HiOutlineTrendingUp />,
    color: "bg-indigo-500",
  },
  {
    title: "Design & Development",
    desc: "Creative design and technology solutions combined together",
    icon: <HiOutlinePencilAlt />,
    color: "bg-fuchsia-500",
  },
];

const Services = () => {
  return (
    <section className="services-mesh-container py-24 px-6 lg:px-12">
      <div className="mesh-glow glow-pink"></div>
      <div className="mesh-glow glow-purple"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-[10px] font-bold text-blue-600 bg-blue-50/50 rounded-full border border-blue-100 uppercase tracking-widest shadow-sm"
          >
            What We Offer
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-navy-blue mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto"
          >
            Your trusted partner for integrated consultancy and services
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)" }}
              className="bg-white p-8 rounded-[2.5rem] border border-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              <div className={`${service.color} w-11 h-11 rounded-xl flex items-center justify-center text-white text-xl mb-6 shadow-lg shadow-black/5`}>
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-400 text-[13px] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;