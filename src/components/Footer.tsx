import { Section } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface FooterProps {
  onNavigate: (section: Section) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#12102e] text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-gold flex items-center justify-center">
                <span className="text-brand-indigo font-cormorant font-bold text-lg leading-none">Т</span>
              </div>
              <div>
                <div className="font-cormorant text-white font-bold text-xl leading-none">ТканьПро</div>
                <div className="text-white/40 text-[10px] tracking-widest uppercase font-golos">Ткани оптом</div>
              </div>
            </div>
            <p className="font-golos text-white/50 text-sm leading-relaxed mb-5">
              Ткани для постельного белья оптом. Прямые поставки, отгрузка от 1 кг.
            </p>
            <div className="flex gap-3">
              {["MessageCircle", "Send", "Phone"].map((icon, i) => (
                <div key={i} className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-gold/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name={icon} size={16} className="text-white/60 hover:text-brand-gold" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-golos text-xs uppercase tracking-widest text-brand-gold font-semibold mb-4">Навигация</div>
            <nav className="flex flex-col gap-2">
              {[
                { id: "about" as Section, label: "О компании" },
                { id: "catalog" as Section, label: "Каталог тканей" },
                { id: "delivery" as Section, label: "Доставка и оплата" },
                { id: "contacts" as Section, label: "Контакты" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-left font-golos text-sm text-white/50 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Catalog */}
          <div>
            <div className="font-golos text-xs uppercase tracking-widest text-brand-gold font-semibold mb-4">Каталог</div>
            <nav className="flex flex-col gap-2">
              {["Сатин", "Тенцель", "Перкаль", "Бязь", "Микрофибра", "Фланель"].map((t) => (
                <button
                  key={t}
                  onClick={() => onNavigate("catalog")}
                  className="text-left font-golos text-sm text-white/50 hover:text-white transition-colors"
                >
                  {t}
                </button>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <div className="font-golos text-xs uppercase tracking-widest text-brand-gold font-semibold mb-4">Контакты</div>
            <div className="space-y-3">
              {[
                { icon: "Phone", text: "8 800 123-45-67" },
                { icon: "Mail", text: "info@tkanpro.ru" },
                { icon: "MapPin", text: "Москва, ул. Складочная, 1" },
                { icon: "Clock", text: "Пн–Пт: 9:00–19:00" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon name={c.icon} size={14} className="text-brand-gold flex-shrink-0" />
                  <span className="font-golos text-sm text-white/50">{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-golos text-xs text-white/30">© 2024 ТканьПро. Все права защищены.</p>
          <div className="flex gap-5">
            <button className="font-golos text-xs text-white/30 hover:text-white/60 transition-colors">Политика конфиденциальности</button>
            <button className="font-golos text-xs text-white/30 hover:text-white/60 transition-colors">Пользовательское соглашение</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
