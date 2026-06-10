import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Glossario from "./pages/Glossario.tsx";
import IlRadar from "./pages/IlRadar.tsx";
import ZeroCaos from "./pages/ZeroCaos.tsx";
import AiNoPanico from "./pages/AiNoPanico.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import Prenota from "./pages/Prenota.tsx";
const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/glossario" element={<Glossario />} />
          <Route path="/il-radar" element={<IlRadar />} />
          <Route path="/zero-caos" element={<ZeroCaos />} />
          <Route path="/ai-no-panico" element={<AiNoPanico />} />
          <Route path="/ciao-france" element={<ComingSoon />} />
          <Route path="/prenota" element={<Prenota />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
