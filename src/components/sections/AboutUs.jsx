import { motion } from 'framer-motion';
import { 
  HiOutlineUsers, 
  HiOutlineBadgeCheck, 
  HiOutlineLightBulb,
  HiCheckCircle 
} from 'react-icons/hi';
import { SiCircle } from "react-icons/si";

const cards = [
  {
    title: "Our Mission",
    desc: "Delivering highest quality services to ensure business success",
    icon: <SiCircle />,
    iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    title: "Expert Team",
    desc: "Experienced and skilled professionals dedicated to your success",
    icon: <HiOutlineUsers />,
    iconBg: "bg-gradient-to-br from-indigo-400 to-purple-600",
  },
  {
    title: "Quality First",
    desc: "Maintaining highest standards in every project we undertake",
    icon: <HiOutlineBadgeCheck />,
    iconBg: "bg-gradient-to-br from-fuchsia-400 to-pink-600",
  },
  {
    title: "Innovation",
    desc: "Effective solutions using modern technology and methodologies",
    icon: <HiOutlineLightBulb />,
    iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
  },
];

const serviceItems = [
  "Investment strategy planning and work permit assistance",
  "Customized software and technology solutions",
  "Government services facilitation and system integration",
  "Licensing, registration, and administrative services",
  "Infrastructure development and construction consultancy",
  "Medical and agro technology solutions",
];

const AboutUs = () => {
  return (
    <section className="about-mesh-container py-24 px-6">
      <div className="mesh-glow glow-blue-left"></div>
      <div className="mesh-glow glow-pink-right"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 mb-4 text-[10px] font-bold text-blue-600 bg-blue-50 rounded-full border border-blue-100 uppercase tracking-widest"
          >
            About Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-navy-blue mb-6"
          >
            Who We Are
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-sm md:text-base max-w-4xl mx-auto leading-relaxed"
          >
            We are an integrated consultancy and service organization providing one-stop solutions for business, investment, and services at domestic and international levels. Our mission is to make business establishment, management, and profitability simple and effective for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-50 text-center flex flex-col items-center group"
            >
              <div className={`${card.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center uppercase tracking-widest">Our Service Areas</h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            {serviceItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <HiCheckCircle className="text-white/80 text-2xl shrink-0" />
                <p className="text-[15px] font-medium text-white/90 leading-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;