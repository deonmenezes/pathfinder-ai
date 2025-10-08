// src/App.tsx (Your file with TypeScript)

import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

// A simple fallback component for the loading state
const PageLoader = () => (
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    Loading...
  </div>
);

// Dynamically import all page components using React.lazy
const Index = React.lazy(() => import("./pages/Index"));
const CareerLibrary = React.lazy(() => import("./pages/CareerLibrary"));
const Testimonials = React.lazy(() => import("./pages/Testimonials"));
const Services = React.lazy(() => import("./pages/Services"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const TermsAndConditions = React.lazy(() => import("./pages/termsandconditon"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacyPolicy"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {/* Wrap all routes in a single Suspense component */}
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;