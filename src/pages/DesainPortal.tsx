import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Ruler, Layers, Lightbulb, Palette, Shield, Sparkles } from "lucide-react";

const specs = [
  { icon: Ruler, label: "Dimensi", value: "Lebar 8m x Tinggi 12m" },
  { icon: Layers, label: "Material Utama", value: "Stainless Steel 316L" },
  { icon: Palette, label: "Finishing", value: "Powder Coating Blue" },
  { icon: Lightbulb, label: "Pencahayaan", value: "RGB LED Strip" },
  { icon: Shield, label: "Ketahanan", value: "Anti Karat & UV" },
  { icon: Sparkles, label: "Fitur Khusus", value: "Water Cascade" },
];

const features = [
  {
    title: "Desain Arsitektur Modern",
    description: "Portal dirancang dengan gaya arsitektur kontemporer yang memadukan bentuk lengkung organik dengan struktur geometris modern.",
  },
  {
    title: "Sistem Pencahayaan LED",
    description: "Dilengkapi dengan 500+ titik LED RGB yang dapat diprogram untuk menampilkan berbagai efek cahaya spektakuler di malam hari.",
  },
  {
    title: "Water Cascade Feature",
    description: "Air mengalir dari puncak portal menciptakan tirai air yang menambah kesan dramatis dan menyegarkan.",
  },
  {
    title: "Material Premium",
    description: "Menggunakan stainless steel grade 316L yang tahan korosi dan finishing powder coating untuk ketahanan jangka panjang.",
  },
];

const DesainPortal = () => {
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
              Ikon AquaGate
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Portal{" "}
              <span className="aqua-gradient-text">AquaGate</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Landmark ikonik dengan desain arsitektur akuatik modern yang menjadi simbol kemegahan wahana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portal Visual */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-primary/5 to-accent/10 flex items-center justify-center">
                <div className="relative">
                  {/* Main Portal Structure */}
                  <div className="w-56 h-72 md:w-72 md:h-96 relative">
                    {/* Outer Frame */}
                    <div className="absolute inset-0 border-[12px] border-primary rounded-t-full shadow-2xl shadow-primary/30">
                      {/* Inner Frame */}
                      <div className="absolute inset-3 border-4 border-accent/60 rounded-t-full" />
                      
                      {/* Water Effect */}
                      <motion.div
                        className="absolute inset-6 bg-gradient-to-b from-primary/10 via-accent/20 to-primary/30 rounded-t-full overflow-hidden"
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {/* Cascading Water Lines */}
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-0.5 bg-primary-foreground/30"
                            style={{
                              left: `${15 + i * 18}%`,
                              height: '100%',
                            }}
                            animate={{ opacity: [0.2, 0.6, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          />
                        ))}
                      </motion.div>
                    </div>

                    {/* Top Ornament */}
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 20px hsl(var(--primary) / 0.4)",
                          "0 0 50px hsl(var(--primary) / 0.8)",
                          "0 0 20px hsl(var(--primary) / 0.4)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full aqua-gradient"
                    />

                    {/* Side Pillars */}
                    <div className="absolute -left-8 bottom-0 w-6 h-40 bg-gradient-to-t from-primary to-accent rounded-t-lg shadow-lg" />
                    <div className="absolute -right-8 bottom-0 w-6 h-40 bg-gradient-to-t from-primary to-accent rounded-t-lg shadow-lg" />

                    {/* Base */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[120%] h-8 bg-gradient-to-r from-primary via-accent to-primary rounded-lg" />
                  </div>

                  {/* LED Dots */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-primary"
                      style={{
                        left: `${10 + (i % 6) * 16}%`,
                        top: `${20 + Math.floor(i / 6) * 60}%`,
                      }}
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Spesifikasi Teknis
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Portal AquaGate dirancang dengan standar internasional menggunakan material berkualitas tinggi untuk ketahanan dan keindahan jangka panjang.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-card border border-border"
                  >
                    <spec.icon className="w-6 h-6 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">{spec.label}</p>
                    <p className="font-semibold text-foreground">{spec.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fitur Unggulan Portal
            </h2>
            <p className="text-muted-foreground">
              Detail keistimewaan yang membuat Portal AquaGate menjadi landmark ikonik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DesainPortal;
