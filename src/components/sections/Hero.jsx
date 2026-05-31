import { motion } from 'framer-motion';
import { 
  HiOutlineMagnifyingGlass, 
  HiOutlineLightBulb, 
  HiOutlinePresentationChartLine, 
  HiOutlineUserGroup 
} from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

import { HiArrowNarrowRight } from 'react-icons/hi';

const cards = [
  {
    title: "Consultancy",
    desc: "Providing professional guidance to navigate complex business landscapes and global infrastructure needs.",
    icon: <HiOutlineUserGroup />,
    color: "bg-[#84cc16]", 
    textColor: "text-slate-900",
    btnStyle: "border-slate-900/20 text-slate-900 hover:bg-slate-900 hover:text-white"
  },
  {
    title: "Development",
    desc: "Enabling and assessing impact from research, innovation, and sustainable development goals.",
    icon: <HiOutlinePresentationChartLine />,
    color: "bg-[#0ea5e9]", 
    textColor: "text-slate-900",
    btnStyle: "border-slate-900/20 text-slate-900 hover:bg-slate-900 hover:text-white"
  },
  {
    title: "Training",
    desc: "Enhancing strategy development for global clients, supporting policy and operational change through data.",
    icon: <HiOutlineLightBulb />,
    color: "bg-[#84cc16]", 
    textColor: "text-slate-900",
    btnStyle: "border-slate-900/20 text-slate-900 hover:bg-slate-900 hover:text-white"
  },
  {
    title: "Research",
    desc: "Supporting clients by delivering deep insight into their target work environments and scholarly communication.",
    icon: <HiOutlineMagnifyingGlass />,
    color: "bg-[#0ea5e9]", 
    textColor: "text-slate-900",
    btnStyle: "border-slate-900/20 text-slate-900 hover:bg-slate-900 hover:text-white"
  },
];

const Hero = () => {
	const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col font-sans overflow-x-hidden">
      
      <div className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a2c]/95 via-[#0c4a6e]/90 to-[#0ea5e9]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,13,26,0.5)_100%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter drop-shadow-lg">
                Bridging Your Business to <br />
                <span className="text-[#84cc16]">Global Success</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 md:space-y-10"
            >
              <p className="text-lg md:text-2xl text-white font-bold leading-relaxed max-w-xl">
                We are a mission-driven business working to improve the 
                effectiveness and impact of research, knowledge sharing, 
                and sustainable scholarly development.
              </p>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-10 md:px-12 py-3 md:py-4 bg-white text-[#0ea5e9] font-black text-sm uppercase tracking-[0.25em] rounded-sm hover:bg-[#84cc16] hover:text-slate-900 transition-all cursor-pointer shadow-2xl"
              >
                About Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full lg:max-w-7xl mx-auto px-0 md:px-4 -mt-24 md:-mt-32 pb-24">
		<div className="flex overflow-x-auto md:grid md:grid-cols-4 shadow-2xl snap-x snap-mandatory no-scrollbar bg-[#0ea5e9] gap-0">
			{cards.map((card, idx) => (
			<motion.div
				key={idx}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ 
					delay: idx * 0.1, 
					duration: 0.5, 
					ease: "easeOut"
				}}
				className={`
				${card.color} 
				w-full
				md:min-w-0 
				p-8 md:p-12 
				min-h-[420px] md:min-h-[480px] 
				flex flex-col 
				border-r border-slate-900/5 
				last:border-0 
				group cursor-default
				relative
				`}
				style={{ 
				WebkitFontSmoothing: "antialiased",
				willChange: "transform",
				transform: "translate3d(0,0,0)", 
				backfaceVisibility: "hidden",
				}}
			>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/40">
                {card.icon}
              </div>

              <h3 className={`text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tight ${card.textColor}`}>
                {card.title}
              </h3>
              
              <p className={`text-sm md:text-[15px] leading-relaxed font-bold opacity-75 mb-8 md:mb-10 ${card.textColor}`}>
				{card.desc}
			  </p>

              <div className="mt-auto">
                <button onClick={() => navigate('/projects')} className={`inline-flex items-center gap-2 px-6 py-2 border-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${card.btnStyle}`}>
                  Read More <HiArrowNarrowRight className="text-lg" />
                </button>
              </div>

              <div className="mt-8 w-10 h-1 bg-slate-900/10 hidden md:block group-hover:w-full group-hover:bg-slate-900/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;