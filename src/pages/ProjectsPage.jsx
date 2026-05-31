import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  HiChevronDown, HiCheckCircle, HiOutlineOfficeBuilding, 
  HiOutlineLibrary, HiOutlineGlobe, HiOutlineChip, HiX
} from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import ReCAPTCHA from "react-google-recaptcha";

// 1. Import the Phone Input and its default styles
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

// --- HELPER COMPONENT: Image Fallback ---
const LogoFallback = ({ src, name, sizeClass, textClass }) => {
  const [error, setError] = useState(false);
  const initial = name ? name.charAt(0).toUpperCase() : 'B';
  if (!src || error) {
    return (
      <div className={`${sizeClass} rounded-xl bg-gradient-to-br from-[#00c2fe]/10 to-[#bdeb0f]/10 border border-[#00c2fe]/20 flex items-center justify-center font-black shrink-0`}>
        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#00c2fe] to-[#bdeb0f] ${textClass}`}>{initial}</span>
      </div>
    );
  }
  return (
    <div className={`${sizeClass} rounded-xl bg-slate-50 p-1.5 flex items-center justify-center border border-slate-100 shadow-inner overflow-hidden shrink-0`}>
      <img src={src} alt={name} className="w-full h-full object-contain" onError={() => setError(true)} />
    </div>
  );
};

// --- DATA ---
const clientProjects = [
  { client: "Bangladesh Investment Development Authority (BIDA)", clientLogo: "/Logos/bida.jpeg", tag: "Investment Development", color: "border-[#00c2fe]", systems: [{ name: "One Stop Service (OSS)", logo: "/Logos/bida-oss.jpeg" }, { name: "BanglaBiz", logo: "/Logos/banglabiz.jpeg" }, { name: "Investor Relationship Management (IRMS)", logo: "" }, { name: "Companies Data Archiving System", logo: null }] },
  { client: "Bangladesh Economic Zones Authority (BEZA)", clientLogo: "/Logos/beza.jpeg", tag: "Economic Zones", color: "border-[#bdeb0f]", systems: [{ name: "One Stop Service (OSS)", logo: null }] },
  { client: "Bangladesh Export Processing Zones Authority (BEPZA)", clientLogo: "/Logos/bepza.jpeg", tag: "Export Processing", color: "border-[#1b143e]", systems: [{ name: "Digital Application Processing (DAPS)", logo: null }] },
  { client: "Bangladesh Hi-Tech Park Authority (BHTPA)", clientLogo: "/Logos/bhtpa.jpeg", tag: "Technology Parks", color: "border-[#00c2fe]", systems: [{ name: "One Stop Service (OSS)", logo: null }] },
  { client: "Bangladesh Small & Cottage Industries (BSCIC)", clientLogo: "/Logos/bscic.jpeg", tag: "SME & Cottage Industries", color: "border-slate-300", systems: [{ name: "One Stop Service (OSS)", logo: null }] }
];

const serviceCategories = [
  { title: "Business Setup & Corporate Services", icon: <HiOutlineOfficeBuilding />, description: "End-to-end support for investors and corporations to establish and operate successfully in Bangladesh.", items: ["Company Registration in Bangladesh", "Trade License Processing", "TIN Registration and Income Tax Services", "Foreign Company Establishment (Branch, Liaison & Representative Offices)", "Import Registration Certificate (IRC)", "Export Registration Certificate (ERC)", "Foreign Loan Approval & Compliance Services", "Corporate Bank Account Assistance", "Foreign Investor Visa & Work Permit Processing", "E-Visa, PI Visa, A-3 Visa, E-1 Visa, Visa on Arrival, and Business Visa Services", "Remittance Approval and Compliance Services", "Export-Import Consultancy", "All Types of Business Licensing and Regulatory Approvals"] },
  { title: "Infrastructure & Engineering Consultancy", icon: <HiOutlineLibrary />, description: "Professional engineering guidance for large-scale physical and electrical infrastructure projects.", items: ["Road and Bridge Construction Consultancy", "Building Technology and Engineering Solutions", "Electrical and Electronic Goods Consultancy"] },
  { title: "Travel, Tourism & Hajj Management", icon: <HiOutlineGlobe />, description: "Specialized management and solutions for the hospitality and religious pilgrimage sectors.", items: ["Hajj Management Consultancy Services", "Travel and Tourism Solutions", "Hotel Management Consultancy", "Visa Processing for Tourism"] },
  { title: "ICT & Telecommunications Consultancy", icon: <HiOutlineChip />, description: "Expert regulatory licensing and technical consultancy for the digital and telecom landscape.", items: ["Internet Service Provider (ISP) Licensing and Consultancy", "BPO & Call Center Registration Certificate Services", "Nationwide Telecommunication Transmission Network (NTTN) Services", "International Internet Gateway (IIG) Licensing Support", "International Gateway (IGW) Services", "Submarine Cable Services", "Tower Sharing Services", "Mobile Number Portability (MNP) Services", "Broadband Wireless Access (BWA) Services", "Satellite Communication Services", "Vehicle Tracking (VTS)", "Telecommunication Value Added Services (TVAS)",
"Internet Protocol Telephony Service Provider (IPTSP) Services"] }
];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [openAccordion, setOpenAccordion] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [termsError, setTermsError] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null); 

  const [formData, setFormData] = useState({
    name: '', designation: '', email: '', phone: '', address: '', description: '', acknowledge: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.toLowerCase().endsWith("@gmail.com")) {
      setEmailError("Only @gmail.com addresses are accepted.");
      return;
    }
    if (!formData.acknowledge) {
      setTermsError(true);
      return;
    }
	if (!captchaToken) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }
    setEmailError("");
	setTermsError(false);
    setIsSubmitted(true);
    setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', address: '', description: '' });
    }, 3000);
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <div className="bg-[#f8fbff] min-h-screen font-sans">
      <Navbar />
      <section className="relative h-[380px] flex items-center overflow-hidden bg-slate-950">
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b143e] via-[#1b143e]/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#bdeb0f] font-black tracking-[0.4em] text-[10px] uppercase mb-4 block text-center md:text-left">Institutional Excellence</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase min-h-[1.2em] text-center md:text-left">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        {activeTab === 'projects' ? (<>Our Consulting <br /><span className="text-[#00c2fe]">Success Stories</span></>) : (<>Comprehensive <br /><span className="text-[#00c2fe]">Consultancy Services</span></>)}
                    </motion.div>
                </AnimatePresence>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="max-w-7xl mx-auto px-8 -mt-8 relative z-30">
        <div className="bg-white p-1.5 rounded-full shadow-xl flex w-fit border border-slate-100 mx-auto md:mx-0">
          {['projects', 'services'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-10 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer relative z-10 ${activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}>
              {activeTab === tab && <motion.div layoutId="activeTab" className="absolute inset-0 bg-gradient-to-r from-[#00c2fe] to-[#bdeb0f] rounded-full z-[-1]" />}
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Content Area */}
      <section className="max-w-[1400px] mx-auto px-8 py-20 min-h-[600px]">
        <AnimatePresence mode='wait'>
          {activeTab === 'projects' ? (
            <motion.div key="p-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientProjects.map((item, idx) => (
                <div key={idx} className={`bg-white rounded-[2rem] overflow-hidden shadow-sm border-t-4 ${item.color} flex flex-col group transition-all duration-300 hover:shadow-xl`}>
                  <div className="p-6 border-b border-slate-50 flex items-center gap-4">
                    <LogoFallback src={item.clientLogo} name={item.client} sizeClass="w-12 h-12" textClass="text-xl" />
                    <div><span className="text-[8px] font-black text-[#00c2fe] uppercase tracking-widest block">Client</span><h3 className="text-[15px] font-black text-slate-800 leading-tight line-clamp-2">{item.client}</h3></div>
                  </div>
                  <div className="p-6 bg-slate-50/30 flex-grow">
                    <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Implemented Systems</h4>
                    <div className="space-y-3">
                      {item.systems.map((sys, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-white shadow-sm">
                          <LogoFallback src={sys.logo} name={sys.name} sizeClass="w-9 h-9" textClass="text-sm" />
                          <span className="text-xs font-bold text-slate-600 leading-snug">{sys.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="s-logic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-4">
                {serviceCategories.map((cat, index) => (
                  <div key={index} className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
                    <button onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)} className="flex w-full items-center justify-between p-6 md:p-8 text-left cursor-pointer">
                      <div className="flex items-center gap-5">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl shadow-lg transition-colors ${openAccordion === index ? 'bg-[#00c2fe] text-white' : 'bg-slate-50 text-[#00c2fe]'}`}>{cat.icon}</div>
                        <h3 className={`text-base md:text-lg font-black tracking-tight ${openAccordion === index ? 'text-[#00c2fe]' : 'text-slate-900'}`}>{cat.title}</h3>
                      </div>
                      <HiChevronDown className={`transition-transform duration-500 ${openAccordion === index ? 'rotate-180 text-[#00c2fe]' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openAccordion === index && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                          <div className="px-8 pb-10 md:px-20 grid grid-cols-1 gap-3">
                            {cat.items.map((item, i) => (
                              <button key={i} onClick={() => setSelectedPoint({ name: item, category: cat.title })} className={`flex items-start gap-3 p-3 rounded-xl transition-all text-left group cursor-pointer ${selectedPoint?.name === item ? 'bg-[#00c2fe]/10 border border-[#00c2fe]/20' : 'hover:bg-slate-50'}`}>
                                <HiCheckCircle className={`mt-1 shrink-0 ${selectedPoint?.name === item ? 'text-[#00c2fe]' : 'text-[#bdeb0f]'}`} size={18} />
                                <span className={`text-sm font-semibold transition-colors ${selectedPoint?.name === item ? 'text-[#00c2fe]' : 'text-slate-600'}`}>{item}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 sticky top-28">
                <AnimatePresence mode="wait">
                  {selectedPoint ? (
                    <motion.div key={selectedPoint.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-white p-8 rounded-[2.5rem] border-2 border-[#00c2fe]/10 shadow-2xl">
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-3 block">{selectedPoint.category}</span>
                        <h4 className="text-xl font-black text-slate-900 mb-4 leading-tight">{selectedPoint.name}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">We provide comprehensive support for {selectedPoint.name.toLowerCase()}, ensuring full regulatory compliance.</p>
                        <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00c2fe] to-[#bdeb0f] text-slate-900 font-black text-[11px] uppercase tracking-widest shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">Request for Service</button>
                    </motion.div>
                  ) : (
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-12 rounded-[2.5rem] text-center"><p className="text-slate-400 text-sm font-bold italic">Select a service point to view details.</p></div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !isSubmitted && setIsModalOpen(false)} className="absolute inset-0 bg-[#001a2c]/80 backdrop-blur-md" />
            
            {/* Modal Body */}
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
              
              {!isSubmitted ? (
                <>
                  {/* Modal Header */}
                  <div className="p-6 md:p-10 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-[#00338d]">{selectedPoint?.name}</h3>
                      <p className="text-slate-500 text-sm mt-2 font-medium">Please provide us with some basic information to help us get in touch with you.</p>
                    </div>
                    <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-900 cursor-pointer p-2"><HiX size={24} /></button>
                  </div>

                  {/* Modal Content - Scrollable */}
                  <div className="overflow-y-auto p-6 md:p-10 custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      
                      {/* Section 1: Basic Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name *</label>
                            <input required value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} type="text" placeholder="Your name" className="w-full px-5 py-3 border border-slate-200 focus:border-[#00338d] outline-none transition-all text-sm font-medium" />
                        </div>
						<div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Designation *</label>
                            <input required value={formData.designation} onChange={(e)=>setFormData({...formData, designation: e.target.value})} type="text" placeholder="Your designation" className="w-full px-5 py-3 border border-slate-200 focus:border-[#00338d] outline-none transition-all text-sm font-medium" />
                        </div>
						<div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Company / Organization *</label>
                            <input required value={formData.company} onChange={(e)=>setFormData({...formData, company: e.target.value})} type="text" placeholder="Your company name" className="w-full px-5 py-3 border border-slate-200 focus:border-[#00338d] outline-none transition-all text-sm font-medium" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Email *</label>
                            <input required value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} type="email" placeholder="example@gmail.com" className={`w-full px-5 py-3 border ${emailError ? 'border-red-500' : 'border-slate-200'} focus:border-[#00338d] outline-none transition-all text-sm font-medium`} />
                            {emailError && <p className="text-[10px] text-red-500 font-bold mt-1">{emailError}</p>}
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Mobile Number *</label>
                            <div className="bridgeline-phone-wrapper border border-slate-200 px-4 focus-within:border-[#00338d]">
                                <PhoneInput international defaultCountry="BD" value={formData.phone} onChange={(val) => setFormData({ ...formData, phone: val })} className="text-sm font-medium" />
                            </div>
                        </div>
						<div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Address *</label>
                            <input required value={formData.address} onChange={(e)=>setFormData({...formData, address: e.target.value})} type="text" placeholder="Your address" className="w-full px-5 py-3 border border-slate-200 focus:border-[#00338d] outline-none transition-all text-sm font-medium" />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Country *</label>
                            <select value={formData.country} onChange={(e)=>setFormData({...formData, country: e.target.value})} className="w-full px-5 py-3 border border-slate-200 focus:border-[#00338d] outline-none bg-white text-sm font-medium">
                                {countries.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Describe your requirements</label>
                            <textarea value={formData.description} onChange={(e)=>setFormData({...formData, description: e.target.value})} rows="3" className="w-full px-5 py-3 border border-slate-200 focus:border-[#00338d] outline-none text-sm font-medium resize-none" />
                        </div>
                      </div>

                      {/* Section 2: Terms and Conditions (Matches Screenshot) */}
                      <div className="pt-8 border-t border-slate-100">
                        <h4 className="text-xl font-bold text-[#00338d] mb-4">Terms and Conditions</h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          To respond to your request, this form (including any personal information) may be shared with other Bridgeline member firms and transferred and/or stored across borders.
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          A member of our team will be reviewing your request immediately and will respond within one business days.
                        </p>

                        <div className="space-y-4">
                          <p className="text-[#b31d44] text-sm font-medium">
                            Please provide acknowledgement for the online privacy statement
                          </p>
                          <label className="flex items-start gap-4 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={formData.acknowledge} 
                              onChange={(e) => {setFormData({...formData, acknowledge: e.target.checked}); setTermsError(false);}}
                              className="mt-1 w-6 h-6 border-2 border-slate-300 rounded-none checked:bg-[#00338d] transition-all cursor-pointer" 
                            />
                            <span className="text-[#00338d] text-sm font-medium leading-relaxed">
                              I acknowledge that I have read and understood the terms stated in the <span className="underline cursor-pointer">Bridgeline online privacy statement</span>
                            </span>
                          </label>
                          {termsError && <p className="text-[11px] text-red-600 font-bold ml-10">You must acknowledge the terms to continue.</p>}
                        </div>
                      </div>

					  <div className="py-4">
                        <ReCAPTCHA
                          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                          onChange={onCaptchaChange}
                        />
                      </div>

                        <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#00c2fe] to-[#bdeb0f] text-slate-900 font-black text-xs uppercase tracking-widest rounded-2xl shadow-lg mt-4 cursor-pointer flex items-center justify-center gap-2 active:scale-95 transition-all">
                          Send Request <FiSend size={18} />
                        </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="p-20 text-center">
                  <div className="w-20 h-20 bg-[#bdeb0f]/20 text-[#bdeb0f] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce"><HiCheckCircle size={50} /></div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Request Submitted!</h3>
                  <p className="text-slate-500 text-lg max-w-sm mx-auto leading-relaxed">Your request is successfully submitted. <span className="text-[#00c2fe] font-bold">Our team will contact you soon.</span></p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default ProjectsPage;