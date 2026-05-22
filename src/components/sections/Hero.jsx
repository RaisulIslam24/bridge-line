import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles } from 'react-icons/hi';

const stats = [
  { label: 'Projects Completed', value: '500+', color: 'text-cyan-500' },
  { label: 'Happy Clients', value: '200+', color: 'text-purple-600' },
  { label: 'Countries Served', value: '15+', color: 'text-pink-500' },
  { label: 'Support Available', value: '24/7', color: 'text-orange-500' },
];

const Hero = () => {
  return (
    <section className="mesh-gradient-container pt-32 pb-20 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-blue-100 shadow-sm mb-8"
        >
          <HiSparkles className="text-blue-500" />
          <span className="text-sm font-semibold text-blue-600 tracking-wide">
            Your One-Stop Business Solution
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]"
        >
          Bridging Your Business to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Global Success
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-10"
        >
          Comprehensive consultancy and services for domestic and international business, 
          investment, and operations. We make business establishment, management, and 
          profitability simple and effective.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 cursor-pointer"
          >
            Get Started <HiArrowRight />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-white/40 backdrop-blur-md border-2 border-blue-500 text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors cursor-pointer"
          >
            Learn More
          </motion.button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white shadow-lg shadow-slate-200/50 flex flex-col items-center justify-center animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className={`text-4xl font-black ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-slate-500 font-semibold text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;