import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Car, Bus, Train, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const transportOptions = [
  {
    icon: Car,
    title: "Kendaraan Pribadi",
    routes: [
      "Dari Jakarta: Tol Jakarta-Cikampek, keluar Karawang Timur, 15 menit ke AquaGate",
      "Dari Bandung: Tol Purbaleunyi, keluar Padalarang, 30 menit ke AquaGate",
    ],
    parking: "Tersedia parkir luas untuk 500+ mobil dan 1000+ motor",
  },
  {
    icon: Bus,
    title: "Bus & Angkutan Umum",
    routes: [
      "Bus DAMRI dari Terminal Kampung Rambutan",
      "Angkot K01 dari Stasiun Karawang",
    ],
    parking: "Turun di Halte AquaGate, jalan kaki 5 menit",
  },
  {
    icon: Train,
    title: "Kereta Api",
    routes: [
      "KRL Commuter Line turun di Stasiun Karawang",
      "Lanjut angkot K01 atau ojek online",
    ],
    parking: "Estimasi waktu 20 menit dari stasiun",
  },
];

const Lokasi = () => {
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
              <MapPin className="inline w-4 h-4 mr-1" />
              Lokasi
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Temukan{" "}
              <span className="aqua-gradient-text">Kami</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mudah dijangkau dari berbagai arah dengan berbagai moda transportasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 relative"
            >
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <MapPin className="w-16 h-16 text-primary" />
                <p className="text-muted-foreground text-center px-4">
                  Google Maps akan ditampilkan di sini
                </p>
                <Button variant="aqua" asChild>
                  <a 
                    href="https://maps.google.com/?q=-6.3219,107.2994" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Buka di Google Maps
                  </a>
                </Button>
              </div>

              {/* Map Decoration */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-dashed border-primary/30 rounded-full" />
                <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-dashed border-accent/30 rounded-full" />
              </div>
            </motion.div>

            {/* Address & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-2xl bg-card border border-border mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl aqua-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Alamat Lengkap</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Jl. Wahana Air No. 123<br />
                      Kecamatan Telukjambe Timur<br />
                      Kabupaten Karawang<br />
                      Jawa Barat 41361<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Koordinat GPS</h4>
                <p className="text-muted-foreground font-mono">-6.3219, 107.2994</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cara Menuju AquaGate
            </h2>
            <p className="text-muted-foreground">
              Pilih transportasi yang paling nyaman untuk Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl aqua-gradient flex items-center justify-center mb-4">
                  <option.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{option.title}</h3>
                
                <div className="space-y-3 mb-4">
                  {option.routes.map((route, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-muted-foreground text-sm">{route}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">ℹ️ </span>
                    {option.parking}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lokasi;
