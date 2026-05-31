import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { HiOutlineClock, HiX, HiOutlineArrowRight } from 'react-icons/hi';

const newsData = [
  {
    id: 1,
    title: "Bridgeline Participates in Landmark Agreement Signing Ceremony for Integrated Business Start-up Services",
    date: "April 9, 2025",
    image: "/Images/landmark-agreement-signing.jpeg",
    content: `Mr. Mohammad Sirajul Islam, Managing Director of Bridgeline Global Solutions, participated in the prestigious Bangladesh International Investment Summit 2025, held at InterContinental Dhaka. The three-day summit brought together representatives, investors, policymakers, and business leaders from more than 100 countries, creating a global platform for dialogue, collaboration, and investment opportunities in Bangladesh. The event showcased the country's investment potential and highlighted key initiatives aimed at fostering sustainable economic growth and international partnerships. During the summit, Mr. Sirajul Islam played a significant role in supporting the Bangladesh Investment Development Authority (BIDA) in various high-level discussions and engagement sessions. His contributions were particularly valuable in facilitating interactions with international delegates and supporting the successful hosting of foreign guests throughout the event. The summit served as an important milestone in strengthening Bangladesh’s position as an attractive investment destination and reinforcing collaboration between public and private sector stakeholders.`
  },
  {
    id: 2,
    title: "Managing Director of Bridgeline Participates in Bangladesh International Investment Summit 2025",
    date: "April 9, 2025 ",
    image: "/Images/investment-summit.jpeg",
    content: `Mr. Mohammad Sirajul Islam, Managing Director of Bridgeline Global Solutions, participated in the prestigious Bangladesh International Investment Summit 2025, held at InterContinental Dhaka.
	The three-day summit brought together representatives, investors, policymakers, and business leaders from more than 100 countries, creating a global platform for dialogue, collaboration, and investment opportunities in Bangladesh. The event showcased the country's investment potential and highlighted key initiatives aimed at fostering sustainable economic growth and international partnerships.
	During the summit, Mr. Sirajul Islam played a significant role in supporting the Bangladesh Investment Development Authority (BIDA) in various high-level discussions and engagement sessions. His contributions were particularly valuable in facilitating interactions with international delegates and supporting the successful hosting of foreign guests throughout the event.
	The summit served as an important milestone in strengthening Bangladesh’s position as an attractive investment destination and reinforcing collaboration between public and private sector stakeholders.
  `
  },
  {
    id: 3,
    title: "Industry-Academia Collaboration with MIST",
    date: "March 12, 2025",
    image: "/Images/mist.jpeg",
    content: `Mr. Mohammad Sirajul Islam, Managing Director of Bridgeline Global Solutions, participated in a collaboration agreement signing ceremony with the Military Institute of Science and Technology (MIST), aimed at strengthening industry-academia cooperation and fostering the development of future technology professionals.
	The partnership focuses on creating opportunities for students of the Department of Computer Science and Engineering (CSE) to gain practical industry exposure, enhance their technological skills, and better align their academic learning with real-world industry requirements. The initiative also emphasizes scholarship support for talented students, encouraging academic excellence and innovation in the field of technology.
	Following the signing ceremony Mr. Mohammad Sirajul Islam was honored with a commemorative crest in recognition of his valuable contributions and continued support to MIST. The crest was presented by the then Commandant of MIST, Major General Md. Nasim Parvez, BSP, ndc, awf, psc, acknowledging his efforts in promoting industry-academia collaboration and technological advancement.
	`
  },
  {
    id: 4,
    title: "Training Program Conducted on BIDA One Stop Service (OSS) Platform for Leading Corporate Executives",
    date: "February 22, 2025 ",
    image: "Images/bida-oss.jpeg",
    content: `To enhance the utilization of the Bangladesh Investment Development Authority (BIDA) One Stop Service (OSS) platform and facilitate seamless online service delivery for investors, a specialized training program was organized for senior officials from 60 renowned organizations across Bangladesh.
	The training aimed to equip participants with the knowledge and practical skills required to effectively access and utilize the OSS platform, enabling investors to submit applications and obtain essential government services online from anywhere, with greater efficiency and convenience.
	The session was conducted by Mr. Mohammad Sirajul Islam, OSS Consultant of BIDA and current Managing Director of Bridgeline Global Solutions. Drawing upon his extensive experience in digital transformation and investment facilitation, Mr. Islam provided comprehensive guidance on the features, functionalities, and benefits of the OSS platform.
	The program was attended by Mr. Md. Humayun Kabir, Executive Member of BIDA, and Additional Secretary to the Government of Bangladesh, who emphasized the importance of digital service delivery in improving the country's investment climate and ease of doing business.
	The initiative reflects BIDA’s ongoing commitment to promoting digital transformation and ensuring that investors can access government services through a streamlined, transparent, and investor-friendly online ecosystem.
  `
  },
  {
    id: 5,
    title: "Bangladesh Tourism Board Advances Digital Transformation Initiative for Tour Operator and Tour Guide Registration",
    date: "December 3, 2024",
    image: "/Images/bangladesh-tourism-board.jpeg",
    content: `The Bangladesh Tourism Board has undertaken a significant digital transformation initiative aimed at strengthening and modernizing the country’s tourism sector through the development of an integrated Tour Operator and Tour Guide Registration System.
	The initiative was conceptualized and proposed by Mr. Mohammad Sirajul Islam, Managing Director of Bridgeline Global Solutions, with the objective of creating a centralized digital platform to streamline the registration, management, and regulation of tour operators and tour guides across Bangladesh. The system is expected to enhance transparency, improve service quality, and support the sustainable growth of the tourism industry.
	Under the leadership of Mr. Abu Taher Muhammad Jaber, Chief Executive Officer of the Bangladesh Tourism Board, the organization has taken proactive steps toward the successful implementation of the project. The initiative reflects a shared commitment to leveraging technology to strengthen institutional efficiency and improve service delivery within the tourism sector.
	On this occasion, representatives from Bridgeline Global Solutions met with the Bangladesh Tourism Board to review the project's progress and extend congratulations to Mr. Abu Taher Muhammad Jaber on his recent promotion to Grade-1, a recognition of his outstanding contributions to the development of Bangladesh’s tourism industry.
	`
  },
  {
    id: 6,
    title: "Progress Review Meeting Held for Registered Industrial Project Registration Data Archiving Project",
    date: "28 November 2024",
    image: "Images/industrial-project-registration.jpeg",
    content: `A progress review meeting was held for the Registered Industrial Project Registration Data Archiving Project of the Bangladesh Investment Development Authority (BIDA).
	During the meeting, Mr. Mohammad Sirajul Islam, Managing Director of Bridgeline and BIDA OSS Consultant, delivered his remarks on the project's implementation progress, achievements, and future action plans.
	The meeting was attended by Mr. Chowdhury Ashik Mahmud Bin Harun (Ashik Chowdhury), Executive Chairman of BIDA, along with other senior officials and stakeholders. The participants reviewed the current status of the project and discussed strategic initiatives to ensure the successful completion of the data archiving activities in support of BIDA’s digital transformation and service modernization efforts.
	`
  },
  {
    id: 7,
    title: "Bridgeline Managing Director Conducts Professional Training Sessions on Company Registration and Return Filing",
    date: "1 October 2024",
    image: "Images/company-registration.jpeg",
    content: `Mr. Mohammad Sirajul Islam, Managing Director of Bridgeline, served as a regular resource person and session facilitator in the training workshop titled “Certificate Course for Enhancing Professional Skills for Registration and Return Filing”, organized by the Bangladesh Foreign Trade Institute (BFTI).
	The training program was designed to develop a pool of skilled professionals capable of efficiently handling company registration and return filing processes with the Registrar of Joint Stock Companies and Firms (RJSC). Through a series of interactive sessions, Mr. Islam shared his practical expertise and professional insights on regulatory compliance, corporate registration procedures, and best practices in return filing.
	The initiative reflects a collaborative effort to strengthen professional capacity and enhance the quality of corporate services in Bangladesh by equipping participants with the knowledge and skills required to navigate the country's business registration and compliance framework effectively.
	`
  },
];

const NewsPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const marqueeItems = useMemo(() => {
    const sorted = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
    return [...sorted, ...sorted];
  }, []);

  return (
    <div className="bg-[#f8fbff] min-h-screen font-sans overflow-x-hidden">
      <Navbar />

      <section className="relative h-[400px] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b143e] via-[#1b143e]/80 to-transparent z-10" />
        <img src="https://images.unsplash.com/photo-1504711432869-0010372079a7?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="News Hero" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#bdeb0f] font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Latest Updates</span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">
              Insights & <br/><span className="text-[#00c2fe]">Latest News</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="mb-12 px-8 max-w-7xl mx-auto flex justify-between items-end">
            <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Market Intelligence</h2>
                <p className="text-slate-500 text-sm font-medium mt-1">Stay updated with our latest project successes and industry news.</p>
            </div>
            <div className="hidden md:flex gap-2">
                <div className="w-12 h-1 bg-[#00c2fe]"></div>
                <div className="w-4 h-1 bg-[#bdeb0f]"></div>
            </div>
        </div>

        <div 
          className="relative flex overflow-hidden group py-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: isPaused ? 0 : ["0%", "-50%"] }}
            transition={{ 
                x: { 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    duration: 30, 
                    ease: "linear" 
                } 
            }}
          >
            {marqueeItems.map((news, idx) => (
			<div 
				key={idx} 
				className="w-[350px] md:w-[420px] inline-block px-4 shrink-0"
			>
				<div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group/card flex flex-col h-full">
				
				<div className="h-[200px] md:h-[220px] overflow-hidden relative shrink-0">
					<img 
					src={news.image} 
					className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
					alt={news.title} 
					/>
					<div className="absolute bottom-3 left-4 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
					<HiOutlineClock className="text-[#00c2fe] text-xs" />
					<span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">{news.date}</span>
					</div>
				</div>

				<div className="flex-1 p-6 md:p-8 flex flex-col whitespace-normal bg-white">
					
					<h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight mb-3 group-hover/card:text-[#00c2fe] transition-colors line-clamp-2">
					{news.title}
					</h3>

					<p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
					{news.summary}
					</p>

					<button 
						onClick={() => setSelectedNews(news)}
						className="flex items-center gap-3 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] group/btn cursor-pointer"
					>
						Read Full News 
						<span className="w-8 h-8 rounded-full bg-[#bdeb0f] flex items-center justify-center text-slate-900 transition-all duration-300 group-hover/btn:w-12 group-hover/btn:bg-[#00c2fe] group-hover/btn:text-white">
						<HiOutlineArrowRight size={16} />
						</span>
					</button>
				</div>

				</div>
			</div>
			))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedNews(null)} className="absolute inset-0 bg-[#001a2c]/90 backdrop-blur-md" />
            
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }} 
                animate={{ scale: 1, opacity: 1, y: 0 }} 
                exit={{ scale: 0.9, opacity: 0, y: 20 }} 
                className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button onClick={() => setSelectedNews(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 z-50 p-2 bg-white rounded-full shadow-lg transition-all cursor-pointer"><HiX size={24} /></button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selectedNews.image} className="w-full h-full object-cover" alt="" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar bg-[#fcfdff]">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-1 bg-[#bdeb0f]"></span>
                    <span className="text-[10px] font-black text-[#00c2fe] uppercase tracking-[0.3em]">{selectedNews.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
                    {selectedNews.title}
                </h2>
                <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                    <p>{selectedNews.content}</p>
                    <p>For more detailed information regarding this initiative or to consult with our specialists, please contact our corporate office.</p>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100">
                    <button onClick={() => setSelectedNews(null)} className="bg-gradient-to-r from-[#00c2fe] to-[#bdeb0f] text-slate-900 px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
                        Back to News
                    </button>
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

export default NewsPage;