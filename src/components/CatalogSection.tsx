import { useState } from "react";
import Icon from "@/components/ui/icon";

interface CatalogSectionProps {
  onOrder: (fabricName?: string) => void;
}

interface FabricItem {
  id: string;
  name: string;
  desc: string;
  weight: string;
  width: string;
  composition: string;
  price: string;
  colors: string[];
  tag?: string;
}

interface FabricCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  coverImg: string;
  items: FabricItem[];
}

const SATIN_IMG = "https://cdn.poehali.dev/projects/7c9eae4f-de3f-4ae3-859b-cda04a5141f6/files/0b42027e-4b2e-4250-a691-1f6f99413e1f.jpg";
const TENCEL_IMG = "https://cdn.poehali.dev/projects/7c9eae4f-de3f-4ae3-859b-cda04a5141f6/files/b83c0594-7755-42c5-b438-b2e90ee6b0c4.jpg";
const PERCAL_IMG = "https://cdn.poehali.dev/projects/7c9eae4f-de3f-4ae3-859b-cda04a5141f6/files/3c1fcde7-e3ae-40d6-858d-624870548a29.jpg";

const categories: FabricCategory[] = [
  {
    id: "satin",
    title: "Сатин",
    subtitle: "Гладкость и блеск премиум-класса",
    icon: "Sparkles",
    coverImg: SATIN_IMG,
    items: [
      { id: "s1", name: "Сатин однотонный 120 г/м²", desc: "Классический сатин, мягкий и прочный", weight: "120 г/м²", width: "220 см", composition: "100% хлопок", price: "от 280 ₽/м", colors: ["#1e3a5f", "#6b4c9a", "#c0392b", "#2ecc71", "#f39c12", "#ecf0f1"], tag: "Хит" },
      { id: "s2", name: "Сатин однотонный 140 г/м²", desc: "Плотный сатин повышенной долговечности", weight: "140 г/м²", width: "220 см", composition: "100% хлопок", price: "от 320 ₽/м", colors: ["#2c3e50", "#8e44ad", "#e74c3c", "#27ae60", "#d4ac0d", "#bdc3c7"] },
      { id: "s3", name: "Сатин страйп 1×1", desc: "С изящной полоской, атласный эффект", weight: "125 г/м²", width: "220 см", composition: "100% хлопок", price: "от 310 ₽/м", colors: ["#1a252f", "#4a235a", "#922b21", "#1e8449", "#b7950b", "#f2f3f4"] },
      { id: "s4", name: "Сатин страйп 2×2", desc: "Широкая полоска, рельефная фактура", weight: "130 г/м²", width: "220 см", composition: "100% хлопок", price: "от 330 ₽/м", colors: ["#17202a", "#512e5f", "#7b241c", "#186a3b", "#9a7d0a", "#eaecee"] },
      { id: "s5", name: "Жаккардовый сатин", desc: "С вплетённым узором, роскошный вид", weight: "155 г/м²", width: "220 см", composition: "100% хлопок", price: "от 480 ₽/м", colors: ["#1b2631", "#4a235a", "#78281f", "#145a32", "#7d6608"], tag: "Премиум" },
    ],
  },
  {
    id: "tencel",
    title: "Тенцель",
    subtitle: "Экологичный лиоцелл нового поколения",
    icon: "Leaf",
    coverImg: TENCEL_IMG,
    items: [
      { id: "t1", name: "Тенцель однотонный 100 г/м²", desc: "Лёгкий, дышащий, гипоаллергенный", weight: "100 г/м²", width: "220 см", composition: "100% Lyocell TENCEL™", price: "от 420 ₽/м", tag: "Новинка", colors: ["#7fb3a0", "#8aab8e", "#a9cce3", "#d5dbdb", "#f0e6d3", "#c39bd3"] },
      { id: "t2", name: "Тенцель однотонный 120 г/м²", desc: "Оптимальная плотность для круглогодичного использования", weight: "120 г/м²", width: "220 см", composition: "100% Lyocell TENCEL™", price: "от 460 ₽/м", colors: ["#5d6d7e", "#6c3483", "#922b21", "#1a5276", "#117a65", "#7d6608"] },
      { id: "t3", name: "Тенцель + хлопок 50/50", desc: "Баланс мягкости и прочности", weight: "110 г/м²", width: "220 см", composition: "50% TENCEL™ / 50% хлопок", price: "от 380 ₽/м", colors: ["#aab7b8", "#a9cce3", "#a8d5a2", "#f9e4b7", "#f1948a", "#d2b4de"] },
      { id: "t4", name: "Тенцель страйп", desc: "Мягкие полоски на лиоцелловой основе", weight: "115 г/м²", width: "220 см", composition: "100% Lyocell TENCEL™", price: "от 490 ₽/м", colors: ["#85929e", "#7d3c98", "#a93226", "#1f618d", "#138d75"] },
    ],
  },
  {
    id: "percal",
    title: "Перкаль",
    subtitle: "Свежесть и лёгкость хлопкового перкаля",
    icon: "Wind",
    coverImg: PERCAL_IMG,
    items: [
      { id: "p1", name: "Перкаль однотонный 115 г/м²", desc: "Тонкий, прохладный, идеален для лета", weight: "115 г/м²", width: "220 см", composition: "100% хлопок", price: "от 190 ₽/м", tag: "Популярное", colors: ["#f8f9fa", "#abebc6", "#aed6f1", "#f9e79f", "#f5cba7", "#d7bde2"] },
      { id: "p2", name: "Перкаль однотонный 130 г/м²", desc: "Более плотная версия для долгого использования", weight: "130 г/м²", width: "220 см", composition: "100% хлопок", price: "от 220 ₽/м", colors: ["#e8f8f5", "#d6eaf8", "#fef9e7", "#fdedec", "#f4ecf7", "#e8f6f3"] },
      { id: "p3", name: "Перкаль набивной", desc: "С яркими принтами, актуальные паттерны", weight: "120 г/м²", width: "220 см", composition: "100% хлопок", price: "от 245 ₽/м", colors: ["#e8f8f5", "#d6eaf8", "#fef9e7", "#fdedec"] },
    ],
  },
  {
    id: "byaz",
    title: "Бязь",
    subtitle: "Надёжная классика в лучших традициях",
    icon: "Shield",
    coverImg: PERCAL_IMG,
    items: [
      { id: "b1", name: "Бязь ГОСТ однотонная", desc: "По стандарту ГОСТ, устойчивые цвета", weight: "142 г/м²", width: "220 см", composition: "100% хлопок", price: "от 130 ₽/м", tag: "Хит", colors: ["#f2f3f4", "#abebc6", "#aed6f1", "#f9e79f", "#f5cba7", "#d7bde2"] },
      { id: "b2", name: "Бязь набивная", desc: "С рисунком, широкий ассортимент паттернов", weight: "142 г/м²", width: "220 см", composition: "100% хлопок", price: "от 150 ₽/м", colors: ["#fadbd8", "#d5f5e3", "#d6eaf8", "#fef9e7"] },
      { id: "b3", name: "Бязь отбелённая", desc: "Идеальная белизна, подходит для печати", weight: "142 г/м²", width: "220 см", composition: "100% хлопок", price: "от 120 ₽/м", colors: ["#ffffff", "#f8f9fa", "#eaeded"] },
    ],
  },
  {
    id: "microfiber",
    title: "Микрофибра",
    subtitle: "Современный синтетический материал",
    icon: "Zap",
    coverImg: SATIN_IMG,
    items: [
      { id: "m1", name: "Микрофибра 75 г/м²", desc: "Лёгкая, быстросохнущая, не мнётся", weight: "75 г/м²", width: "220 см", composition: "100% полиэстер", price: "от 95 ₽/м", colors: ["#1a5276", "#7d3c98", "#922b21", "#145a32", "#7d6608", "#717d7e"] },
      { id: "m2", name: "Микрофибра 90 г/м²", desc: "Повышенная плотность, имитация сатина", weight: "90 г/м²", width: "220 см", composition: "100% полиэстер", price: "от 110 ₽/м", colors: ["#1b2631", "#4a235a", "#78281f", "#145a32", "#9a7d0a"] },
    ],
  },
  {
    id: "flannel",
    title: "Фланель",
    subtitle: "Тепло и уют для зимних ночей",
    icon: "Flame",
    coverImg: TENCEL_IMG,
    items: [
      { id: "f1", name: "Фланель однотонная", desc: "Ворсистая поверхность, приятная теплота", weight: "170 г/м²", width: "220 см", composition: "100% хлопок", price: "от 210 ₽/м", tag: "Сезон", colors: ["#922b21", "#1a5276", "#145a32", "#6c3483", "#7d6608", "#566573"] },
      { id: "f2", name: "Фланель набивная", desc: "Яркие принты, тёплые тона", weight: "170 г/м²", width: "220 см", composition: "100% хлопок", price: "от 240 ₽/м", colors: ["#fadbd8", "#d5f5e3", "#d6eaf8", "#fef9e7"] },
    ],
  },
];

export default function CatalogSection({ onOrder }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const selected = categories.find((c) => c.id === activeCategory);

  return (
    <section className="min-h-screen bg-background animate-fade-in">
      {/* Header */}
      <div className="bg-brand-indigo py-14">
        <div className="container mx-auto px-4 text-center">
          <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Ассортимент</p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white mb-4">Каталог тканей</h1>
          <div className="gold-divider w-24 mx-auto mb-5" />
          <p className="text-white/60 font-golos text-lg max-w-xl mx-auto">
            Выберите тип ткани, чтобы увидеть все артикулы, цвета и условия заказа
          </p>
        </div>
      </div>

      {/* Category grid or detail view */}
      {!activeCategory ? (
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-border text-left group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.coverImg}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="fabric-card-overlay absolute inset-0" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-brand-gold/90 flex items-center justify-center">
                        <Icon name={cat.icon} size={14} className="text-brand-indigo" />
                      </div>
                      <h3 className="font-cormorant text-2xl font-bold text-white">{cat.title}</h3>
                    </div>
                    <p className="text-white/70 text-xs font-golos">{cat.subtitle}</p>
                  </div>
                </div>
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="font-golos text-sm text-muted-foreground">
                    {cat.items.length} {cat.items.length === 1 ? "артикул" : cat.items.length < 5 ? "артикула" : "артикулов"}
                  </span>
                  <div className="flex items-center gap-1 text-brand-indigo font-golos text-sm font-semibold group-hover:text-brand-gold transition-colors">
                    Смотреть
                    <Icon name="ArrowRight" size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : selected ? (
        <div className="container mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm font-golos text-muted-foreground">
            <button
              onClick={() => setActiveCategory(null)}
              className="hover:text-brand-indigo transition-colors flex items-center gap-1"
            >
              <Icon name="LayoutGrid" size={14} />
              Все категории
            </button>
            <Icon name="ChevronRight" size={14} />
            <span className="text-brand-indigo font-semibold">{selected.title}</span>
          </div>

          {/* Category header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-brand-indigo flex items-center justify-center">
              <Icon name={selected.icon} size={22} className="text-brand-gold" />
            </div>
            <div>
              <h2 className="font-cormorant text-4xl font-bold text-brand-indigo">{selected.title}</h2>
              <p className="text-muted-foreground font-golos text-sm">{selected.subtitle}</p>
            </div>
          </div>

          {/* Fabric items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {selected.items.map((item) => (
              <div
                key={item.id}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-border"
              >
                {/* Color swatch strip */}
                <div className="h-3 flex">
                  {item.colors.map((color, ci) => (
                    <div
                      key={ci}
                      className="flex-1"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Fabric image */}
                <div className="relative h-44 overflow-hidden group">
                  <img
                    src={selected.coverImg}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tag && (
                    <div className="absolute top-3 left-3">
                      <span className="fabric-tag">{item.tag}</span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-cormorant text-xl font-semibold text-brand-indigo mb-1">{item.name}</h3>
                  <p className="text-muted-foreground text-sm font-golos mb-4">{item.desc}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {[
                      { label: "Плотность", val: item.weight },
                      { label: "Ширина", val: item.width },
                      { label: "Состав", val: item.composition.length > 12 ? item.composition.slice(0, 12) + "…" : item.composition },
                    ].map((spec) => (
                      <div key={spec.label} className="bg-brand-cream rounded-lg p-2 text-center">
                        <div className="font-golos text-[10px] text-muted-foreground uppercase tracking-wide">{spec.label}</div>
                        <div className="font-golos text-xs font-semibold text-brand-indigo mt-0.5">{spec.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Color palette */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <span className="text-xs text-muted-foreground font-golos mr-1">Цвета:</span>
                    {item.colors.map((color, ci) => (
                      <div
                        key={ci}
                        className="w-5 h-5 rounded-full border-2 border-white shadow-sm cursor-default"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground font-golos ml-1">+ещё</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-cormorant text-2xl font-bold text-brand-indigo">{item.price}</span>
                    <button
                      onClick={() => onOrder(item.name)}
                      className="btn-gold px-5 py-2.5 rounded-xl text-sm font-golos font-semibold inline-flex items-center gap-2"
                    >
                      <Icon name="ShoppingBag" size={15} />
                      Оформить заказ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setActiveCategory(null)}
              className="inline-flex items-center gap-2 text-brand-indigo font-golos font-semibold hover:text-brand-gold transition-colors group border border-border rounded-xl px-6 py-3 hover:border-brand-gold"
            >
              <Icon name="ArrowLeft" size={16} className="group-hover:-translate-x-1 transition-transform" />
              Все категории
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
