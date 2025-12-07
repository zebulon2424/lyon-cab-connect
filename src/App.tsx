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
import TaxiAeroport from "./pages/TaxiAeroport";
import TaxiGare from "./pages/TaxiGare";
import TaxiVIP from "./pages/TaxiVIP";
import TaxiPMR from "./pages/TaxiPMR";
import FAQ from "./pages/FAQ";
import Tarifs from "./pages/Tarifs";
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
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/taxi-aeroport-lyon" element={<TaxiAeroport />} />
            <Route path="/taxi-gare-lyon" element={<TaxiGare />} />
            <Route path="/taxi-vip-lyon" element={<TaxiVIP />} />
            <Route path="/taxi-pmr-lyon" element={<TaxiPMR />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tarifs" element={<Tarifs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
