import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CareerLibrary from "./pages/CareerLibrary";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/termsandconditon";
import PrivacyPolicy from "./pages/privacyPolicy";
import ScrollToTop from "./components/scrollToTop";
// import ScrollToTop from "./components/ScrollToTop"; // 👈 import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* 👈 ensure scrolling works on every route change */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/career-library" element={<CareerLibrary />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          {/* catch-all should always be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
