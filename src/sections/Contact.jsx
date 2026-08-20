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

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#5DC8E8]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#7CC242]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 text-[#2B3A4E]">
            Start Your Project
          </h2>
          <p className="text-sm md:text-base text-[#5A7089] max-w-xl font-light">
            Connect with our producers to establish timeline targets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 relative">
            <GlassCard className="p-6 md:p-8 bg-white/50 border border-white/60">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-display text-xs font-bold uppercase tracking-wider text-[#5A7089]">
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
                    className="w-full bg-white/60 border border-white/80 rounded-2xl px-4 py-3 text-sm text-[#2B3A4E] placeholder-[#5A7089]/40 focus:outline-none focus:border-[#5DC8E8] focus:ring-2 focus:ring-[#5DC8E8]/20 transition-all font-sans shadow-inner"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-display text-xs font-bold uppercase tracking-wider text-[#5A7089]">
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
                    className="w-full bg-white/60 border border-white/80 rounded-2xl px-4 py-3 text-sm text-[#2B3A4E] placeholder-[#5A7089]/40 focus:outline-none focus:border-[#5DC8E8] focus:ring-2 focus:ring-[#5DC8E8]/20 transition-all font-sans shadow-inner"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="projectType" className="font-display text-xs font-bold uppercase tracking-wider text-[#5A7089]">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-white/60 border border-white/80 rounded-2xl px-4 py-3 text-sm text-[#5A7089] focus:outline-none focus:border-[#5DC8E8] focus:ring-2 focus:ring-[#5DC8E8]/20 transition-all font-sans"
                  >
                    <option value="Commercial Ads">Commercial Advertisements</option>
                    <option value="Motion Graphics">Motion Graphics / HUD</option>
                    <option value="3D CGI Animation">3D CGI & Animation</option>
                    <option value="VFX Compositing">VFX Compositing & Edits</option>
                    <option value="YouTube Content">YouTube Content Editing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-display text-xs font-bold uppercase tracking-wider text-[#5A7089]">
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
                    className="w-full bg-white/60 border border-white/80 rounded-2xl px-4 py-3 text-sm text-[#2B3A4E] placeholder-[#5A7089]/40 focus:outline-none focus:border-[#5DC8E8] focus:ring-2 focus:ring-[#5DC8E8]/20 transition-all font-sans resize-none shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-2xl glossy-button font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] disabled:opacity-50 transition-all cursor-pointer"
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
                    className="absolute inset-0 bg-white/90 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20"
                  >
                    <div className="w-12 h-12 border-3 border-[#5DC8E8]/30 border-t-[#5DC8E8] rounded-full animate-spin mb-4" />
                    <span className="font-bold text-sm text-[#5DC8E8] animate-pulse">Sending your message...</span>
                  </motion.div>
                )}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#7CC242]/15 flex items-center justify-center border border-[#7CC242]/30 text-[#7CC242] mb-4">
                      <span className="text-xl">✓</span>
                    </div>
                    <span className="font-bold uppercase tracking-wider text-[#2B3A4E] text-sm">Message Sent!</span>
                    <span className="text-xs text-[#5A7089] mt-1.5 max-w-xs">
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
              <GlassCard className="p-5 bg-white/50 border border-white/60 group-hover:border-green-400/40 transition-all" glowColor="rgba(124,194,66,0.12)">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-green-100/80 border border-green-200/60 text-green-500 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(124,194,66,0.3)] transition-all duration-300">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display text-[#5A7089] uppercase font-bold">Direct Dispatch</span>
                    <h4 className="font-display font-bold text-sm text-[#2B3A4E] group-hover:text-green-600 transition-colors">Ping via WhatsApp</h4>
                    <p className="text-[11px] text-[#5A7089] mt-1 font-light">Start an instant dialogue regarding budget and timelines.</p>
                  </div>
                </div>
              </GlassCard>
            </a>

            <a href="mailto:triplevisionary@protonmail.com" className="block group cursor-pointer">
              <GlassCard className="p-5 bg-white/50 border border-white/60 group-hover:border-[#5DC8E8]/40 transition-all" glowColor="rgba(93,200,232,0.12)">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-100/80 border border-sky-200/60 text-[#5DC8E8] flex items-center justify-center group-hover:bg-[#5DC8E8] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(93,200,232,0.3)] transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display text-[#5A7089] uppercase font-bold">E-Mail</span>
                    <h4 className="font-display font-bold text-sm text-[#2B3A4E] group-hover:text-[#5DC8E8] transition-colors">triplevisionary@protonmail.com</h4>
                    <p className="text-[11px] text-[#5A7089] mt-1 font-light">Send story briefs or video assets directly.</p>
                  </div>
                </div>
              </GlassCard>
            </a>

            <a href="tel:+919388121465" className="block group cursor-pointer">
              <GlassCard className="p-5 bg-white/50 border border-white/60 group-hover:border-[#5DC8E8]/40 transition-all" glowColor="rgba(93,200,232,0.12)">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-100/80 border border-sky-200/60 text-[#5DC8E8] flex items-center justify-center group-hover:bg-[#5DC8E8] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(93,200,232,0.3)] transition-all duration-300">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display text-[#5A7089] uppercase font-bold">Phone</span>
                    <h4 className="font-display font-bold text-sm text-[#2B3A4E] group-hover:text-[#5DC8E8] transition-colors">+91 93881 21465</h4>
                    <p className="text-[11px] text-[#5A7089] mt-1 font-light">Tap to call us directly.</p>
                  </div>
                </div>
              </GlassCard>
            </a>

            <a href="https://share.upscrolled.com/en/user/dd096cdb-b9f6-4897-a1c0-546f3b7ce20e/" target="_blank" className="block group cursor-pointer">
              <GlassCard className="p-5 bg-white/50 border border-white/60 group-hover:border-[#5DC8E8]/40 transition-all" glowColor="rgba(93,200,232,0.12)">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-100/80 border border-sky-200/60 text-[#5DC8E8] flex items-center justify-center group-hover:bg-[#5DC8E8] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(93,200,232,0.3)] transition-all duration-300">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display text-[#5A7089] uppercase font-bold">Connect</span>
                    <h4 className="font-display font-bold text-sm text-[#2B3A4E] group-hover:text-[#5DC8E8] transition-colors">UPSCROLLED</h4>
                    <p className="text-[11px] text-[#5A7089] mt-1 font-light">Connect with us.</p>
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
