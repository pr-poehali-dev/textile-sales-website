import Icon from "@/components/ui/icon";

export default function ContactsSection() {
  return (
    <section className="animate-fade-in">
      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Связь</p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white mb-4">Контакты</h1>
          <div className="gold-divider w-24 mx-auto" />
        </div>
      </div>

      <div className="bg-brand-cream py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact cards */}
            <div className="space-y-5">
              <h2 className="font-cormorant text-3xl font-bold text-brand-indigo mb-6">Наши контакты</h2>

              {[
                {
                  icon: "Phone",
                  title: "Телефон",
                  lines: ["8 800 123-45-67 (бесплатно)", "+7 (495) 123-45-67"],
                  sub: "Пн–Пт: 9:00–19:00",
                },
                {
                  icon: "Mail",
                  title: "Email",
                  lines: ["info@tkanpro.ru", "zakaz@tkanpro.ru"],
                  sub: "Ответим в течение 2 часов",
                },
                {
                  icon: "MessageCircle",
                  title: "Мессенджеры",
                  lines: ["WhatsApp: +7 (999) 123-45-67", "Telegram: @tkanpro"],
                  sub: "Быстрый ответ в рабочее время",
                },
                {
                  icon: "MapPin",
                  title: "Адрес склада",
                  lines: ["г. Москва, ул. Складочная, 1, стр. 5", "м. Дмитровская, 10 мин. пешком"],
                  sub: "Пн–Пт: 9:00–18:00 / Сб: 10:00–15:00",
                },
              ].map((c, i) => (
                <div key={i} className="card-hover bg-white rounded-2xl p-5 border border-border flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-indigo flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-golos text-xs text-brand-gold font-semibold uppercase tracking-widest mb-1">{c.title}</div>
                    {c.lines.map((l, j) => (
                      <div key={j} className="font-golos text-brand-indigo font-semibold text-sm">{l}</div>
                    ))}
                    <div className="font-golos text-xs text-muted-foreground mt-1">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Callback form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
              <h2 className="font-cormorant text-3xl font-bold text-brand-indigo mb-2">Обратный звонок</h2>
              <p className="font-golos text-muted-foreground text-sm mb-7">Оставьте заявку — менеджер перезвонит в течение 15 минут</p>

              <div className="space-y-4">
                <div>
                  <label className="font-golos text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1.5 block">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-brand-cream font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 focus:border-brand-indigo transition-colors"
                  />
                </div>
                <div>
                  <label className="font-golos text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1.5 block">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-brand-cream font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 focus:border-brand-indigo transition-colors"
                  />
                </div>
                <div>
                  <label className="font-golos text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1.5 block">
                    Комментарий
                  </label>
                  <textarea
                    placeholder="Какие ткани вас интересуют?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-brand-cream font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 focus:border-brand-indigo transition-colors resize-none"
                  />
                </div>
                <button className="btn-gold w-full py-4 rounded-xl font-golos font-semibold text-sm inline-flex items-center justify-center gap-2">
                  <Icon name="PhoneCall" size={17} />
                  Заказать звонок
                </button>
                <p className="font-golos text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="rounded-3xl overflow-hidden bg-brand-cream border border-border h-64 flex items-center justify-center relative">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-indigo flex items-center justify-center mx-auto mb-4">
                <Icon name="Map" size={28} className="text-brand-gold" />
              </div>
              <p className="font-cormorant text-2xl font-bold text-brand-indigo mb-1">Склад в Москве</p>
              <p className="font-golos text-sm text-muted-foreground">ул. Складочная, 1, стр. 5 · м. Дмитровская</p>
            </div>
          </div>
        </div>
      </div>

      {/* Working hours */}
      <div className="bg-brand-indigo py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
            <div className="text-center md:text-left">
              <p className="font-cormorant text-3xl font-bold text-white mb-1">График работы</p>
              <p className="font-golos text-white/60 text-sm">Всегда рады вашему звонку или визиту</p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm font-golos">
              {[
                { day: "Понедельник – Пятница", time: "09:00 – 19:00" },
                { day: "Суббота", time: "10:00 – 15:00" },
                { day: "Воскресенье", time: "Выходной" },
              ].map((h, i) => (
                <div key={i} className="contents">
                  <span className="text-white/60">{h.day}</span>
                  <span className={`font-semibold ${h.time === "Выходной" ? "text-white/40" : "text-brand-gold"}`}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
