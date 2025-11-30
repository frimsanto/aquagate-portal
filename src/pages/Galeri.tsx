import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { X, Play, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Semua", "Wahana", "Portal", "Fasilitas", "Event", "Malam"];

const galleryItems = [
  { id: 1, category: "Portal", title: "Portal AquaGate Siang", type: "image" },
  { id: 2, category: "Portal", title: "Portal AquaGate Malam", type: "image" },
  { id: 3, category: "Wahana", title: "Kolam Ombak", type: "image" },
  { id: 4, category: "Wahana", title: "Seluncuran Extreme", type: "image" },
  { id: 5, category: "Wahana", title: "Lazy River", type: "image" },
  { id: 6, category: "Wahana", title: "Kolam Anak", type: "image" },
  { id: 7, category: "Fasilitas", title: "Gazebo Area", type: "image" },
  { id: 8, category: "Fasilitas", title: "Food Court", type: "image" },
  { id: 9, category: "Event", title: "Festival Air 2024", type: "image" },
  { id: 10, category: "Malam", title: "Suasana Malam", type: "image" },
  { id: 11, category: "Malam", title: "LED Show", type: "image" },
  { id: 12, category: "Wahana", title: "Video Promo", type: "video" },
];

const Galeri = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "Semua"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Galeri
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Foto &{" "}
              <span className="aqua-gradient-text">Video</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Jelajahi keindahan dan keseruan AquaGate melalui koleksi foto dan video kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item.id)}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    {/* Placeholder Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.type === "video" ? (
                        <Play className="w-12 h-12 text-primary" />
                      ) : (
                        <ImageIcon className="w-12 h-12 text-primary/50" />
                      )}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <span className="text-xs text-primary font-medium">{item.category}</span>
                        <h3 className="text-foreground font-semibold">{item.title}</h3>
                      </div>
                    </div>

                    {/* Video Badge */}
                    {item.type === "video" && (
                      <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-coral flex items-center justify-center">
                        <Play className="w-5 h-5 text-coral-foreground fill-current" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-muted transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <ImageIcon className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {galleryItems.find(i => i.id === selectedItem)?.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Galeri;
