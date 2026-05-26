import Icon from "@/components/ui/icon";

export default function DeliverySection() {
  return (
    <section className="animate-fade-in">
      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Логистика</p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white mb-4">Доставка и оплата</h1>
          <div className="gold-divider w-24 mx-auto" />
        </div>
      </div>

      {/* Delivery options */}
      <div className="bg-brand-cream py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Способы доставки</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-indigo">Как получить заказ</h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "MapPin",
                title: "Самовывоз",
                subtitle: "Бесплатно",
                desc: "Склад в Москве: ул. Складочная, 1, стр. 5. Пн–Пт: 9:00–18:00, Сб: 10:00–15:00. Заказ готов в течение 2 часов после оплаты.",
                highlight: true,
              },
              {
                icon: "Truck",
                title: "Транспортные компании",
                subtitle: "По тарифам ТК",
                desc: "СДЭК, Деловые Линии, ПЭК, Байкал Сервис и другие. Доставка в любой город России. Упаковка и передача ТК — бесплатно при заказе от 5 кг.",
                highlight: false,
              },
              {
                icon: "Package",
                title: "Курьером по Москве",
                subtitle: "от 500 ₽",
                desc: "Курьерская доставка по Москве и Подмосковью в день заказа (при заказе до 12:00). Доставка до двери или до ПВЗ.",
                highlight: false,
              },
            ].map((d, i) => (
              <div
                key={i}
                className={`card-hover rounded-2xl p-6 border ${
                  d.highlight
                    ? "bg-brand-indigo border-brand-indigo text-white"
                    : "bg-white border-border"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${d.highlight ? "bg-brand-gold" : "bg-brand-cream"}`}>
                  <Icon name={d.icon} size={24} className={d.highlight ? "text-brand-indigo" : "text-brand-indigo"} />
                </div>
                <div className={`font-cormorant text-xs uppercase tracking-widest font-semibold mb-1 ${d.highlight ? "text-brand-gold" : "text-brand-gold"}`}>
                  {d.subtitle}
                </div>
                <h3 className={`font-cormorant text-2xl font-bold mb-3 ${d.highlight ? "text-white" : "text-brand-indigo"}`}>{d.title}</h3>
                <p className={`font-golos text-sm leading-relaxed ${d.highlight ? "text-white/70" : "text-muted-foreground"}`}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shipping info */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Timing */}
            <div>
              <div className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Сроки</div>
              <h2 className="font-cormorant text-4xl font-bold text-brand-indigo mb-6">Сроки отгрузки</h2>
              <div className="space-y-4">
                {[
                  { icon: "Clock", text: "Заказ принят до 14:00 — отгрузка в тот же день" },
                  { icon: "Calendar", text: "Заказ принят после 14:00 — отгрузка на следующий рабочий день" },
                  { icon: "CheckCircle", text: "Наличие на складе в Москве — постоянно обновляется" },
                  { icon: "RefreshCw", text: "Под заказ (нет в наличии) — срок уточняется у менеджера" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream">
                    <div className="w-9 h-9 rounded-lg bg-brand-indigo flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={16} className="text-brand-gold" />
                    </div>
                    <p className="font-golos text-sm text-foreground leading-relaxed pt-1.5">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging */}
            <div>
              <div className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Минимум</div>
              <h2 className="font-cormorant text-4xl font-bold text-brand-indigo mb-6">Условия заказа</h2>
              <div className="space-y-4">
                {[
                  { label: "Минимальный заказ", val: "1 кг (примерно 3–5 м в зависимости от плотности ткани)" },
                  { label: "Отрез", val: "Минимум 1 метр, нарезка кратно 0.1 м" },
                  { label: "Целый рулон", val: "Скидка 5%. Рулоны по 50–100 м в зависимости от артикула" },
                  { label: "Упаковка", val: "Рулоны в полиэтилене, сверток надёжно защищён" },
                  { label: "Накладные", val: "УПД / товарная накладная / чек — на выбор клиента" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b border-border last:border-0">
                    <span className="font-golos text-sm text-muted-foreground flex-shrink-0 w-40">{item.label}</span>
                    <span className="font-golos text-sm text-brand-indigo font-medium text-right">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className="bg-brand-indigo py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-golos text-sm font-semibold tracking-widest uppercase mb-3">Оплата</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white">Способы оплаты</h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { icon: "CreditCard", title: "Карта онлайн", desc: "Visa, Mastercard, Мир — на сайте или по ссылке" },
              { icon: "Building2", title: "Безналичный расчёт", desc: "Для юридических лиц и ИП, счёт + УПД" },
              { icon: "Banknote", title: "Наличные", desc: "При самовывозе или курьеру при получении" },
              { icon: "Smartphone", title: "СБП", desc: "Система быстрых платежей — без комиссии" },
            ].map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center card-hover">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Icon name={p.icon} size={22} className="text-brand-gold" />
                </div>
                <h3 className="font-cormorant text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="font-golos text-sm text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white/5 border border-brand-gold/20 rounded-2xl max-w-2xl mx-auto text-center">
            <Icon name="Info" size={20} className="text-brand-gold mx-auto mb-3" />
            <p className="font-golos text-white/70 text-sm leading-relaxed">
              Для постоянных клиентов доступна <strong className="text-white">отсрочка платежа до 30 дней</strong> и индивидуальные условия кредитования. Уточняйте у вашего менеджера.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
