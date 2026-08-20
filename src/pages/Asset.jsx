import React, { useEffect, useRef, useState } from "react";
import { assetData, softwareList } from "../utilities/data";

const Asset = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const assetRefs = useRef({});
  const [selectedAssetId] = useState(() => {
    return sessionStorage.getItem("selectedAssetId");
  });

  const filteredAssets =
    activeFilter === "All"
      ? assetData
      : assetData.filter(
          (asset) =>
            asset.software.toLowerCase() === activeFilter.toLowerCase() ||
            asset.extension.toLowerCase() === activeFilter.toLowerCase(),
        );

  useEffect(() => {
    if (!selectedAssetId) return;
    const asset = assetData.find((a) => a.id === selectedAssetId);
    if (!asset) return;
    setActiveFilter(asset.software);
    setTimeout(() => {
      assetRefs.current[selectedAssetId]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, [selectedAssetId]);

  const handleDownload = (link, fileName) => {
    if (link === "#") {
      alert(`Download simulation: ${fileName}`);
      return;
    }
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="min-h-screen py-6 md:py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-light tracking-wider" style={{ color: '#1a1a1a' }}>
            ASSET <span className="font-bold" style={{ color: '#3399ff' }}>LIBRARY</span>
          </h1>
          <p className="text-sm mt-1" style={{ color: '#555' }}>
            Browse and download production-ready assets by software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 pb-4" style={{ borderBottom: '1px solid rgba(167,217,245,0.3)' }}>
          {softwareList.map((software) => (
            <button
              key={software}
              onClick={() => setActiveFilter(software)}
              className="px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 border"
              style={{
                background: activeFilter === software ? 'linear-gradient(180deg, #60b0ff, #3399ff)' : 'rgba(242,242,242,0.6)',
                borderColor: activeFilter === software ? '#2080e0' : 'rgba(186,186,190,0.4)',
                color: activeFilter === software ? '#fff' : '#555',
                boxShadow: activeFilter === software ? '0 2px 10px rgba(51,153,255,0.3), inset 0 1px 0 rgba(255,255,255,0.3)' : 'none',
                textShadow: activeFilter === software ? '0 1px 1px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              {software}
            </button>
          ))}
        </div>

        {/* Asset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.length > 0 ? (
            filteredAssets.map((asset) => {
              const isSelected = asset.id === selectedAssetId;
              return (
                <div
                  key={asset.id}
                  ref={(el) => (assetRefs.current[asset.id] = el)}
                  className="glossy-card p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: isSelected ? '#3399ff' : undefined,
                    boxShadow: isSelected ? '0 0 0 2px #3399ff, 0 8px 30px rgba(51,153,255,0.15)' : undefined,
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-lg font-bold truncate pr-2" style={{ color: '#3399ff' }}>{asset.software}</h2>
                      <span className="text-xs rounded-full whitespace-nowrap font-bold"
                        style={{ background: 'linear-gradient(180deg, rgba(242,242,242,0.8), rgba(235,235,235,0.8))', border: '1px solid rgba(186,186,190,0.5)', color: '#555', padding: '2px 8px' }}>
                        {asset.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-mono truncate" style={{ color: '#1a1a1a' }}>{asset.name}</span>
                      <span className="text-sm font-mono rounded-full font-bold"
                        style={{ color: '#3399ff', background: 'rgba(233,245,252,0.6)', border: '1px solid rgba(167,217,245,0.4)', padding: '2px 8px' }}>
                        {asset.extension}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-3" style={{ borderTop: '1px solid rgba(167,217,245,0.2)' }}>
                      <div />
                      <a
                        href={asset.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 glossy-button-sky text-sm font-bold px-4 py-1.5 rounded-full"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12" style={{ color: '#555' }}>
              No assets found for <span className="font-bold" style={{ color: '#3399ff' }}>{activeFilter}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Asset;
