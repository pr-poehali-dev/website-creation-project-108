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
                <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={40} className="text-primary mx-auto mb-4" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-1">Ежедневно 9:00 - 21:00</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Mail" size={40} className="text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@dentapro.ru</p>
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
                <h3 className="text-xl font-heading font-bold">ДентаПро</h3>
              </div>
              <p className="text-background/80">Современная стоматологическая клиника полного цикла</p>
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
                <p>+7 (495) 123-45-67</p>
                <p>info@dentapro.ru</p>
                <p>г. Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 ДентаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
