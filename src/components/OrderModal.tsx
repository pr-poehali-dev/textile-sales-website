import Icon from "@/components/ui/icon";
import { useState } from "react";

interface OrderModalProps {
  open: boolean;
  fabricName?: string;
  onClose: () => void;
}

export default function OrderModal({ open, fabricName, onClose }: OrderModalProps) {
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) { onClose(); setSent(false); } }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-indigo/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md animate-scale-in">
        {/* Header */}
        <div className="hero-gradient rounded-t-3xl px-7 pt-7 pb-6">
          <button
            onClick={() => { onClose(); setSent(false); }}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
          <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center mb-4">
            <Icon name="ShoppingBag" size={18} className="text-brand-indigo" />
          </div>
          <h2 className="font-cormorant text-3xl font-bold text-white mb-1">Оформить заказ</h2>
          {fabricName && (
            <p className="font-golos text-white/60 text-sm">Ткань: <span className="text-brand-gold font-medium">{fabricName}</span></p>
          )}
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-golos text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1.5 block">Имя *</label>
                <input
                  required
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-brand-cream font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 focus:border-brand-indigo transition-colors"
                />
              </div>
              <div>
                <label className="font-golos text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1.5 block">Телефон *</label>
                <input
                  required
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-brand-cream font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 focus:border-brand-indigo transition-colors"
                />
              </div>
              <div>
                <label className="font-golos text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="email@company.ru"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-brand-cream font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 focus:border-brand-indigo transition-colors"
                />
              </div>
              <div>
                <label className="font-golos text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1.5 block">Количество / пожелания</label>
                <textarea
                  rows={2}
                  placeholder="Например: 50 метров, цвет синий, срочно"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-brand-cream font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 focus:border-brand-indigo transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-gold w-full py-4 rounded-xl font-golos font-semibold text-sm inline-flex items-center justify-center gap-2">
                <Icon name="Send" size={16} />
                Отправить заявку
              </button>
              <p className="font-golos text-xs text-muted-foreground text-center">
                Менеджер свяжется с вами в течение 15 минут
              </p>
            </form>
          ) : (
            <div className="py-6 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={30} className="text-green-600" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-brand-indigo mb-2">Заявка отправлена!</h3>
              <p className="font-golos text-muted-foreground text-sm mb-6">
                Наш менеджер свяжется с вами в течение 15 минут в рабочее время.
              </p>
              <button
                onClick={() => { onClose(); setSent(false); }}
                className="btn-gold px-8 py-3 rounded-xl font-golos font-semibold text-sm"
              >
                Закрыть
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
