import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MoveHorizontal,
  Maximize2,
  Building2,
  Hammer,
  Briefcase,
  Layers,
  Sparkles,
  Wrench,
  ArrowLeft,
  ArrowRight,
  MousePointer,
} from "lucide-react";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

type FilterType = "all" | "neubau" | "renovierung" | "gewerbe";

const Portfolio = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const filters: { label: string; value: FilterType; icon: React.ReactNode }[] =
    [
      {
        label: "Alle Projekte",
        value: "all",
        icon: <Layers className="h-4 w-4" />,
      },
      {
        label: "Neubau",
        value: "neubau",
        icon: <Building2 className="h-4 w-4" />,
      },
      {
        label: "Renovierung",
        value: "renovierung",
        icon: <Hammer className="h-4 w-4" />,
      },
      {
        label: "Gewerbe",
        value: "gewerbe",
        icon: <Briefcase className="h-4 w-4" />,
      },
    ];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleSliderRelease = () => {
    setIsDragging(false);
  };

  const categoryLabels = {
    neubau: "Neubau",
    renovierung: "Renovierung",
    gewerbe: "Gewerbe",
  };

  const categoryIcons = {
    neubau: <Building2 className="h-5 w-5" />,
    renovierung: <Hammer className="h-5 w-5" />,
    gewerbe: <Briefcase className="h-5 w-5" />,
  };

  // Get the renovation item with before/after images for the slider
  const renovationItem = portfolioItems.find(
    (item) =>
      item.category === "renovierung" && item.beforeImage && item.afterImage,
  );

  return (
    <section id="portfolio" className="py-24 bg-space relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-brass/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-electric/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brass/70">
            <span className="h-px w-8 bg-brass/30" />
            Unsere Arbeiten
            <span className="h-px w-8 bg-brass/30" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            REFERENZEN
          </h2>
          <p className="mt-4 text-platinum/60 max-w-2xl mx-auto">
            Qualität, die man sieht. Entdecken Sie unsere abgeschlossenen
            Projekte in Wien und Umgebung.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-150 rounded-full ${
                filter === f.value
                  ? "bg-gradient-to-r from-brass to-brass-light text-space shadow-[0_0_30px_rgba(201,168,76,0.2)]"
                  : "border border-platinum/10 text-platinum/60 hover:border-platinum/30 hover:text-white hover:bg-space/30"
              }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-platinum/10 bg-space/30 transition-all duration-150 hover:border-brass/30 hover:shadow-[0_0_60px_rgba(201,168,76,0.06)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-space-light/80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-space/80 px-3 py-1.5 text-xs font-medium text-platinum/60 backdrop-blur-sm border border-platinum/10">
                {categoryIcons[item.category as keyof typeof categoryIcons]}
                <span>
                  {categoryLabels[item.category as keyof typeof categoryLabels]}
                </span>
              </div>

              <div className="absolute top-3 right-3 rounded-full bg-space/80 p-2 opacity-0 transition-opacity duration-150 group-hover:opacity-100 border border-platinum/10">
                <Maximize2 className="h-4 w-4 text-platinum/60" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-space/95 via-space/60 to-transparent opacity-0 transition-opacity duration-150 group-hover:opacity-100 flex items-end p-6">
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-platinum/60">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brass/20 px-2.5 py-0.5 text-xs text-brass"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="rounded-full bg-platinum/10 px-2.5 py-0.5 text-xs text-platinum/40">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider Section - Resized for Better Viewing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brass/70">
              <span className="h-px w-8 bg-brass/30" />
              Vorher · Nachher
              <span className="h-px w-8 bg-brass/30" />
            </span>
            <h3 className="mt-3 font-display text-3xl font-bold text-white">
              Transformationen in{" "}
              <span className="bg-gradient-to-r from-brass to-brass-light bg-clip-text text-transparent">
                Aktion
              </span>
            </h3>
            <p className="mt-2 text-sm text-platinum/40">
              Ziehen Sie den Schieberegler, um die Veränderung zu sehen
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-platinum/10 bg-space/50 shadow-[0_0_60px_rgba(0,0,0,0.3)]"
              onMouseMove={handleSliderMove}
              onMouseUp={handleSliderRelease}
              onMouseLeave={handleSliderRelease}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleSliderRelease}
            >
              {renovationItem ? (
                <>
                  {/* After Image (Full) */}
                  <div className="absolute inset-0">
                    <img
                      src={renovationItem.afterImage}
                      alt="Nachher"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-space/80 px-3 py-1 text-xs text-platinum/60 backdrop-blur-sm border border-platinum/10">
                      <Sparkles className="h-3 w-3 text-brass" />
                      <span>Nachher</span>
                    </div>
                  </div>

                  {/* Before Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={renovationItem.beforeImage}
                      alt="Vorher"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-space/80 px-3 py-1 text-xs text-platinum/60 backdrop-blur-sm border border-platinum/10">
                      <Wrench className="h-3 w-3" />
                      <span>Vorher</span>
                    </div>
                  </div>

                  {/* Slider Handle - Smaller */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-brass shadow-[0_0_30px_rgba(201,168,76,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brass to-brass-light p-2.5 shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-all duration-150 hover:scale-110 cursor-ew-resize">
                      <div className="flex items-center gap-0.5">
                        <ArrowLeft className="h-2.5 w-2.5 text-space" />
                        <MoveHorizontal className="h-3 w-3 text-space" />
                        <ArrowRight className="h-2.5 w-2.5 text-space" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-brass/20 blur-xl" />
                  </div>

                  {/* Percentage Indicator - Smaller */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-space/80 px-3 py-1 text-xs text-platinum/60 backdrop-blur-sm border border-platinum/10">
                    <span className="font-mono text-[10px]">
                      {Math.round(sliderPosition)}%
                    </span>
                    <span className="ml-1 text-[10px] text-platinum/40">
                      transformed
                    </span>
                  </div>

                  {/* Project Title Overlay - Smaller */}
                  <div className="absolute top-3 left-3 rounded-full bg-space/80 px-3 py-1 text-[10px] text-platinum/60 backdrop-blur-sm border border-platinum/10">
                    {renovationItem.title}
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="h-16 w-16 text-brass/30 mx-auto mb-4" />
                    <p className="text-platinum/40">
                      Keine Vorher/Nachher Bilder verfügbar
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Slider Instructions - Smaller */}
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-platinum/30">
              <span className="flex items-center gap-1.5">
                <Wrench className="h-3 w-3" />
                Vorher
              </span>
              <span className="h-3 w-px bg-platinum/10" />
              <span className="flex items-center gap-1.5">
                <MousePointer className="h-3 w-3" />
                Ziehen Sie den Schieberegler
              </span>
              <span className="h-3 w-px bg-platinum/10" />
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-brass/60" />
                Nachher
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-space/95 backdrop-blur-md p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-2xl w-full rounded-2xl border border-platinum/10 bg-space-light p-8 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 rounded-full bg-space/50 p-2.5 text-platinum/60 hover:text-white hover:bg-space/70 transition-all duration-150"
              >
                <X className="h-5 w-5" />
              </button>

              <div
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4 ${
                  selectedItem.category === "neubau"
                    ? "bg-brass/20 text-brass"
                    : selectedItem.category === "renovierung"
                      ? "bg-electric/20 text-electric"
                      : "bg-signal/20 text-signal"
                }`}
              >
                {
                  categoryIcons[
                    selectedItem.category as keyof typeof categoryIcons
                  ]
                }
                <span>
                  {
                    categoryLabels[
                      selectedItem.category as keyof typeof categoryLabels
                    ]
                  }
                </span>
              </div>

              <div className="aspect-video w-full rounded-xl bg-space/50 overflow-hidden mb-6">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {selectedItem.title}
              </h3>

              <p className="mt-3 text-platinum/60 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brass/10 px-3 py-1.5 text-xs text-brass"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-brass/20 via-brass/5 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
