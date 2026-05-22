import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaLink } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const teamMembers1 = [
  { 
    name: "Mohammad Sirajul Islam", 
    role: "MANAGING DIRECTOR", 
    image: "/Images/managing-director.jpeg"
  },
];

const teamMembers2 = [
  { 
    name: "Israt Jahan", 
    role: "DIRECTOR", 
    image: "/Images/director.jpeg",
  },
  { 
    name: "Sarmily Biswas", 
    role: "HEAD OF BUSINESS COMMUNICATION", 
    image: "/Images/business-communication-head.jpeg",
  },
  { 
    name: "Md. Raisul Islam", 
    role: "CHIEF TECHNOLOGY OFFICER", 
    image: "/Images/chief-technology-officer.jpg",
  },
];

// Reusable Card Component
const MemberCard = ({ member, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="bg-[#1b143e] p-10 flex flex-col items-center text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group border border-white/5 h-full"
  >
    {/* Profile Image with Sky Blue Border */}
    <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-1 mb-8 relative">
      <div className="absolute inset-0 rounded-full border border-white/10 scale-110 group-hover:border-secondary transition-colors duration-500" />
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover rounded-full transition-all duration-700"
      />
    </div>

    {/* Name - Brand White */}
    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
      {member.name}
    </h3>
    
    {/* Role - Uppercase with wide tracking */}
    <p className="text-[10px] font-black text-slate-400 tracking-[0.4em] mb-8 uppercase">
      {member.role}
    </p>

    {/* Action Button - Brand Lime Green */}
    <button className="mt-auto bg-secondary text-slate-900 px-8 py-3 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all mb-10 cursor-pointer shadow-lg active:scale-95">
      Download Profile
    </button>

    {/* Social Icons */}
    <div className="flex gap-4">
      <div className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-md">
        <FaEnvelope className="text-white text-sm" />
      </div>
      <div className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-md">
        <FaLinkedinIn className="text-white text-sm" />
      </div>
      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-md">
        <FaLink className="text-slate-900 text-sm" />
      </div>
    </div>
  </motion.div>
);

const TeamPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* 1. HEADER SECTION */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-slate-950">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
          alt="Office"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b143e] via-[#1b143e]/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,194,254,0.15)_0%,transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
              Meet the <br/>
              <span className="text-primary">Team</span>
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:border-l border-primary/30 md:pl-10">
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-md">
              The team at <span className="text-secondary font-bold">Bridgeline</span> brings together expertise and global experience to drive your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TEAM SECTIONS CONTAINER */}
      <section className="max-w-7xl mx-auto px-8 -mt-20 pb-32 relative z-20">
        
        {/* ROW 1: Managing Director (Centered) */}
        <div className="flex justify-center mb-16">
          <div className="w-full md:w-[450px]">
            {teamMembers1.map((member, idx) => (
              <MemberCard key={member.name} member={member} idx={idx} />
            ))}
          </div>
        </div>

        {/* ROW 2: Rest of the Team (3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {teamMembers2.map((member, idx) => (
            <MemberCard key={member.name} member={member} idx={idx + 1} />
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;