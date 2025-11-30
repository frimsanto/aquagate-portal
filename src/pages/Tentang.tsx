import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misi Kami",
    description: "Menyediakan destinasi wisata air berkualitas tinggi yang aman, menyenangkan, dan berkesan bagi seluruh keluarga Indonesia.",
  },
  {
    icon: Eye,
    title: "Visi Kami",
    description: "Menjadi wahana wisata air terdepan di Indonesia dengan standar internasional dan inovasi berkelanjutan.",
  },
  {
    icon: Award,
    title: "Komitmen",
    description: "Mengutamakan keselamatan, kenyamanan, dan kepuasan pengunjung dengan layanan prima dan fasilitas terbaik.",
  },
  {
    icon: Users,
    title: "Komunitas",
    description: "Membangun komunitas wisata yang positif dan berkontribusi pada pertumbuhan ekonomi lokal.",
  },
];

const milestones = [
  { year: "2019", title: "Pendirian", description: "AquaGate didirikan dengan visi menjadi wahana air modern." },
  { year: "2020", title: "Pembangunan", description: "Konstruksi portal ikonik dan fasilitas utama dimulai." },
  { year: "2021", title: "Grand Opening", description: "Pembukaan resmi AquaGate untuk publik." },
  { year: "2023", title: "Ekspansi", description: "Penambahan wahana baru dan peningkatan kapasitas." },
  { year: "2024", title: "Penghargaan", description: "Meraih penghargaan wisata terbaik regional." },
];

const Tentang = () => {
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
              Tentang Kami
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Modern Aquatic{" "}
              <span className="aqua-gradient-text">Architecture</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AquaGate adalah wahana wisata kolam renang modern dengan konsep arsitektur akuatik yang memadukan keindahan desain dengan pengalaman wisata air yang tak terlupakan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Berawal dari mimpi untuk menciptakan destinasi wisata air yang berbeda, AquaGate hadir dengan konsep Modern Aquatic Architecture yang menggabungkan estetika arsitektur kontemporer dengan keseruan wahana air.
                </p>
                <p>
                  Portal ikonik AquaGate dirancang sebagai landmark yang tidak hanya fungsional tetapi juga menjadi daya tarik visual yang memukau. Dengan tinggi 12 meter dan dilengkapi sistem pencahayaan LED, portal ini menjadi simbol modernitas dan inovasi wahana kami.
                </p>
                <p>
                  Kami berkomitmen untuk terus berinovasi dan meningkatkan kualitas layanan demi memberikan pengalaman terbaik bagi setiap pengunjung yang datang ke AquaGate.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl aqua-gradient p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-6xl font-bold aqua-gradient-text mb-4">5+</p>
                    <p className="text-xl text-muted-foreground">Tahun Melayani</p>
                    <p className="text-muted-foreground">Keluarga Indonesia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-muted-foreground">
              Prinsip yang menjadi fondasi setiap langkah AquaGate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl aqua-gradient flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-muted-foreground">
              Milestone penting dalam sejarah AquaGate
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full aqua-gradient flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tentang;
