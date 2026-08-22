import { useState } from "react";
import { Download, File } from "lucide-react";

const addonCategories = [
  "All",
  "Blender",
  "After Effects",
  "Kdenlive",
  "Natron",
  "GIMP",
  "Fusion",
];

const files = [
  {
    id: 1,
    name: "color_solution.py",
    type: "Python File",
    size: "16 KB",
    file: "/assets/downloads/color_solution.py",
    thumbnail: "/assets/downloads/color-solution-thumbnail.png",
    category: "Blender",
  },
  {
    id: 2,
    name: "vse_multi_audio",
    type: "ZIP File",
    size: "2 KB",
    file: "/assets/downloads/vse_multi_audio.zip",
    bundledFile: "https://tg.telegramdownloader.net/282402/vse_multi_audio_bundled.zip?hash=780a7d",
    bundledNote: "Bundled with FFmpeg/FFprobe (179 MB)",
    thumbnail: "",
    category: "Blender",
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFiles = files.filter(
    (file) => activeCategory === "All" || file.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1" style={{ background: '#2c2c2e' }} />
            <span className="text-sm font-bold tracking-wider uppercase font-display" style={{ color: '#ffffff' }}>
              Addon & Plugins
            </span>
            <div className="h-px flex-1" style={{ background: '#2c2c2e' }} />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {addonCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-all border cursor-pointer"
              style={{
                background: activeCategory === cat ? '#1c1c1f' : 'transparent',
                borderColor: activeCategory === cat ? '#007aff' : '#38383a',
                color: activeCategory === cat ? '#ffffff' : '#a1a1a6',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="glossy-card overflow-hidden transition-all duration-200 hover:-translate-y-1"
            >
              {file.thumbnail && (
                <div className="relative w-full p-4">
                  <div className="relative rounded-lg overflow-hidden">
                    <img src={file.thumbnail} alt={file.name} className="w-full h-auto max-h-[300px] object-contain" />
                  </div>
                </div>
              )}

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

                  {file.bundledFile && (
                    <button
                      onClick={() => downloadFile(file.bundledFile)}
                      className="aero-button-primary w-full font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer text-center"
                      style={{
                        background: '#007aff',
                        border: '1px solid #007aff',
                        color: '#ffffff',
                        fontSize: 'clamp(11px, 2.5vw, 14px)',
                      }}
                    >
                      <Download size={18} className="flex-shrink-0" />
                      <span className="leading-tight">{file.bundledNote || "Download Bundled"}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFiles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: '#68686f' }}>No addons in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
