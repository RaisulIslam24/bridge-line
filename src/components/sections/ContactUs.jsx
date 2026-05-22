import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineX } from "react-icons/ai";
import { motion } from 'framer-motion';

export default function ContactUs() {
  const socials = [
    { icon: <FaYoutube />, link: "#", color: "hover:bg-[#FF0000]" },
    { icon: <FaFacebookF />, link: "#", color: "hover:bg-[#1877F2]" },
    { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-[#0077B5]" },
    { icon: <AiOutlineX />, link: "#", color: "hover:bg-[#1DA1F2]" },
    { icon: <FaInstagram />, link: "#", color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
  ];

  return (
    <section id="contact" className="contact-mesh-container py-24 relative overflow-hidden bg-white">
      {/* Background Mesh Glows */}
      <div className="mesh-glow absolute top-0 left-[-10%] bg-primary opacity-10 blur-[120px] w-[600px] h-[600px] rounded-full pointer-events-none" />
      <div className="mesh-glow absolute bottom-0 right-[-10%] bg-secondary opacity-10 blur-[120px] w-[500px] h-[500px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Contact Us</h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto font-medium">
            Reach out to us today to discuss your business needs and discover how we can help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDE: Contact Information */}
          <div className="lg:col-span-5 space-y-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <HiOutlineLocationMarker size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Address</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Ejab Rose Valley, House 531, 1st Floor<br/>
                    West Shewrapara, Mirpur, Dhaka-1216<br/> Bangladesh
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <HiOutlineMail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Email</h4>
                  <a href="mailto:info@bgsl.com.bd" className="text-slate-600 text-sm hover:text-primary transition-colors block">
                    info@bgsl.com.bd
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <HiOutlinePhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Phone</h4>
                  <a href="tel:+8801410411749" className="text-slate-600 text-sm hover:text-primary transition-colors block">
                    +880 1410 411749
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS SECTION */}
            <div className="pt-8 border-t border-slate-100 space-y-5">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Follow Us</h4>
              <div className="flex flex-wrap gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-500 shadow-sm transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:shadow-lg`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50/50 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white relative z-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 ml-1">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 ml-1">Phone Number</label>
                <input type="text" placeholder="Enter your phone number" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 ml-1">Message</label>
                <textarea rows="4" placeholder="Tell us about your business needs" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm resize-none"></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-slate-900 font-black text-sm shadow-xl shadow-primary/20 flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-[0.98] mt-4 cursor-pointer uppercase tracking-widest"
              >
                Send Message <FiSend className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}