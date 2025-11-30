import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Waves, Users, Rocket, Utensils, ShowerHead, 
  Car, Shirt, Baby, TreePine, Coffee, Shield, Wifi
} from "lucide-react";

const facilities = [
  {
    icon: Waves,
    title: "Kolam Ombak",
    description: "Kolam ombak terbesar dengan teknologi wave generator modern. Rasakan sensasi bermain ombak layaknya di pantai.",
    features: ["Wave generator", "Kedalaman bervariasi", "Area luas 2000m²"],
  },
  {
    icon: Baby,
    title: "Kolam Anak",
    description: "Area khusus anak dengan kedalaman aman dan playground air yang menyenangkan.",
    features: ["Kedalaman 30-50cm", "Playground air", "Pengawasan ketat"],
  },
  {
    icon: Rocket,
    title: "Wahana Seluncur",
    description: "Berbagai seluncuran air dengan tingkat ketegangan berbeda untuk pengalaman seru.",
    features: ["5 jenis seluncuran", "Tinggi hingga 15m", "Speed slide"],
  },
  {
    icon: Waves,
    title: "Lazy River",
    description: "Sungai buatan sepanjang 500 meter untuk bersantai dengan ban pelampung.",
    features: ["Panjang 500m", "Arus lembut", "Pemandangan asri"],
  },
  {
    icon: TreePine,
    title: "Gazebo & Saung",
    description: "Tempat istirahat nyaman dengan pemandangan kolam dan area hijau.",
    features: ["20+ unit gazebo", "Kapasitas 6-10 orang", "Tersedia sewa"],
  },
  {
    icon: Utensils,
    title: "Food Court",
    description: "Area kuliner dengan berbagai pilihan makanan dan minuman untuk seluruh keluarga.",
    features: ["15+ tenant", "Halal certified", "Harga terjangkau"],
  },
  {
    icon: Coffee,
    title: "Cafe & Resto",
    description: "Restoran dengan menu premium dan pemandangan kolam yang menawan.",
    features: ["Menu western & asian", "Indoor AC", "Live cooking"],
  },
  {
    icon: ShowerHead,
    title: "Ruang Bilas",
    description: "Fasilitas bilas dan kamar mandi bersih dengan air hangat tersedia.",
    features: ["50+ kamar bilas", "Air hangat", "Tersedia sabun"],
  },
  {
    icon: Shirt,
    title: "Locker Room",
    description: "Tempat penyimpanan barang yang aman dengan sistem kunci elektronik.",
    features: ["200+ locker", "Kunci elektronik", "Berbagai ukuran"],
  },
  {
    icon: Car,
    title: "Area Parkir",
    description: "Lahan parkir luas untuk kendaraan roda dua dan empat dengan keamanan 24 jam.",
    features: ["Kapasitas 500 mobil", "Keamanan 24 jam", "CCTV"],
  },
  {
    icon: Shield,
    title: "Lifeguard",
    description: "Tim penyelamat profesional yang siaga di setiap area kolam.",
    features: ["15+ lifeguard", "Tersertifikasi", "Siaga 24 jam"],
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Koneksi internet gratis di seluruh area wahana untuk kenyamanan Anda.",
    features: ["High speed", "Seluruh area", "Gratis"],
  },
];

const Fasilitas = () => {
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
              Fasilitas Lengkap
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Semua Yang Anda{" "}
              <span className="aqua-gradient-text">Butuhkan</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AquaGate menyediakan fasilitas lengkap dan modern untuk kenyamanan dan keseruan liburan keluarga Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl aqua-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <facility.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {facility.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {facility.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ingin Melihat Langsung?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kunjungi AquaGate dan rasakan sendiri semua fasilitas premium yang kami sediakan untuk Anda.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Fasilitas;
