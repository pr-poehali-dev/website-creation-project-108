import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export function Footer() {
  return (
    <>
      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Как нас найти</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-primary mb-3" />
                <CardTitle>Норильск</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">пл. Металлургов, 8</p>
                <p className="text-sm text-muted-foreground mb-2">Ежедневно: 9:00 - 21:00</p>
                <p className="font-semibold text-primary">+7 (913) 500-20-60</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-primary mb-3" />
                <CardTitle>Кайеркан</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">ул. Надеждинская, 2</p>
                <p className="text-sm text-muted-foreground mb-2">Ежедневно: 9:00 - 21:00</p>
                <p className="font-semibold text-primary">+7 (913) 497-77-52</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-primary mb-3" />
                <CardTitle>Дудинка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">ул. Дудинская, 9</p>
                <p className="text-sm text-muted-foreground mb-2">Ежедневно: 9:00 - 21:00</p>
                <p className="font-semibold text-primary">+7 (913) 503-97-70</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Smile" size={28} className="text-primary" />
                <h3 className="text-xl font-heading font-bold">Denta Plus</h3>
              </div>
              <p className="text-background/80">Семейная стоматология</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-background/80 hover:text-background transition">Услуги</a>
                <a href="#doctors" className="block text-background/80 hover:text-background transition">Врачи</a>
                <a href="#portfolio" className="block text-background/80 hover:text-background transition">Портфолио</a>
                <a href="#contacts" className="block text-background/80 hover:text-background transition">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p>Норильск: +7 (913) 500-20-60</p>
                <p>Кайеркан: +7 (913) 497-77-52</p>
                <p>Дудинка: +7 (913) 503-97-70</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Denta Plus. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}