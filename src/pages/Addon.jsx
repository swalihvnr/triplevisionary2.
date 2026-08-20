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
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#7CC242]/30"></div>
            <span className="text-[#5CB836] text-sm font-bold tracking-wider uppercase font-display">
              Addon & Plugins
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#7CC242]/30"></div>
          </div>
        </div>

        {/* File Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {files.map((file) => (
            <div
              key={file.id}
              className="glossy-card overflow-hidden hover:shadow-[0_12px_40px_rgba(93,200,232,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative w-full bg-gradient-to-br from-sky-100/60 to-green-50/40 p-4">
                <div className="relative rounded-2xl overflow-hidden bg-white/60 border border-white/60">
                  <img src={file.thumbnail} alt={file.name} className="w-full h-auto max-h-[300px] object-contain" />
                  <div className="absolute top-4 right-4 bg-[#7CC242]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg">
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
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5DC8E8]/15 to-[#7CC242]/10 border border-white/60 flex items-center justify-center flex-shrink-0">
                        <File className="w-5 h-5 text-[#5DC8E8]" />
                      </div>
                      <h2 className="text-xl font-bold text-[#2B3A4E] truncate">{file.name}</h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 ml-13 text-sm">
                      <span className="text-[#5A7089]">{file.type}</span>
                      <span className="w-1 h-1 rounded-full bg-[#5A7089]/30"></span>
                      <span className="text-[#5A7089]">{file.size}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => downloadFile(file.file)}
                    className="w-full glossy-button font-bold py-3 rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 transition-all hover:scale-[1.02]"
                  >
                    <Download size={18} />
                    Download Now
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-sky-200/20 flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-2 text-[#5A7089]">
                    <Shield size={14} className="text-[#7CC242]" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5A7089]">
                    <Clock size={14} className="text-[#5DC8E8]" />
                    <span>Updated</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5A7089]">
                    <span className="px-2 py-0.5 rounded-full bg-[#7CC242]/10 text-[#5CB836] border border-[#7CC242]/20 font-bold">
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
