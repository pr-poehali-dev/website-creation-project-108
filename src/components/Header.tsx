import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  callbackForm: { name: string; phone: string };
  setCallbackForm: React.Dispatch<React.SetStateAction<{ name: string; phone: string }>>;
  handleCallbackSubmit: (e: React.FormEvent) => void;
}

export function Header({ callbackForm, setCallbackForm, handleCallbackSubmit }: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Smile" size={32} className="text-primary" />
          <h1 className="text-2xl font-heading font-bold text-primary">Denta Plus</h1>
        </div>
        <nav className="hidden lg:flex gap-6 text-sm">
          <a href="#about" className="text-foreground hover:text-primary transition">О клинике</a>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <a href="#services" className="text-foreground hover:text-primary transition flex items-center gap-1">
              Услуги и цены
              <Icon name="ChevronDown" size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </a>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 min-w-[200px] animate-fade-in">
                <a href="#services" className="block px-4 py-2 text-foreground hover:bg-primary/5 hover:text-primary transition">Лечение</a>
                <a href="#services" className="block px-4 py-2 text-foreground hover:bg-primary/5 hover:text-primary transition">Профилактика</a>
                <a href="#services" className="block px-4 py-2 text-foreground hover:bg-primary/5 hover:text-primary transition">Детская стоматология</a>
                <a href="#services" className="block px-4 py-2 text-foreground hover:bg-primary/5 hover:text-primary transition">Хирургия</a>
                <a href="#services" className="block px-4 py-2 text-foreground hover:bg-primary/5 hover:text-primary transition">Протезирование</a>
                <a href="#services" className="block px-4 py-2 text-foreground hover:bg-primary/5 hover:text-primary transition">Ортодонтия</a>
              </div>
            )}
          </div>
          <a href="#doctors" className="text-foreground hover:text-primary transition">Специалисты</a>
          <a href="#offers" className="text-foreground hover:text-primary transition">Спецпредложения</a>
          <a href="#faq" className="text-foreground hover:text-primary transition">Вопрос-ответ</a>
          <a href="#contacts" className="text-foreground hover:text-primary transition">Контакты</a>
        </nav>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Icon name="Phone" size={18} />
              Заказать звонок
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Заказать обратный звонок</DialogTitle>
              <DialogDescription>Мы перезвоним вам в течение 15 минут</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCallbackSubmit} className="space-y-4">
              <div>
                <Label htmlFor="callback-name">Ваше имя</Label>
                <Input
                  id="callback-name"
                  value={callbackForm.name}
                  onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="callback-phone">Телефон</Label>
                <Input
                  id="callback-phone"
                  type="tel"
                  value={callbackForm.phone}
                  onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Отправить заявку</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}