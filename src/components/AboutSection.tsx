import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section className="animate-fade-in">
      {/* Hero */}
      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">История</p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white mb-4">О компании</h1>
          <div className="gold-divider w-24 mx-auto" />
        </div>
      </div>

      {/* Story */}
      <div className="bg-brand-cream py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-indigo mb-6 leading-tight">
                15 лет создаём <em className="text-brand-gold not-italic">комфорт</em> для вашего сна
              </h2>
              <p className="font-golos text-muted-foreground leading-relaxed mb-5 text-base">
                Компания <strong className="text-brand-indigo">ТканьПро</strong> основана в 2009 году как поставщик тканей для производителей постельного белья. За эти годы мы выросли из небольшого склада в Москве до федерального оператора с собственными складскими комплексами и прямыми контрактами с текстильными фабриками России, Китая и Европы.
              </p>
              <p className="font-golos text-muted-foreground leading-relaxed mb-5 text-base">
                Мы работаем напрямую с производителями постельного белья, швейными цехами, гостиницами и санаториями. Наш принцип — честная цена без скрытых наценок и неизменно высокое качество каждой партии.
              </p>
              <p className="font-golos text-muted-foreground leading-relaxed text-base">
                Более <strong className="text-brand-indigo">5 000 клиентов</strong> по всей России доверяют нам уже не первый год. Ваш бизнес — наша репутация.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/7c9eae4f-de3f-4ae3-859b-cda04a5141f6/files/0b42027e-4b2e-4250-a691-1f6f99413e1f.jpg"
                  alt="Ткани на складе"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-brand-gold rounded-2xl p-5 shadow-xl">
                <div className="font-cormorant text-4xl font-bold text-brand-indigo">15+</div>
                <div className="font-golos text-sm text-brand-indigo/80 font-medium">лет опыта</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-brand-indigo rounded-2xl p-5 shadow-xl">
                <div className="font-cormorant text-4xl font-bold text-white">200+</div>
                <div className="font-golos text-sm text-white/70 font-medium">артикулов</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Принципы</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-indigo">Наши ценности</h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Star", title: "Качество", desc: "Каждая партия проходит входной контроль. Мы не отгружаем брак — гарантируем стабильность параметров от рулона к рулону." },
              { icon: "Handshake", title: "Партнёрство", desc: "Работаем вдолгую: персональный менеджер, гибкие условия отсрочки, накопительные скидки для постоянных клиентов." },
              { icon: "Leaf", title: "Экология", desc: "Приоритет — сертифицированные ткани OEKO-TEX Standard 100. Безопасно для людей и окружающей среды." },
              { icon: "Zap", title: "Скорость", desc: "Склад в Москве позволяет отгружать заказы день в день. Курьером, транспортной компанией или самовывозом." },
              { icon: "Award", title: "Сертификаты", desc: "ГОСТ, OEKO-TEX, гигиенические заключения Роспотребнадзора — полный пакет документов на любой артикул." },
              { icon: "Users", title: "Команда", desc: "25 специалистов: менеджеры, технологи, логисты. Знаем текстиль изнутри и поможем подобрать нужный артикул." },
            ].map((v, i) => (
              <div key={i} className="card-hover flex gap-4 p-6 rounded-2xl bg-brand-cream border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-indigo flex items-center justify-center">
                  <Icon name={v.icon} size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-brand-indigo mb-2">{v.title}</h3>
                  <p className="font-golos text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-brand-indigo py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Путь компании</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white">Ключевые этапы</h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            {[
              { year: "2009", text: "Основание компании, первый склад 800 м² в Москве" },
              { year: "2012", text: "Начало прямых поставок с китайских фабрик, расширение ассортимента до 50 артикулов" },
              { year: "2015", text: "Выход на рынок TENCEL™, получение сертификатов OEKO-TEX" },
              { year: "2018", text: "Открытие регионального склада в Новосибирске, 2 000+ клиентов" },
              { year: "2022", text: "Запуск онлайн-каталога, расширение ассортимента до 200 артикулов" },
              { year: "2024", text: "5 000+ активных клиентов, собственные складские комплексы 4 500 м²" },
            ].map((m, i) => (
              <div key={i} className={`flex gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="flex-1 md:text-right">
                  {i % 2 === 0 ? (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <div className="font-cormorant text-brand-gold text-2xl font-bold mb-1">{m.year}</div>
                      <p className="font-golos text-white/70 text-sm leading-relaxed">{m.text}</p>
                    </div>
                  ) : <div className="hidden md:block" />}
                </div>
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-brand-gold border-4 border-brand-indigo shadow-lg mt-5" />
                </div>
                <div className="flex-1">
                  {i % 2 !== 0 ? (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <div className="font-cormorant text-brand-gold text-2xl font-bold mb-1">{m.year}</div>
                      <p className="font-golos text-white/70 text-sm leading-relaxed">{m.text}</p>
                    </div>
                  ) : <div className="hidden md:block" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
