import { motion } from 'framer-motion';
import { HiChevronRight } from 'react-icons/hi';

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Container: Flexbox for side-by-side layout */}
        <div className="flex flex-col lg:flex-row items-stretch shadow-2xl rounded-sm overflow-hidden">
          
          {/* LEFT SIDE: The Lifestyle Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 relative min-h-[300px] md:min-h-[450px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working together" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle overlay to match the glass reflection in the design */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
          </motion.div>

          {/* RIGHT SIDE: The Corporate Blue Content Box */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/5 bg-[#00338d] p-10 md:p-16 flex flex-col justify-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              Interested in a career at Bridgeline?
            </h2>
            
            <p className="text-lg leading-relaxed mb-10 opacity-90">
              We want to support you on your journey to create an impactful career. 
              Join us and you too can do work that matters.
            </p>

            <div className="flex">
              <button className="group bg-white text-[#00338d] px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-slate-100 transition-all cursor-pointer shadow-lg active:scale-95">
                Find your next opportunity
                <HiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Careers;