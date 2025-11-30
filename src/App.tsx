import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tentang from "./pages/Tentang";
import Fasilitas from "./pages/Fasilitas";
import DesainPortal from "./pages/DesainPortal";
import Harga from "./pages/Harga";
import Galeri from "./pages/Galeri";
import SpotFoto from "./pages/SpotFoto";
import Lokasi from "./pages/Lokasi";
import Kontak from "./pages/Kontak";
import Artikel from "./pages/Artikel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
          <Route path="/desain-portal" element={<DesainPortal />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/spot-foto" element={<SpotFoto />} />
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
