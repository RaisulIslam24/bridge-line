import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Research Consulting Ltd
            </span>

            <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tight">
              About Us
            </h2>

            <div className="space-y-6 text-slate-600 text-base md:text-[17px] leading-relaxed font-medium">
              <p>
                We are based at the University of Nottingham Innovation Park and work with 
                a growing set of clients in the UK and internationally.
              </p>
              <p>
                Founded in 2013, we combine breadth of expertise with depth of insight to support 
                stakeholders in the global research community.
              </p>
              <p>
                Our consultancy and research methods are designed to produce high quality reports 
                and advice to clients, focused on delivering actionable insights.
              </p>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => navigate('/about')}
                className="px-10 py-3.5 bg-secondary text-slate-900 font-black text-sm uppercase tracking-widest rounded-sm shadow-lg shadow-secondary/20 hover:brightness-110 transition-all cursor-pointer"
              >
                Meet Our Team
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full h-[400px] md:h-[550px] overflow-hidden rounded-tl-sm rounded-tr-sm rounded-bl-sm rounded-br-[120px] md:rounded-br-[180px] shadow-2xl">
              <img 
                src="https://t4.ftcdn.net/jpg/00/71/74/29/360_F_71742923_SxOK3IzhX1Vv09O70REwisyWnNFfJZMb.jpg" 
                alt="Office Building" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-0 rounded-full blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;