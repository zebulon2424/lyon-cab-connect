import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CGV from "./pages/CGV";
import TaxiAeroportLyon from "./pages/TaxiAeroportLyon";
import LyonAirportTaxi from "./pages/LyonAirportTaxi";
import TaxiGarePartDieu from "./pages/TaxiGarePartDieu";
import TaxiGarePerrache from "./pages/TaxiGarePerrache";
import TaxiLyonCentre from "./pages/TaxiLyonCentre";
import VTCTaxiLyon from "./pages/VTCTaxiLyon";
import '@/lib/i18n';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/taxi-aeroport-lyon-saint-exupery" element={<TaxiAeroportLyon />} />
            <Route path="/lyon-airport-taxi" element={<LyonAirportTaxi />} />
            <Route path="/taxi-gare-part-dieu" element={<TaxiGarePartDieu />} />
            <Route path="/taxi-gare-perrache" element={<TaxiGarePerrache />} />
            <Route path="/taxi-lyon-centre" element={<TaxiLyonCentre />} />
            <Route path="/vtc-taxi-lyon" element={<VTCTaxiLyon />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/cgv" element={<CGV />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
