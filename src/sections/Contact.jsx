import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, PhoneCall, Mail, MessageSquare, ExternalLink } from "lucide-react";
import GlassCard from "../components/GlassCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Commercial Ads",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", projectType: "Commercial Ads", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputStyle = {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(244,244,246,0.6))',
    border: '1px solid rgba(186,186,190,0.5)',
    color: '#1a1a1a',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.8)',
  };

  const inputFocusClass = "focus:outline-none focus:border-[#3399ff] focus:ring-2 focus:ring-[#3399ff]/20 transition-all font-sans";

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(51,153,255,0.06), transparent)' }} />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(167,217,245,0.08), transparent)' }} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4" style={{ color: '#1a1a1a' }}>
            Start Your Project
          </h2>
          <p className="text-sm md:text-base max-w-xl font-light" style={{ color: '#555' }}>
            Connect with our producers to establish timeline targets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 relative">
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: '#555' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full rounded-lg px-4 py-3 text-sm placeholder-gray-400 ${inputFocusClass}`}
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: '#555' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full rounded-lg px-4 py-3 text-sm placeholder-gray-400 ${inputFocusClass}`}
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="projectType" className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: '#555' }}>
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg px-4 py-3 text-sm ${inputFocusClass}`}
                    style={{ ...inputStyle, color: '#555' }}
                  >
                    <option value="Commercial Ads">Commercial Advertisements</option>
                    <option value="Motion Graphics">Motion Graphics / HUD</option>
                    <option value="3D CGI Animation">3D CGI & Animation</option>
                    <option value="VFX Compositing">VFX Compositing & Edits</option>
                    <option value="YouTube Content">YouTube Content Editing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: '#555' }}>
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, timeline, and any references..."
                    className={`w-full rounded-lg px-4 py-3 text-sm placeholder-gray-400 ${inputFocusClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-lg glossy-button-sky font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>

              {/* Loading / Success overlay */}
              <AnimatePresence>
                {isSending && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20"
                    style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(233,245,252,0.9))' }}
                  >
                    <div className="w-12 h-12 border-3 rounded-full animate-spin mb-4" style={{ borderColor: 'rgba(51,153,255,0.2)', borderTopColor: '#3399ff' }} />
                    <span className="font-bold text-sm animate-pulse" style={{ color: '#3399ff' }}>Sending your message...</span>
                  </motion.div>
                )}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20"
                    style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.97), rgba(244,244,246,0.95))' }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(126,217,87,0.1)', border: '1px solid rgba(126,217,87,0.3)', color: '#5cb836' }}>
                      <span className="text-xl">✓</span>
                    </div>
                    <span className="font-bold uppercase tracking-wider text-sm" style={{ color: '#1a1a1a' }}>Message Sent!</span>
                    <span className="text-xs mt-1.5 max-w-xs" style={{ color: '#555' }}>
                      A producer will get back to you within 12 hours.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            <a href="https://wa.me/+91 9388121465" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer">
              <GlassCard className="p-5 transition-all" glowColor="rgba(126,217,87,0.12)">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'linear-gradient(180deg, rgba(220,252,231,0.8), rgba(187,247,208,0.6))',
                      border: '1px solid rgba(134,239,172,0.5)',
                      color: '#16a34a',
                    }}>
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display uppercase font-bold" style={{ color: '#555' }}>Direct Dispatch</span>
                    <h4 className="font-display font-bold text-sm group-hover:text-green-600 transition-colors" style={{ color: '#1a1a1a' }}>Ping via WhatsApp</h4>
                    <p className="text-[11px] mt-1 font-light" style={{ color: '#555' }}>Start an instant dialogue regarding budget and timelines.</p>
                  </div>
                </div>
              </GlassCard>
            </a>

            <a href="mailto:triplevisionary@protonmail.com" className="block group cursor-pointer">
              <GlassCard className="p-5 transition-all" glowColor="rgba(51,153,255,0.12)">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'linear-gradient(180deg, rgba(242,242,242,0.8), rgba(235,235,235,0.8))',
                      border: '1px solid rgba(186,186,190,0.5)',
                      color: '#3399ff',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display uppercase font-bold" style={{ color: '#555' }}>E-Mail</span>
                    <h4 className="font-display font-bold text-sm group-hover:text-[#3399ff] transition-colors" style={{ color: '#1a1a1a' }}>triplevisionary@protonmail.com</h4>
                    <p className="text-[11px] mt-1 font-light" style={{ color: '#555' }}>Send story briefs or video assets directly.</p>
                  </div>
                </div>
              </GlassCard>
            </a>

            <a href="tel:+919388121465" className="block group cursor-pointer">
              <GlassCard className="p-5 transition-all" glowColor="rgba(51,153,255,0.12)">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'linear-gradient(180deg, rgba(242,242,242,0.8), rgba(235,235,235,0.8))',
                      border: '1px solid rgba(186,186,190,0.5)',
                      color: '#3399ff',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}>
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display uppercase font-bold" style={{ color: '#555' }}>Phone</span>
                    <h4 className="font-display font-bold text-sm group-hover:text-[#3399ff] transition-colors" style={{ color: '#1a1a1a' }}>+91 93881 21465</h4>
                    <p className="text-[11px] mt-1 font-light" style={{ color: '#555' }}>Tap to call us directly.</p>
                  </div>
                </div>
              </GlassCard>
            </a>

            <a href="https://share.upscrolled.com/en/user/dd096cdb-b9f6-4897-a1c0-546f3b7ce20e/" target="_blank" className="block group cursor-pointer">
              <GlassCard className="p-5 transition-all" glowColor="rgba(51,153,255,0.12)">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'linear-gradient(180deg, rgba(242,242,242,0.8), rgba(235,235,235,0.8))',
                      border: '1px solid rgba(186,186,190,0.5)',
                      color: '#3399ff',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}>
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display uppercase font-bold" style={{ color: '#555' }}>Connect</span>
                    <h4 className="font-display font-bold text-sm group-hover:text-[#3399ff] transition-colors" style={{ color: '#1a1a1a' }}>UPSCROLLED</h4>
                    <p className="text-[11px] mt-1 font-light" style={{ color: '#555' }}>Connect with us.</p>
                  </div>
                </div>
              </GlassCard>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
