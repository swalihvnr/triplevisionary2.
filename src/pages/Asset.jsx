import { useEffect, useRef, useState } from "react";
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

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-light tracking-wider" style={{ color: '#ffffff' }}>
            ASSET <span className="font-bold" style={{ color: '#ffffff' }}>LIBRARY</span>
          </h1>
          <p className="text-sm mt-1" style={{ color: '#a1a1a6' }}>
            Browse and download production-ready assets by software.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 pb-4" style={{ borderBottom: '1px solid #2c2c2e' }}>
          {softwareList.map((software) => (
            <button
              key={software}
              onClick={() => setActiveFilter(software)}
              className="px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 border"
              style={{
                background: activeFilter === software ? '#1c1c1f' : 'transparent',
                borderColor: activeFilter === software ? '#007aff' : '#38383a',
                color: activeFilter === software ? '#ffffff' : '#a1a1a6',
              }}
            >
              {software}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAssets.length > 0 ? (
            filteredAssets.map((asset) => {
              const isSelected = asset.id === selectedAssetId;
              return (
                <div
                  key={asset.id}
                  ref={(el) => (assetRefs.current[asset.id] = el)}
                  className="glossy-card p-5 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    borderColor: isSelected ? '#007aff' : undefined,
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-lg font-bold truncate pr-2" style={{ color: '#ffffff' }}>{asset.software}</h2>
                      <span className="text-xs rounded-lg whitespace-nowrap font-bold"
                        style={{ background: '#1c1c1f', border: '1px solid #38383a', color: '#a1a1a6', padding: '2px 8px' }}>
                        {asset.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-mono truncate" style={{ color: '#c7c7cc' }}>{asset.name}</span>
                      <span className="text-sm font-mono rounded-lg font-bold"
                        style={{ color: '#007aff', background: '#1c1c1f', border: '1px solid #38383a', padding: '2px 8px' }}>
                        {asset.extension}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-3" style={{ borderTop: '1px solid #2c2c2e' }}>
                      <div />
                      <a
                        href={asset.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aero-button-primary flex items-center gap-1 text-sm font-bold px-4 py-1.5 rounded-lg"
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
            <div className="col-span-full text-center py-12" style={{ color: '#a1a1a6' }}>
              No assets found for <span className="font-bold" style={{ color: '#ffffff' }}>{activeFilter}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Asset;
