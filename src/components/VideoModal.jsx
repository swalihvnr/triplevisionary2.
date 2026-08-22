import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ isOpen, onClose, videoUrl, videoTitle, mediaType, image }) {
  if (!isOpen) return null;

  const isImage = mediaType === 'image';

  const isMp4 = videoUrl && (
    videoUrl.endsWith('.mp4') ||
    videoUrl.includes('mp4') ||
    (!videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be') && !videoUrl.includes('vimeo.com'))
  );

  const getEmbedUrl = (url) => {
    if (!url) return '';
    const ytShortsMatch = url.match(/youtube\.com\/shorts\/([^"?&\s]+)/i);
    if (ytShortsMatch) return `https://www.youtube.com/embed/${ytShortsMatch[1]}?autoplay=1&rel=0`;
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
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.9)' }}
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl overflow-hidden z-10"
          style={{
            background: '#161618',
            border: '1px solid #38383a',
            borderRadius: 5,
          }}
        >
          <div className="flex items-center justify-between px-4 py-3"
            style={{
              background: '#1c1c1f',
              borderBottom: '1px solid #38383a',
            }}>
            <span className="text-xs font-display font-bold" style={{ color: '#c7c7cc' }}>{videoTitle || 'Media'}</span>
            <button onClick={onClose} className="p-1 w-7 h-7 rounded-lg flex items-center justify-center transition-all cursor-pointer"
              style={{ background: '#38383a', color: '#a1a1a6' }}>
              <X size={14} />
            </button>
          </div>

          <div className="bg-black relative flex items-center justify-center">
            {isImage ? (
              <img
                src={image}
                alt={videoTitle || 'Image'}
                className="w-full max-h-[80vh] object-contain"
              />
            ) : isMp4 ? (
              <div className="aspect-video w-full">
                <video src={videoUrl} controls autoPlay className="w-full h-full" />
              </div>
            ) : (
              <div className="aspect-video w-full">
                <iframe
                  src={embedUrl}
                  title={videoTitle || "Video Feed"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between px-4 py-2"
            style={{
              background: '#1c1c1f',
              borderTop: '1px solid #38383a',
            }}>
            <span className="text-xs font-display font-bold" style={{ color: '#68686f' }}>TripleVisionary</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
