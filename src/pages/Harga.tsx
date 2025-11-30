import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Clock, Calendar, Users, Sparkles } from "lucide-react";

const tickets = [
  {
    name: "Weekday",
    price: "75.000",
    period: "Senin - Jumat",
    description: "Tiket masuk hari kerja dengan akses ke semua wahana",
    features: [
      "Akses semua kolam & wahana",
      "Gratis locker standar",
      "Gratis parkir motor",
    ],
    popular: false,
  },
  {
    name: "Weekend",
    price: "100.000",
    period: "Sabtu - Minggu",
    description: "Tiket masuk akhir pekan dengan akses lengkap",
    features: [
      "Akses semua kolam & wahana",
      "Gratis locker standar",
      "Gratis parkir motor",
      "Welcome drink",
    ],
    popular: true,
  },
  {
    name: "Family Pack",
    price: "350.000",
    period: "4 Orang (2 Dewasa + 2 Anak)",
    description: "Paket hemat untuk keluarga",
    features: [
      "4 tiket masuk (weekend/weekday)",
      "Gratis 2 locker besar",
      "Gratis parkir mobil",
      "Diskon 20% F&B",
      "Gazebo 2 jam",
    ],
    popular: false,
  },
];

const promos = [
  {
    title: "Early Bird",
    discount: "20%",
    description: "Diskon untuk pengunjung yang datang sebelum jam 09:00",
    validity: "Berlaku setiap hari",
  },
  {
    title: "Birthday Special",
    discount: "FREE",
    description: "Gratis tiket masuk di hari ulang tahun Anda",
    validity: "Tunjukkan KTP/SIM",
  },
  {
    title: "Group Booking",
    discount: "30%",
    description: "Diskon untuk rombongan minimal 20 orang",
    validity: "Reservasi H-3",
  },
];

const schedule = [
  { day: "Senin - Jumat", open: "08:00", close: "18:00" },
  { day: "Sabtu - Minggu", open: "07:00", close: "20:00" },
  { day: "Hari Libur Nasional", open: "07:00", close: "20:00" },
];

const Harga = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-coral/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-coral/20 text-coral text-sm font-medium mb-4">
              Harga Tiket
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Pilih Tiket{" "}
              <span className="aqua-gradient-text">Terbaik</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Berbagai pilihan tiket dengan harga terjangkau untuk pengalaman wisata air terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tickets.map((ticket, index) => (
              <motion.div
                key={ticket.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  ticket.popular
                    ? "bg-gradient-to-b from-primary to-accent text-primary-foreground scale-105"
                    : "bg-card border border-border"
                }`}
              >
                {ticket.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-coral text-coral-foreground text-sm font-medium">
                    Populer
                  </span>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${ticket.popular ? "" : "text-foreground"}`}>
                    {ticket.name}
                  </h3>
                  <p className={`text-sm mb-4 ${ticket.popular ? "opacity-80" : "text-muted-foreground"}`}>
                    {ticket.period}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-sm ${ticket.popular ? "opacity-80" : "text-muted-foreground"}`}>Rp</span>
                    <span className="text-5xl font-bold">{ticket.price}</span>
                  </div>
                  <p className={`text-sm mt-2 ${ticket.popular ? "opacity-80" : "text-muted-foreground"}`}>
                    /orang
                  </p>
                </div>

                <p className={`text-sm mb-6 text-center ${ticket.popular ? "opacity-90" : "text-muted-foreground"}`}>
                  {ticket.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${ticket.popular ? "" : "text-primary"}`} />
                      <span className={`text-sm ${ticket.popular ? "" : "text-foreground"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={ticket.popular ? "secondary" : "aqua"}
                  size="lg"
                >
                  Beli Tiket
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promos */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <Sparkles className="inline w-8 h-8 text-coral mr-2" />
              Promo Spesial
            </h2>
            <p className="text-muted-foreground">
              Dapatkan penawaran terbaik dengan promo menarik kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {promos.map((promo, index) => (
              <motion.div
                key={promo.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-coral/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-coral">{promo.discount}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{promo.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{promo.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                  {promo.validity}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <Clock className="inline w-8 h-8 text-primary mr-2" />
                Jam Operasional
              </h2>
            </div>

            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              {schedule.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between p-6 ${
                    index < schedule.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{item.day}</span>
                  </div>
                  <span className="text-muted-foreground">
                    {item.open} - {item.close}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Harga;
