import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Consultation from "./pages/Consultation";
import Hospitalisation from "./pages/Hospitalisation";
import SpecialtyPage from "./pages/SpecialtyPage";
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
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/medecins-professionnels" element={<Doctors />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/hospitalisation" element={<Hospitalisation />} />
          <Route path="/cardiopathies-ischemiques" element={<SpecialtyPage slug="cardiopathies-ischemiques" />} />
          <Route path="/cardiopathies-rythmiques" element={<SpecialtyPage slug="cardiopathies-rythmiques" />} />
          <Route path="/cardiopathies-valvulaires" element={<SpecialtyPage slug="cardiopathies-valvulaires" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
