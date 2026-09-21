import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import About from "@/pages/About";
import WebDesign from "@/pages/WebDesign";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Legal from "@/pages/Legal";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-[#070B14] text-[#F1F5F9]">
          <div className="noise-overlay" aria-hidden="true" />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/about" element={<About />} />
              <Route path="/creation-sites-web" element={<WebDesign />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/conditions-generales" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="bottom-right" />
      </SmoothScroll>
    </LanguageProvider>
  );
}
