import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaLink, FaTimes, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const teamMembers1 = [
  { 
    name: "Mohammad Sirajul Islam", 
    role: "MANAGING DIRECTOR", 
    image: "/Images/managing-director.jpeg",
    detailedBio: [
      "Mr. Mohammad Sirajul Islam is an experienced technology consultant and e-Governance specialist who has played a significant role in the digital transformation initiatives of Bangladesh. In 2009, he began his professional journey in the technology sector through the development of a comprehensive educational database project at Bangladesh Bureau of Educational Information and Statistics (BANBEIS).",
      "In July of the same year, he became involved in the digital transformation of Bangladesh’s Hajj management system under the Ministry of Religious Affairs. Through his strategic technology consultation and planning, traditional operations evolved into a modern and integrated e-Hajj Management System.",
      "Mr. Islam played a key role in the development and implementation of the Hajj Management Information System (HMIS), digitally transforming multiple critical aspects including:"
    ],
    highlights: [
      "Creation of a comprehensive digital database of Hajj pilgrims",
      "Integration of Hajj agencies into a centralized digital platform",
      "Coordination of police clearance through the Special Branch (SB)",
      "Flight scheduling and ticket management for pilgrims",
      "Saudi visa processing and visa lodgment integration",
      "Accommodation allocation management in Makkah and Madinah",
      "Integration with immigration systems for faster processing",
      "Tracking and assistance for lost pilgrims",
      "Medical support and emergency assistance services",
      "Passport and travel coordination for return journeys"
    ],
    conclusion: "With more than 18 years of experience, his expertise in digital transformation, system integration, and e-Governance has made a remarkable contribution to the modernization of Bangladesh’s Hajj management system.",
    email: "md@bridgeline.com",
    linkedin: "#"
  },
];

const teamMembers2 = [
  { 
    name: "Israt Jahan", 
    role: "DIRECTOR", 
    image: "/Images/director.jpeg",
    bio: "Israt specializes in operational excellence and strategic partnerships, focusing on building sustainable business models.",
    email: "israt@bridgeline.com",
    linkedin: "#"
  },
  { 
    name: "Sarmily Biswas", 
    role: "HEAD OF BUSINESS COMMUNICATION", 
    image: "/Images/business-communication-head.jpeg",
    bio: "Sarmily leads global outreach and corporate communications, ensuring Bridgeline's message resonates clearly across borders.",
    email: "sarmily@bridgeline.com",
    linkedin: "#"
  },
  { 
    name: "Md. Raisul Islam", 
    role: "CHIEF TECHNOLOGY OFFICER", 
    image: "/Images/chief-technology-officer.jpg",
    bio: "Md. Raisul Islam oversees technical architecture, pioneering cutting-edge technologies to streamline business processes.",
    email: "raisul@bridgeline.com",
    linkedin: "#"
  },
];

const MemberCard = ({ member, idx, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="bg-[#1b143e] p-10 flex flex-col items-center text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group border border-white/5 h-full"
  >
    <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-1 mb-8 relative">
      <div className="absolute inset-0 rounded-full border border-white/10 scale-110 group-hover:border-secondary transition-colors duration-500" />
      <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full transition-all duration-700" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">{member.name}</h3>
    <p className="text-[10px] font-black text-slate-400 tracking-[0.4em] mb-8 uppercase">{member.role}</p>
    <button onClick={() => onOpen(member)} className="mt-auto bg-secondary text-slate-900 px-8 py-3 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all mb-10 cursor-pointer shadow-lg active:scale-95">View Details</button>
    <div className="flex gap-4">
      <div className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"><FaEnvelope className="text-white text-sm" /></div>
      <div className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"><FaLinkedinIn className="text-white text-sm" /></div>
      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"><FaLink className="text-slate-900 text-sm" /></div>
    </div>
  </motion.div>
);

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (selectedMember) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedMember]);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      
      <section className="relative h-[450px] flex items-center overflow-hidden bg-slate-950">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Office" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b143e] via-[#1b143e]/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">Meet the <br/><span className="text-primary">Team</span></motion.h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-md md:border-l border-primary/30 md:pl-10">
            The team at <span className="text-secondary font-bold">Bridgeline</span> brings together expertise and global experience to drive your success.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 -mt-20 pb-32 relative z-20">
        <div className="flex justify-center mb-16">
          <div className="w-full md:w-[450px]">
            {teamMembers1.map((m, i) => <MemberCard key={m.name} member={m} idx={i} onOpen={setSelectedMember} />)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {teamMembers2.map((m, i) => <MemberCard key={m.name} member={m} idx={i+1} onOpen={setSelectedMember} />)}
        </div>
      </section>

      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMember(null)} className="absolute inset-0 bg-[#0a051a]/95 backdrop-blur-md" />
            
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-6xl bg-[#1b143e] rounded-3xl shadow-2xl overflow-hidden border border-white/10 max-h-[90vh] flex flex-col md:flex-row">
              
              <button onClick={() => setSelectedMember(null)} className="absolute top-6 right-6 text-white/50 hover:text-white z-50 p-2 cursor-pointer"><FaTimes size={24} /></button>

              <div className="w-full md:w-2/5 h-[300px] md:h-auto sticky top-0">
                <img src={selectedMember.image} className="w-full h-full object-cover" alt={selectedMember.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b143e] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 overflow-y-auto custom-scrollbar">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedMember.name}</h2>
                <p className="text-primary font-black tracking-[0.3em] text-[10px] md:text-xs mb-8 uppercase">{selectedMember.role}</p>
                <div className="w-16 h-1 bg-secondary mb-10" />

                <div className="space-y-6 text-slate-300 text-base md:text-[17px] leading-relaxed font-medium">
                  {selectedMember.detailedBio ? (
                    <>
                      {selectedMember.detailedBio.map((para, i) => <p key={i}>{para}</p>)}
                      
                      <ul className="grid grid-cols-1 gap-3 py-4">
                        {selectedMember.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <FaCheckCircle className="text-secondary mt-1 shrink-0" size={16} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="pt-4 border-t border-white/5">{selectedMember.conclusion}</p>
                    </>
                  ) : (
                    <p className="italic">"{selectedMember.bio}"</p>
                  )}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex gap-8 items-center">
                   <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Connect:</span>
                   <a href={`mailto:${selectedMember.email}`} className="text-white hover:text-primary transition-all scale-125"><FaEnvelope /></a>
                   <a href={selectedMember.linkedin} className="text-white hover:text-primary transition-all scale-125"><FaLinkedinIn /></a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default TeamPage;