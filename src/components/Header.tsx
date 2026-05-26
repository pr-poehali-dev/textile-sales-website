import { useState } from "react";
import { Section } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: { id: Section; label: string }[] = [
  { id: "about", label: "О компании" },
  { id: "catalog", label: "Каталог тканей" },
  { id: "delivery", label: "Доставка и оплата" },
  { id: "contacts", label: "Контакты" },
];

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-indigo/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-brand-gold flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-brand-indigo font-cormorant font-bold text-lg leading-none">Т</span>
          </div>
          <div className="text-left">
            <div className="font-cormorant text-white font-bold text-xl leading-none">ТканьПро</div>
            <div className="text-white/50 text-[10px] tracking-widest uppercase font-golos">Ткани оптом</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link font-golos text-sm font-medium transition-colors ${
                activeSection === item.id ? "text-brand-gold" : "text-white/80 hover:text-white"
              } ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+78001234567"
            className="hidden md:flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors text-sm font-medium"
          >
            <Icon name="Phone" size={15} />
            8 800 123-45-67
          </a>
          <button
            className="md:hidden text-white/80 hover:text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-indigo border-t border-white/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className={`text-left py-3 px-4 rounded-lg font-golos text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-white/10 text-brand-gold"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+78001234567"
              className="flex items-center gap-2 py-3 px-4 text-brand-gold text-sm font-medium"
            >
              <Icon name="Phone" size={15} />
              8 800 123-45-67
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
