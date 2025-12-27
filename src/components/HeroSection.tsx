import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwRUE1RTkiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDh2OGgtOHpNMTYgMTZoOHY4aC04ek0zNiAzNmg4djhoLTh6TTE2IDM2aDh2OGgtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 text-base px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90">Семейная стоматология Denta Plus</Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-foreground leading-tight">
            Бережная стоматология<br/>для детей и взрослых
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Качественное лечение, профилактика, имплантация и протезирование
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" className="gap-2 text-lg px-8 py-6" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Calendar" size={24} />
              Записаться на приём
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Phone" size={24} />
              Позвонить
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
              <div className="text-4xl font-heading font-bold text-primary mb-2">9</div>
              <div className="text-sm text-muted-foreground">врачей высшей<br/>категории</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
              <div className="text-4xl font-heading font-bold text-primary mb-2">11</div>
              <div className="text-sm text-muted-foreground">лет<br/>работы</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
              <div className="text-4xl font-heading font-bold text-primary mb-2">10 000+</div>
              <div className="text-sm text-muted-foreground">довольных<br/>клиентов</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
              <div className="text-4xl font-heading font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">лет мин.<br/>стаж врача</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}