import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Camera, Heart, Share2, MapPin } from "lucide-react";

const photoSpots = [
  {
    id: 1,
    name: "Portal AquaGate",
    description: "Spot foto ikonik dengan latar belakang portal megah. Sempurna untuk foto portrait dan group.",
    tips: "Waktu terbaik: Golden hour (06:00-07:00 & 17:00-18:00)",
    hashtag: "#AquaGatePortal",
  },
  {
    id: 2,
    name: "Rainbow Bridge",
    description: "Jembatan warna-warni di atas lazy river dengan pemandangan kolam yang menawan.",
    tips: "Gunakan angle dari bawah untuk efek dramatis",
    hashtag: "#RainbowBridge",
  },
  {
    id: 3,
    name: "Wave Pool Deck",
    description: "Area tepi kolam ombak dengan backdrop ombak yang dinamis dan tropical vibes.",
    tips: "Foto saat ombak sedang tinggi untuk action shot",
    hashtag: "#WavePoolVibes",
  },
  {
    id: 4,
    name: "Tropical Garden",
    description: "Taman tropis dengan tanaman hijau dan bunga warna-warni sebagai background.",
    tips: "Sempurna untuk foto OOTD dan candid",
    hashtag: "#TropicalGarden",
  },
  {
    id: 5,
    name: "Night LED Zone",
    description: "Area dengan instalasi LED yang memukau, ideal untuk foto malam hari.",
    tips: "Datang setelah jam 18:00 untuk melihat LED show",
    hashtag: "#AquaGateNight",
  },
  {
    id: 6,
    name: "Floating Gazebo",
    description: "Gazebo terapung di tengah kolam dengan view 360 derajat yang instagramable.",
    tips: "Reservasi lebih awal karena spot terbatas",
    hashtag: "#FloatingGazebo",
  },
];

const SpotFoto = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              <Camera className="inline w-4 h-4 mr-1" />
              Spot Foto
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Area Foto{" "}
              <span className="aqua-gradient-text">Instagramable</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Abadikan momen terbaik Anda di spot-spot foto paling instagramable di AquaGate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Spots Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoSpots.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-16 h-16 text-primary/30" />
                    </div>
                    
                    {/* Overlay Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                        <Heart className="w-5 h-5 text-coral" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                        <Share2 className="w-5 h-5 text-primary" />
                      </button>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm">
                        <MapPin className="w-4 h-4 text-coral" />
                        {spot.name}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{spot.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{spot.description}</p>
                    
                    <div className="p-3 rounded-xl bg-muted/50 mb-4">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">💡 Tips: </span>
                        {spot.tips}
                      </p>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {spot.hashtag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Tips */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Tips Foto Terbaik
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { emoji: "🌅", tip: "Golden hour memberikan cahaya terbaik untuk foto outdoor" },
                { emoji: "📱", tip: "Aktifkan mode portrait untuk efek bokeh yang cantik" },
                { emoji: "👗", tip: "Kenakan pakaian berwarna cerah untuk kontras dengan air biru" },
                { emoji: "🏊", tip: "Gunakan waterproof case untuk foto underwater" },
                { emoji: "🌙", tip: "Foto malam dengan LED menciptakan efek magical" },
                { emoji: "📸", tip: "Tag @AquaGate untuk kesempatan di-repost" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <p className="text-foreground">{item.tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SpotFoto;
