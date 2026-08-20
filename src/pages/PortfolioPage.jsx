import { useEffect, useMemo, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Play, ArrowUpRight, PackageOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, categories } from "../utilities/data";
import VideoModal from "../components/VideoModal";

export default function PortfolioPage({ onPageChange }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [modal, setModal] = useState({ isOpen: false, url: "", title: "" });
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -250 : 250,
      behavior: "auto",
    });
  };

  const handleAddonClick = (e, project) => {
    e.stopPropagation();
    if (!project.addon?.available) return;
    sessionStorage.setItem("selectedAssetId", project.addon.assetId);
    onPageChange("/assets");
  };

  const categoryCounts = useMemo(
    () =>
      projects.reduce(
        (counts, project) => ({
          ...counts,
          [project.category]: (counts[project.category] || 0) + 1,
        }),
        { All: projects.length },
      ),
    [],
  );

  const visibleProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filtered = projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = !query || project.title.toLowerCase().includes(query) || project.subtitle.toLowerCase().includes(query) || project.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    return [...filtered].sort((a, b) =>
      sortOrder === "Oldest" ? a.year.localeCompare(b.year) : b.year.localeCompare(a.year),
    );
  }, [activeCategory, searchQuery, sortOrder]);

  const openProject = (project) => {
    if (project.type !== "video" || !project.videoUrl) return;
    setModal({ isOpen: true, url: project.videoUrl, title: project.title });
  };

  return (
    <div className="relative min-h-screen md:pt-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#00A8E8]/[0.08] blur-[140px]" />

      <section>
        {/* Filter Bar */}
        <div className="sticky top-[60px] z-30 mb-4 w-full rounded-2xl bg-white/70 shadow-[0_4px_24px_rgba(0,168,232,0.1)] backdrop-blur-xl border border-white/50">
          <div className="flex flex-col gap-3 p-3 lg:flex-row lg:items-center lg:p-4">
            <div className="relative flex flex-1 items-center">
              <button onClick={() => scroll("left")} className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 border border-white/60 text-[#555577] hover:bg-white hover:shadow-md transition-all">
                <ChevronLeft size={16} />
              </button>
              <div ref={scrollRef} className="scrollbar-hide mx-9 flex gap-2 overflow-x-auto scroll-smooth">
                {categories.map(({ name, icon: Icon }) => {
                  const isActive = activeCategory === name;
                  return (
                    <button
                      key={name}
                      onClick={() => setActiveCategory(name)}
                      className="flex flex-shrink-0 cursor-pointer items-center gap-2 rounded-full px-3.5 py-2.5 text-[11px] font-semibold transition-all border"
                      style={{
                        background: isActive ? 'linear-gradient(180deg, #7FC8F8, #00A8E8)' : 'rgba(255,255,255,0.5)',
                        borderColor: isActive ? '#00A8E8' : 'rgba(255,255,255,0.6)',
                        color: isActive ? '#fff' : '#555577',
                        boxShadow: isActive ? '0 2px 10px rgba(0,168,232,0.3)' : 'none',
                      }}
                    >
                      <Icon size={13} strokeWidth={isActive ? 2.5 : 1.8} />
                      <span>{name}</span>
                    </button>
                  );
                })}
              </div>
              <button onClick={() => scroll("right")} className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 border border-white/60 text-[#555577] hover:bg-white hover:shadow-md transition-all">
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="flex w-full flex-col items-center gap-2 border-t border-white/30 pt-3 lg:w-auto lg:flex-row lg:border-l lg:border-t-0 lg:pl-3 lg:pt-0">
              <div className="flex w-full items-center lg:w-auto">
                <label className="flex w-full max-w-[320px] items-center gap-2 rounded-full bg-white/50 border border-white/60 px-3 text-[#555577] lg:w-[260px]">
                  <Search size={14} className="flex-shrink-0" />
                  <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search projects"
                    className="h-10 w-full bg-transparent text-xs text-[#2B3A4E] outline-none placeholder:text-[#555577]/40"
                  />
                </label>
              </div>
              <div className="flex w-full justify-center lg:w-auto">
                <select
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value)}
                  aria-label="Sort projects"
                  className="w-full max-w-[320px] cursor-pointer rounded-full bg-white/50 border border-white/60 px-4 py-2.5 text-[11px] text-[#555577] outline-none lg:w-auto"
                >
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="mt-15 sm:mt-0 w-full columns-1 gap-0 sm:columns-2 md:columns-3 xl:columns-4">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.2), ease: [0.22, 1, 0.36, 1] }}
                onClick={() => openProject(project)}
                className={`group mb-0 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl ${project.type === "video" ? "cursor-pointer" : "cursor-default"}`}
                style={{
                  border: '2px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 4px 20px rgba(0,168,232,0.08)',
                }}
              >
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-[400ms] ease-out group-hover:bg-black/20" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100" />

                  <div className="absolute left-2 top-2 z-20 sm:left-3 sm:top-3">
                    <span className="inline-flex max-w-[calc(100vw-110px)] rounded-full bg-white/70 backdrop-blur-md px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#2B3A4E] border border-white/50 sm:px-3 sm:py-1.5 sm:text-[9px]">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute right-2 top-2 z-30 sm:right-3 sm:top-3">
                    <button onClick={(e) => handleAddonClick(e, project)} className="transition-all duration-300 hover:scale-110">
                      <PackageOpen size={22} className={project.addon?.available ? "text-[#7ED957]" : "text-white/70"} />
                    </button>
                  </div>

                  {project.type === "video" && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-white/90 text-[#00A8E8] opacity-90 backdrop-blur-md transition-transform duration-[400ms] group-hover:scale-100 shadow-[0_4px_20px_rgba(0,168,232,0.3)]">
                        <Play size={18} fill="currentColor" className="ml-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <div>
                      <p className="mb-1 text-[9px] uppercase tracking-[0.14em] text-white/80">{project.subtitle}</p>
                      <h2 className="font-display text-lg font-semibold text-white drop-shadow-lg">{project.title}</h2>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <p className="text-center text-sm font-light tracking-wider text-[#555577] leading-relaxed max-w-3xl">
            *This content is not available for AI training. All rights reserved*
          </p>
        </div>

        {visibleProjects.length === 0 && (
          <div className="rounded-3xl border-2 border-dashed border-sky-200/50 py-24 text-center bg-white/30">
            <p className="text-sm text-[#555577]">No projects match that filter.</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-4 cursor-pointer text-xs font-bold uppercase tracking-widest text-[#00A8E8] hover:text-[#3BA4D4] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="mt-20 flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/50 bg-white/40 backdrop-blur-sm p-7 md:flex-row md:items-center md:p-10 shadow-[0_8px_32px_rgba(0,168,232,0.08)]">
          <div>
            <p className="mb-3 font-display text-[10px] uppercase tracking-[0.2em] text-[#00A8E8] font-bold">
              Have something in mind?
            </p>
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl text-[#2B3A4E]">
              Let's make the next frame count.
            </h2>
          </div>
          <button
            onClick={() => onPageChange("/contact")}
            className="flex cursor-pointer items-center gap-3 rounded-full glossy-button px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-transform hover:scale-[1.03]"
          >
            Work with us
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      <VideoModal
        isOpen={modal.isOpen}
        onClose={() => setModal((current) => ({ ...current, isOpen: false }))}
        videoUrl={modal.url}
        videoTitle={modal.title}
      />
    </div>
  );
}
