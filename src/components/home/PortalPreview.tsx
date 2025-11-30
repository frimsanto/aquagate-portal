import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, Layers, Sparkles } from "lucide-react";

const specs = [
  { icon: Ruler, label: "Tinggi", value: "12 Meter" },
  { icon: Layers, label: "Material", value: "Stainless Steel" },
  { icon: Sparkles, label: "Fitur", value: "LED Lighting" },
];

export const PortalPreview = () => {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Ikon AquaGate
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Portal{" "}
              <span className="aqua-gradient-text">AquaGate</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Portal megah dengan desain arsitektur akuatik modern yang menjadi landmark ikonik wahana. 
              Dirancang dengan material premium dan dilengkapi sistem pencahayaan LED yang memukau di malam hari.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {specs.map((spec) => (
                <div key={spec.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <spec.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">{spec.label}</p>
                  <p className="font-semibold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>

            <Link to="/desain-portal">
              <Button variant="aqua" size="lg">
                Lihat Detail Desain
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Placeholder Portal Visual */}
              <div className="absolute inset-0 aqua-gradient opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Portal Frame */}
                  <div className="w-64 h-80 md:w-80 md:h-96 border-8 border-primary rounded-t-full relative">
                    <div className="absolute inset-4 border-4 border-accent/50 rounded-t-full" />
                    <div className="absolute inset-8 bg-gradient-to-b from-primary/20 to-accent/30 rounded-t-full" />
                    
                    {/* Decorative Elements */}
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 20px hsl(var(--primary) / 0.3)",
                          "0 0 40px hsl(var(--primary) / 0.6)",
                          "0 0 20px hsl(var(--primary) / 0.3)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary"
                    />
                    
                    {/* Side Pillars */}
                    <div className="absolute -left-6 bottom-0 w-4 h-32 bg-gradient-to-t from-primary to-accent rounded-t-full" />
                    <div className="absolute -right-6 bottom-0 w-4 h-32 bg-gradient-to-t from-primary to-accent rounded-t-full" />
                  </div>

                  {/* Water Effect */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-accent/30 rounded-full blur-xl"
                  />
                </div>
              </div>

              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/40"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
