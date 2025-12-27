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
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Smile" size={32} className="text-primary" />
          <h1 className="text-2xl font-heading font-bold text-primary">Denta Plus</h1>
        </div>
        <nav className="hidden lg:flex gap-6 text-sm">
          <a href="#about" className="text-foreground hover:text-primary transition">О клинике</a>
          <a href="#services" className="text-foreground hover:text-primary transition">Услуги и цены</a>
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