import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, PhoneCall, Mail, MessageSquare } from "lucide-react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const text = [
      `*New Contact Form Submission*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Project Type:* ${formData.projectType}`,
      `*Message:* ${formData.message}`,
    ].join("\n");

    try {
      const res = await fetch(
        `https://api.telegram.org/bot8821211350:AAG9F0oVjSQxUUtNsmTRt04RKaDurrWOXnI/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: "5084905731",
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", projectType: "Commercial Ads", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputStyle = {
    background: '#1c1c1f',
    border: '1px solid #38383a',
    color: '#ffffff',
  };

  const inputFocusClass = "focus:outline-none focus:border-[#007aff] transition-all font-sans";

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4" style={{ color: '#ffffff' }}>
            Start Your Project
          </h2>
          <p className="text-sm md:text-base max-w-xl" style={{ color: '#a1a1a6' }}>
            Connect with our producers to establish timeline targets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 relative">
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: '#a1a1a6' }}>
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
                    className={`w-full rounded-lg px-4 py-3 text-sm placeholder-gray-500 ${inputFocusClass}`}
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: '#a1a1a6' }}>
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
                    className={`w-full rounded-lg px-4 py-3 text-sm placeholder-gray-500 ${inputFocusClass}`}
                    style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="projectType" className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: '#a1a1a6' }}>
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg px-4 py-3 text-sm ${inputFocusClass}`}
                    style={{ ...inputStyle, color: '#a1a1a6' }}
                  >
                    <option value="Commercial Ads">Commercial Advertisements</option>
                    <option value="Motion Graphics">Motion Graphics / HUD</option>
                    <option value="3D CGI Animation">3D CGI & Animation</option>
                    <option value="VFX Compositing">VFX Compositing & Edits</option>
                    <option value="YouTube Content">YouTube Content Editing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: '#a1a1a6' }}>
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
                    className={`w-full rounded-lg px-4 py-3 text-sm placeholder-gray-500 ${inputFocusClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="aero-button-primary w-full py-3.5 rounded-lg font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>

              <AnimatePresence>
                {isSending && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-lg flex flex-col items-center justify-center p-6 text-center z-20"
                    style={{ background: 'rgba(0,0,0,0.9)' }}
                  >
                    <div className="w-12 h-12 border-2 rounded-full animate-spin mb-4" style={{ borderColor: '#38383a', borderTopColor: '#007aff' }} />
                    <span className="font-bold text-sm animate-pulse" style={{ color: '#ffffff' }}>Sending your message...</span>
                  </motion.div>
                )}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-lg flex flex-col items-center justify-center p-6 text-center z-20"
                    style={{ background: 'rgba(0,0,0,0.95)' }}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: '#1c1c1f', border: '1px solid #38383a', color: '#007aff' }}>
                      <span className="text-xl">&#10003;</span>
                    </div>
                    <span className="font-bold uppercase tracking-wider text-sm" style={{ color: '#ffffff' }}>Message Sent!</span>
                    <span className="text-xs mt-1.5 max-w-xs" style={{ color: '#a1a1a6' }}>
                      A producer will get back to you within 12 hours.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <a href="https://wa.me/+91 9388121465" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer">
              <GlassCard className="p-5 transition-all" glowColor="rgba(0,122,255,0.06)">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: '#1c1c1f',
                      border: '1px solid #38383a',
                      color: '#007aff',
                    }}>
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display uppercase font-bold" style={{ color: '#68686f' }}>Direct Dispatch</span>
                    <h4 className="font-display font-bold text-sm group-hover:text-white transition-colors" style={{ color: '#c7c7cc' }}>Ping via WhatsApp</h4>
                    <p className="text-[11px] mt-1" style={{ color: '#a1a1a6' }}>Start an instant dialogue regarding budget and timelines.</p>
                  </div>
                </div>
              </GlassCard>
            </a>

            <a href="mailto:triplevisionary@protonmail.com" className="block group cursor-pointer">
              <GlassCard className="p-5 transition-all" glowColor="rgba(0,122,255,0.06)">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: '#1c1c1f',
                      border: '1px solid #38383a',
                      color: '#007aff',
                    }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display uppercase font-bold" style={{ color: '#68686f' }}>E-Mail</span>
                    <h4 className="font-display font-bold text-sm group-hover:text-white transition-colors" style={{ color: '#c7c7cc' }}>triplevisionary@protonmail.com</h4>
                    <p className="text-[11px] mt-1" style={{ color: '#a1a1a6' }}>Send story briefs or video assets directly.</p>
                  </div>
                </div>
              </GlassCard>
            </a>

            <a href="tel:+919388121465" className="block group cursor-pointer">
              <GlassCard className="p-5 transition-all" glowColor="rgba(0,122,255,0.06)">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: '#1c1c1f',
                      border: '1px solid #38383a',
                      color: '#007aff',
                    }}>
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display uppercase font-bold" style={{ color: '#68686f' }}>Phone</span>
                    <h4 className="font-display font-bold text-sm group-hover:text-white transition-colors" style={{ color: '#c7c7cc' }}>+91 93881 21465</h4>
                    <p className="text-[11px] mt-1" style={{ color: '#a1a1a6' }}>Tap to call us directly.</p>
                  </div>
                </div>
              </GlassCard>
            </a>

            <a href="https://share.upscrolled.com/en/user/dd096cdb-b9f6-4897-a1c0-546f3b7ce20e/" target="_blank" className="block group cursor-pointer">
              <GlassCard className="p-5 transition-all" glowColor="rgba(0,122,255,0.06)">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: '#1c1c1f',
                      border: '1px solid #38383a',
                      color: '#007aff',
                    }}>
                    <img src="/assets/upscrolled.svg" alt="Upscrolled" className="w-5 h-5 object-contain" style={{ objectPosition: '60% 30%' }} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-display uppercase font-bold" style={{ color: '#68686f' }}>Connect</span>
                    <h4 className="font-display font-bold text-sm group-hover:text-white transition-colors" style={{ color: '#c7c7cc' }}>UPSCROLLED</h4>
                    <p className="text-[11px] mt-1" style={{ color: '#a1a1a6' }}>Connect with us.</p>
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
