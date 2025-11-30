import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight, Tag, Megaphone, Gift, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    type: "promo",
    title: "Promo Spesial Akhir Tahun 2024",
    excerpt: "Dapatkan diskon hingga 50% untuk tiket masuk selama periode Desember 2024 - Januari 2025.",
    date: "20 November 2024",
    category: "Promo",
  },
  {
    id: 2,
    type: "event",
    title: "Festival Air AquaGate 2024",
    excerpt: "Nikmati berbagai pertunjukan spektakuler dan aktivitas seru dalam Festival Air tahunan kami.",
    date: "15 November 2024",
    category: "Event",
  },
  {
    id: 3,
    type: "news",
    title: "Wahana Baru: Mega Splash",
    excerpt: "AquaGate memperkenalkan wahana seluncuran terbaru setinggi 20 meter dengan 3 jalur berbeda.",
    date: "10 November 2024",
    category: "Berita",
  },
  {
    id: 4,
    type: "promo",
    title: "Birthday Free Entry",
    excerpt: "Rayakan ulang tahun Anda di AquaGate dan nikmati tiket masuk GRATIS! Syarat & ketentuan berlaku.",
    date: "5 November 2024",
    category: "Promo",
  },
  {
    id: 5,
    type: "news",
    title: "AquaGate Raih Penghargaan",
    excerpt: "Penghargaan Wahana Wisata Terbaik Regional dari Dinas Pariwisata Jawa Barat tahun 2024.",
    date: "1 November 2024",
    category: "Berita",
  },
  {
    id: 6,
    type: "event",
    title: "Night Splash Party",
    excerpt: "Event swimming party malam hari dengan DJ performance dan light show spektakuler setiap Sabtu.",
    date: "28 Oktober 2024",
    category: "Event",
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "promo": return Gift;
    case "event": return Megaphone;
    default: return Newspaper;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "promo": return "bg-coral/10 text-coral";
    case "event": return "bg-accent/10 text-accent";
    default: return "bg-primary/10 text-primary";
  }
};

const Artikel = () => {
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
              Artikel & Berita
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Update{" "}
              <span className="aqua-gradient-text">Terbaru</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ikuti berita terkini, promo menarik, dan event seru dari AquaGate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {["Semua", "Promo", "Event", "Berita"].map((filter) => (
              <Button
                key={filter}
                variant={filter === "Semua" ? "default" : "ghost"}
                size="sm"
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const TypeIcon = getTypeIcon(article.type);
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TypeIcon className="w-12 h-12 text-primary/30" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(article.type)}`}>
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Muat Lebih Banyak
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Berlangganan Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Dapatkan info promo dan event terbaru langsung di inbox Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="aqua" size="lg">
                Berlangganan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Artikel;
