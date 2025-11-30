import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ticket, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 aqua-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2040%2040%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%20fill%3D%22rgba(255%2C255%2C255%2C0.1)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Siap Untuk Petualangan Air?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Dapatkan tiket sekarang dan nikmati semua wahana air seru bersama keluarga. 
            Promo spesial menanti Anda!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/harga">
              <Button
                size="xl"
                className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Ticket className="w-5 h-5" />
                Beli Tiket Online
              </Button>
            </Link>
            <Link to="/kontak">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: "50K+", label: "Pengunjung/Bulan" },
              { value: "15+", label: "Wahana Air" },
              { value: "4.8", label: "Rating Google" },
              { value: "5", label: "Tahun Beroperasi" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
