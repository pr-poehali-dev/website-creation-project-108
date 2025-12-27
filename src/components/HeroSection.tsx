import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Семейная стоматология</Badge>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
            Мы готовы помочь сделать вашу улыбку сияющей и белоснежной!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            План лечения и стоимость фиксируются до начала процедур. Прозрачность и качество — наши главные принципы.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Calendar" size={20} />
              Записаться на приём
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">9</div>
              <div className="text-sm text-muted-foreground">врачей высшей категории</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">11</div>
              <div className="text-sm text-muted-foreground">лет работы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">10 000+</div>
              <div className="text-sm text-muted-foreground">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">филиала в регионе</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}