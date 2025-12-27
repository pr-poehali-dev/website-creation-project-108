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
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={40} className="text-primary mx-auto mb-4" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Норильск, площадь Металлургов, 8</p>
                <p className="text-sm text-muted-foreground mt-1">1 этаж, 2-3 (Центральный) м-н</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={40} className="text-primary mx-auto mb-4" />
                <CardTitle>Телефоны</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (3919) 42-04-40</p>
                <p className="text-muted-foreground">+7-913-500-20-60</p>
                <p className="text-sm text-muted-foreground mt-1">Ежедневно 9:00 - 21:00</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="MessageCircle" size={40} className="text-primary mx-auto mb-4" />
                <CardTitle>Мессенджер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">WhatsApp</p>
                <p className="text-muted-foreground">+7-913-500-20-60</p>
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
              <p className="text-background/80">Клиника эстетической стоматологии</p>
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
                <p>+7 (3919) 42-04-40</p>
                <p>+7-913-500-20-60</p>
                <p>Норильск, пл. Металлургов, 8</p>
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