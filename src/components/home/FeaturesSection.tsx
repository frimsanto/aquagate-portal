import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Waves, Users, Camera, Utensils, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Waves,
    title: "Kolam Ombak",
    description: "Rasakan sensasi ombak pantai dalam kolam ombak terbesar dengan teknologi wave generator.",
  },
  {
    icon: Users,
    title: "Area Keluarga",
    description: "Kolam anak-anak dengan playground air yang aman dan menyenangkan untuk si kecil.",
  },
  {
    icon: Sparkles,
    title: "Wahana Seru",
    description: "Seluncuran air ekstrem dan lazy river untuk pengalaman petualangan air yang tak terlupakan.",
  },
  {
    icon: Camera,
    title: "Spot Instagramable",
    description: "Portal AquaGate ikonik dan berbagai spot foto menarik untuk konten sosial media Anda.",
  },
  {
    icon: Utensils,
    title: "Food Court",
    description: "Beragam kuliner lezat dari makanan ringan hingga menu lengkap untuk seluruh keluarga.",
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "Lifeguard profesional dan standar keamanan internasional untuk kenyamanan Anda.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Fasilitas Unggulan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nikmati Berbagai{" "}
            <span className="aqua-gradient-text">Fasilitas Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AquaGate menyediakan fasilitas lengkap untuk pengalaman wisata air terbaik bagi seluruh keluarga
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl aqua-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/fasilitas">
            <Button variant="outline" size="lg">
              Lihat Semua Fasilitas
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
