import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MoveHorizontal } from "lucide-react";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

type FilterType = "all" | "neubau" | "renovierung" | "gewerbe";

const Portfolio = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const filters: { label: string; value: FilterType }[] = [
    { label: "Alle", value: "all" },
    { label: "Neubau", value: "neubau" },
    { label: "Renovierung", value: "renovierung" },
    { label: "Gewerbe", value: "gewerbe" },
  ];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  return (
    <section id="portfolio" className="py-20 bg-space-light/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brass/70">
            Unsere Arbeiten
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            REFERENZEN
          </h2>
          <p className="mt-3 text-platinum/60 max-w-2xl mx-auto">
            Qualität, die man sieht. Entdecken Sie unsere abgeschlossenen
            Projekte.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 text-sm font-medium uppercase tracking-wider transition-all rounded-full ${
                filter === f.value
                  ? "bg-brass text-space"
                  : "border border-platinum/20 text-platinum/60 hover:border-platinum/40 hover:text-white"
              }`}
            >
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
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-platinum/10 bg-space/50 transition-all hover:border-brass/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)]"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] w-full bg-space-light/80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">
                    {item.category === "neubau" && "🏗️"}
                    {item.category === "renovierung" && "🔨"}
                    {item.category === "gewerbe" && "🏢"}
                  </div>
                  <p className="text-sm text-platinum/40 font-medium">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-space/90 via-space/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
                <div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-sm text-platinum/60">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-medium uppercase tracking-widest text-brass/70">
              Vorher · Nachher
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              Transformationen in <span className="text-brass">Aktion</span>
            </h3>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-platinum/10 bg-space/50 cursor-ew-resize"
              onMouseMove={handleSliderMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Full) */}
              <div className="absolute inset-0 bg-space-light/80 flex items-center justify-center">
                <span className="text-platinum/40 text-sm">Nachher</span>
              </div>

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 bg-space/80 flex items-center justify-center overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <span className="text-platinum/40 text-sm">Vorher</span>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-brass"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-brass p-2 shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                  <MoveHorizontal className="h-4 w-4 text-space" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 rounded bg-space/80 px-3 py-1 text-xs text-platinum/60 backdrop-blur-sm">
                Vorher
              </div>
              <div className="absolute bottom-4 right-4 rounded bg-space/80 px-3 py-1 text-xs text-platinum/60 backdrop-blur-sm">
                Nachher
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-platinum/40">
              Ziehen Sie den Schieberegler, um die Transformation zu sehen
            </p>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-space/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full rounded-xl border border-platinum/10 bg-space-light p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 rounded-full bg-space/50 p-2 text-platinum/60 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-video w-full rounded-lg bg-space/50 flex items-center justify-center mb-4">
                <span className="text-5xl">
                  {selectedItem.category === "neubau" && "🏗️"}
                  {selectedItem.category === "renovierung" && "🔨"}
                  {selectedItem.category === "gewerbe" && "🏢"}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {selectedItem.title}
              </h3>
              <p className="mt-2 text-platinum/60">
                {selectedItem.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brass/10 px-3 py-1 text-xs text-brass"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
