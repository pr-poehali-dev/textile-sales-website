import { Section } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface HeroProps {
  onNavigate: (section: Section) => void;
  onOrder: (fabricName?: string) => void;
}

const stats = [
  { value: "15+", label: "лет на рынке" },
  { value: "200+", label: "видов тканей" },
  { value: "5000+", label: "клиентов по России" },
  { value: "от 1 кг", label: "минимальный заказ" },
];

export default function Hero({ onNavigate, onOrder }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Main hero */}
      <div className="hero-gradient relative min-h-[90vh] flex items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5" />
          {/* Fabric texture lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/5 to-transparent w-full"
              style={{ top: `${(i + 1) * 8}%` }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-sm font-golos font-medium tracking-wide">
                Ткани для постельного белья оптом
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-cormorant text-white leading-[1.05] mb-6 animate-fade-in stagger-1">
              <span className="block text-5xl md:text-7xl font-bold">Премиальные</span>
              <span className="block text-5xl md:text-7xl font-bold italic text-brand-gold">ткани</span>
              <span className="block text-5xl md:text-7xl font-bold">для вашего белья</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl font-golos leading-relaxed mb-10 max-w-xl animate-fade-in stagger-2">
              Сатин, тенцель, перкаль, бязь — прямые поставки от производителя.
              Собственный склад в Москве, отгрузка от 1 кг.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
              <button
                onClick={() => onNavigate("catalog")}
                className="btn-gold px-8 py-4 rounded-xl text-base font-golos font-semibold inline-flex items-center gap-2 justify-center"
              >
                <Icon name="LayoutGrid" size={18} />
                Смотреть каталог
              </button>
              <button
                onClick={() => onOrder()}
                className="btn-outline-white px-8 py-4 rounded-xl text-base font-golos font-semibold inline-flex items-center gap-2 justify-center"
              >
                <Icon name="FileText" size={18} />
                Запросить прайс
              </button>
            </div>
          </div>
        </div>

        {/* Right fabric preview */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/7c9eae4f-de3f-4ae3-859b-cda04a5141f6/files/0b42027e-4b2e-4250-a691-1f6f99413e1f.jpg"
            alt="Ткань сатин"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1654] via-[#1e1654]/50 to-transparent" />
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat, i) => (
              <div key={i} className="py-6 px-6 text-center">
                <div className="font-cormorant text-3xl font-bold text-brand-indigo">{stat.value}</div>
                <div className="font-golos text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured fabrics preview */}
      <div className="bg-brand-cream py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Популярное</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-indigo">Хиты продаж</h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "https://cdn.poehali.dev/projects/7c9eae4f-de3f-4ae3-859b-cda04a5141f6/files/0b42027e-4b2e-4250-a691-1f6f99413e1f.jpg",
                name: "Сатин однотонный",
                desc: "120 г/м², ширина 220 см",
                tag: "Хит",
                price: "от 280 ₽/м"
              },
              {
                img: "https://cdn.poehali.dev/projects/7c9eae4f-de3f-4ae3-859b-cda04a5141f6/files/b83c0594-7755-42c5-b438-b2e90ee6b0c4.jpg",
                name: "Тенцель однотонный",
                desc: "100 г/м², ширина 220 см",
                tag: "Новинка",
                price: "от 420 ₽/м"
              },
              {
                img: "https://cdn.poehali.dev/projects/7c9eae4f-de3f-4ae3-859b-cda04a5141f6/files/3c1fcde7-e3ae-40d6-858d-624870548a29.jpg",
                name: "Перкаль",
                desc: "115 г/м², ширина 220 см",
                tag: "Популярное",
                price: "от 190 ₽/м"
              },
            ].map((fabric, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-border group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={fabric.img}
                    alt={fabric.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="fabric-tag">{fabric.tag}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-cormorant text-xl font-semibold text-brand-indigo mb-1">{fabric.name}</h3>
                  <p className="text-muted-foreground text-sm font-golos mb-3">{fabric.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-golos font-bold text-brand-indigo text-lg">{fabric.price}</span>
                    <button
                      onClick={() => onOrder(fabric.name)}
                      className="btn-gold px-4 py-2 rounded-lg text-sm font-golos font-semibold"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate("catalog")}
              className="inline-flex items-center gap-2 text-brand-indigo font-golos font-semibold hover:text-brand-gold transition-colors group"
            >
              Весь каталог тканей
              <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Why us */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Преимущества</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-indigo">Почему выбирают нас</h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Factory", title: "Прямой производитель", desc: "Работаем без посредников, цены ниже рыночных на 20–40%" },
              { icon: "PackageCheck", title: "Большой выбор", desc: "Более 200 артикулов: ширина, плотность, состав на любой запрос" },
              { icon: "Truck", title: "Быстрая доставка", desc: "Отгрузка в день заказа, доставка по всей России" },
              { icon: "BadgeCheck", title: "Сертификаты", desc: "Все ткани сертифицированы ГОСТ, OEKO-TEX, гигиенические заключения" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start p-6 rounded-2xl bg-brand-cream border border-border card-hover">
                <div className="w-12 h-12 rounded-xl bg-brand-indigo flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={22} className="text-brand-gold" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-brand-indigo mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-golos leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}