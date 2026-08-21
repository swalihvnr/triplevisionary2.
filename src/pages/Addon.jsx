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
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1" style={{ background: '#2c2c2e' }} />
            <span className="text-sm font-bold tracking-wider uppercase font-display" style={{ color: '#ffffff' }}>
              Addon & Plugins
            </span>
            <div className="h-px flex-1" style={{ background: '#2c2c2e' }} />
          </div>
        </div>

        {/* File Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {files.map((file) => (
            <div
              key={file.id}
              className="glossy-card overflow-hidden transition-all duration-200 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative w-full p-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img src={file.thumbnail} alt={file.name} className="w-full h-auto max-h-[300px] object-contain" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                    style={{ background: '#161618', border: '1px solid #38383a' }}>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#007aff' }}></span>
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
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: '#1c1c1f',
                          border: '1px solid #38383a',
                          color: '#007aff',
                        }}>
                        <File className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold truncate" style={{ color: '#ffffff' }}>{file.name}</h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 ml-13 text-sm">
                      <span style={{ color: '#a1a1a6' }}>{file.type}</span>
                      <span className="w-1 h-1 rounded-full" style={{ background: '#38383a' }}></span>
                      <span style={{ color: '#a1a1a6' }}>{file.size}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => downloadFile(file.file)}
                    className="aero-button-primary w-full font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <Download size={18} />
                    Download Now
                  </button>
                </div>

                <div className="mt-4 pt-4 flex flex-wrap items-center gap-4 text-xs" style={{ borderTop: '1px solid #2c2c2e' }}>
                  <div className="flex items-center gap-2" style={{ color: '#a1a1a6' }}>
                    <Shield size={14} style={{ color: '#007aff' }} />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: '#a1a1a6' }}>
                    <Clock size={14} style={{ color: '#007aff' }} />
                    <span>Updated</span>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: '#a1a1a6' }}>
                    <span className="px-2 py-0.5 rounded-lg font-bold"
                      style={{ background: '#1c1c1f', color: '#007aff', border: '1px solid #38383a' }}>
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
