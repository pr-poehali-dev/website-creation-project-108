import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export function Footer() {
  const branches = [
    {
      city: 'Норильск',
      address: 'пл. Металлургов, 8',
      phone: '+7 (913) 500-20-60',
      schedule: 'Ежедневно: 9:00 - 21:00',
      mapUrl: 'https://yandex.ru/map-widget/v1/?ll=88.201753%2C69.346242&mode=search&oid=145879116078&ol=biz&z=16'
    },
    {
      city: 'Кайеркан',
      address: 'ул. Надеждинская, 2',
      phone: '+7 (913) 497-77-52',
      schedule: 'Ежедневно: 9:00 - 21:00',
      mapUrl: 'https://yandex.ru/map-widget/v1/?ll=87.336661%2C69.400000&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc5NzIxNhJQ0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7Rj9GA0YHQutC40Lkg0LrRgNCw0LksINCa0LDQudC10YDQutCw0L0sINGD0LvQuNGG0LAgNDciCg0FRFRCFWbDW0I%2C&z=16'
    },
    {
      city: 'Дудинка',
      address: 'ул. Дудинская, 9',
      phone: '+7 (913) 503-97-70',
      schedule: 'Ежедневно: 9:00 - 21:00',
      mapUrl: 'https://yandex.ru/map-widget/v1/?ll=86.177869%2C69.405520&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc5NzIyMBJQ0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7Rj9GA0YHQutC40Lkg0LrRgNCw0LksINCU0YPQtNC40L3QutCwLCDRg9C70LjRhtCwIDkiCg3_RVRCFaqsW0I%2C&z=16'
    }
  ];

  return (
    <>
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Наши адреса</h2>
            <p className="text-lg text-muted-foreground">3 филиала в регионе для вашего удобства</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {branches.map((branch, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 overflow-hidden group">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <iframe
                    src={branch.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{branch.city}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3 pb-6">
                  <div className="flex items-start justify-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <p>{branch.address}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={18} className="text-primary flex-shrink-0" />
                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="font-semibold text-primary hover:underline text-lg">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={18} className="text-primary flex-shrink-0" />
                    <p>{branch.schedule}</p>
                  </div>
                  <a 
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium mt-2"
                  >
                    <Icon name="ExternalLink" size={16} />
                    Открыть на карте
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-3">Свяжитесь с нами в WhatsApp</h3>
                <p className="text-muted-foreground mb-6">Быстрая запись и консультация в мессенджере</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {branches.map((branch, index) => (
                    <a
                      key={index}
                      href={`https://wa.me/${branch.phone.replace(/[^\d]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BA5A] transition-colors font-semibold"
                    >
                      <Icon name="MessageCircle" size={20} />
                      {branch.city}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Smile" size={32} className="text-primary" />
                <h3 className="text-2xl font-heading font-bold">Denta Plus</h3>
              </div>
              <p className="text-background/70 mb-4">Семейная стоматология</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition">
                  <Icon name="Instagram" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition">
                  <Icon name="Facebook" size={20} className="text-primary" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-lg">Навигация</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-background/70 hover:text-background transition">О клинике</a>
                <a href="#services" className="block text-background/70 hover:text-background transition">Услуги и цены</a>
                <a href="#doctors" className="block text-background/70 hover:text-background transition">Специалисты</a>
                <a href="#offers" className="block text-background/70 hover:text-background transition">Спецпредложения</a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-lg">Норильск</h4>
              <div className="space-y-2 text-background/70 text-sm">
                <p>пл. Металлургов, 8</p>
                <a href="tel:+79135002060" className="block hover:text-background">+7 (913) 500-20-60</a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-lg">Кайеркан</h4>
              <div className="space-y-2 text-background/70 text-sm">
                <p>ул. Надеждинская, 2</p>
                <a href="tel:+79134977752" className="block hover:text-background">+7 (913) 497-77-52</a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">&copy; 2024 Denta Plus. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition">Политика конфиденциальности</a>
              <a href="#" className="hover:text-background transition">Лицензии</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}