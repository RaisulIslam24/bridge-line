import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';

export default function ContactUs() {
  return (
    <section className="contact-mesh-container py-24">
      <div className="mesh-glow glow-pink-left" />
      <div className="mesh-glow glow-blue-right" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">Contact Us</h2>
          <p className="text-slate-500 text-center">Reach out to us today to discuss your business needs and discover how we can help you succeed.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
            
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center shrink-0">
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

			<div className="flex gap-5 group">
			  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
				<HiOutlineMail size={24} />
			  </div>
			  <div>
				<h4 className="font-bold text-slate-800">Email</h4>
				<a 
				  href="mailto:info@bgsl.com.bd" 
				  className="text-slate-600 text-sm hover:text-blue-600 transition-colors block"
				>
				  info@bgsl.com.bd
				</a>
				</div>
			  </div>

			  <div className="flex gap-5 group">
				<div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
				  <HiOutlinePhone size={24} />
				</div>
				<div>
				  <h4 className="font-bold text-slate-800">Phone</h4>
				  <a 
					href="tel:+8801410411749" 
					className="text-slate-600 text-sm hover:text-green-600 transition-colors block"
				  >
					+880 1410 411749
				  </a>
				</div>
			  </div>
          </div>

          <div className="lg:col-span-7 bg-[#f8fafc]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-white">
            <form className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 ml-1">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-sm" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 ml-1">Phone Number</label>
                <input type="text" placeholder="Enter your phone number" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 ml-1">Message</label>
                <textarea rows="4" placeholder="Tell us about your business needs" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-sm resize-none"></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#ec4899] text-white font-bold text-sm shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] mt-4 cursor-pointer"
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