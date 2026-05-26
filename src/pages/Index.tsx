import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import DeliverySection from "@/components/DeliverySection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

export type Section = "home" | "about" | "catalog" | "delivery" | "contacts";


export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [orderModal, setOrderModal] = useState<{ open: boolean; fabricName?: string }>({ open: false });

  const openOrder = (fabricName?: string) => setOrderModal({ open: true, fabricName });
  const closeOrder = () => setOrderModal({ open: false });

  return (
    <div className="min-h-screen bg-background font-golos">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        {activeSection === "home" && <Hero onNavigate={setActiveSection} onOrder={openOrder} />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "catalog" && <CatalogSection onOrder={openOrder} />}
        {activeSection === "delivery" && <DeliverySection />}
        {activeSection === "contacts" && <ContactsSection />}
      </main>
      <Footer onNavigate={setActiveSection} />
      <OrderModal open={orderModal.open} fabricName={orderModal.fabricName} onClose={closeOrder} />
    </div>
  );
}