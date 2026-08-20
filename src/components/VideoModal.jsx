import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ isOpen, onClose, videoUrl, videoTitle }) {
  if (!isOpen) return null;

  const isMp4 = videoUrl && (
    videoUrl.endsWith('.mp4') || 
    videoUrl.includes('mp4') || 
    (!videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be') && !videoUrl.includes('vimeo.com'))
  );
  
  const getEmbedUrl = (url) => {
    if (!url) return '';
    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
    const vimeoMatch = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/i);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 backdrop-blur-md"
          style={{ background: 'rgba(20,35,65,0.75)' }}
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glossy-card overflow-hidden shadow-2xl z-10"
        >
          {/* Top bar — Win7 Aero titlebar */}
          <div className="flex items-center justify-between px-4 py-3 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(180deg, rgba(233,245,252,0.9), rgba(245,251,254,0.85))',
              borderBottom: '1px solid rgba(167,217,245,0.4)',
            }}>
            <span className="text-xs font-display font-bold" style={{ color: '#1a1a1a' }}>{videoTitle || 'Video'}</span>
            <button onClick={onClose} className="p-1 rounded-full transition-colors cursor-pointer"
              style={{ color: '#555' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(242,242,242,0.8)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
              <X size={18} />
            </button>
          </div>

          <div className="aspect-video bg-black relative">
            {isMp4 ? (
              <video src={videoUrl} controls autoPlay className="w-full h-full" />
            ) : (
              <iframe
                src={embedUrl}
                title={videoTitle || "Video Feed"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
          
          <div className="flex items-center justify-between px-4 py-2"
            style={{
              background: 'linear-gradient(180deg, rgba(242,242,242,0.8), rgba(235,235,235,0.8))',
              borderTop: '1px solid rgba(186,186,190,0.4)',
            }}>
            <span className="text-xs font-display font-bold" style={{ color: '#555' }}>TripleVisionary</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
