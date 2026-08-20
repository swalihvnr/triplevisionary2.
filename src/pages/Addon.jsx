import { Download, File, Shield, Clock } from "lucide-react";

const files = [
  {
    id: 1,
    name: "color_solution.py",
    type: "Python File",
    size: "16 KB",
    file: "/assets/downloads/color_solution.py",
    thumbnail: "/assets/downloads/color-solution-thumbnail.png",
  },
];

const downloadFile = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default function Addon() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(71,114,179,0.3))' }} />
            <span className="text-sm font-bold tracking-wider uppercase font-display" style={{ color: '#4772b3' }}>
              Addon & Plugins
            </span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, transparent, rgba(71,114,179,0.3))' }} />
          </div>
        </div>

        {/* File Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {files.map((file) => (
            <div
              key={file.id}
              className="glossy-card overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
            >
              {/* Thumbnail */}
              <div className="relative w-full p-4" style={{ background: 'linear-gradient(135deg, rgba(48,48,48,0.5), rgba(61,61,61,0.3))' }}>
                <div className="relative rounded-2xl overflow-hidden"
                  style={{ background: 'linear-gradient(180deg, #363636, #303030)', border: '1px solid #4d4d4d' }}>
                  <img src={file.thumbnail} alt={file.name} className="w-full h-auto max-h-[300px] object-contain" />
                  <div className="absolute top-4 right-4 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                    style={{ background: 'linear-gradient(180deg, #5ead5c, #4a9a2e)' }}>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* File Info */}
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'linear-gradient(180deg, #3d3d3d, #363636)',
                          border: '1px solid #4d4d4d',
                          color: '#4772b3',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                        }}>
                        <File className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold truncate" style={{ color: '#ffffff' }}>{file.name}</h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 ml-13 text-sm">
                      <span style={{ color: '#cccccc' }}>{file.type}</span>
                      <span className="w-1 h-1 rounded-full" style={{ background: '#4d4d4d' }}></span>
                      <span style={{ color: '#cccccc' }}>{file.size}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => downloadFile(file.file)}
                    className="w-full glossy-button font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all hover:scale-[1.02]"
                  >
                    <Download size={18} />
                    Download Now
                  </button>
                </div>

                <div className="mt-4 pt-4 flex flex-wrap items-center gap-4 text-xs" style={{ borderTop: '1px solid #3d3d3d' }}>
                  <div className="flex items-center gap-2" style={{ color: '#cccccc' }}>
                    <Shield size={14} style={{ color: '#5ead5c' }} />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: '#cccccc' }}>
                    <Clock size={14} style={{ color: '#4772b3' }} />
                    <span>Updated</span>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: '#cccccc' }}>
                    <span className="px-2 py-0.5 rounded-full font-bold"
                      style={{ background: 'rgba(71,114,179,0.1)', color: '#4772b3', border: '1px solid rgba(71,114,179,0.3)' }}>
                      Python 3.8+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
