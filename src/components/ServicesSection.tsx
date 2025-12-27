import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  price: number;
  icon: string;
}

interface ServicesSectionProps {
  services: Service[];
  selectedServices: string[];
  totalCost: number;
  handleServiceToggle: (serviceId: string, price: number) => void;
  appointmentForm: { name: string; phone: string; service: string; date: string };
  setAppointmentForm: React.Dispatch<React.SetStateAction<{ name: string; phone: string; service: string; date: string }>>;
  handleAppointmentSubmit: (e: React.FormEvent) => void;
}

export function ServicesSection({
  services,
  selectedServices,
  totalCost,
  handleServiceToggle,
  appointmentForm,
  setAppointmentForm,
  handleAppointmentSubmit
}: ServicesSectionProps) {
  const doctors = [
    { name: 'Команда Denta Plus', specialty: 'Профессиональная команда стоматологов', experience: 'Более 15 лет опыта', photo: 'https://cdn.poehali.dev/files/28.06.25 (24)_resized.jpg' },
    { name: 'Администратор клиники', specialty: 'Запись на приём и консультации', experience: 'Всегда рады помочь', photo: 'https://cdn.poehali.dev/files/Дента плюс 7.03.25 (289) копия_resized.jpg' },
    { name: 'Администратор клиники', specialty: 'Запись на приём и консультации', experience: 'Всегда рады помочь', photo: 'https://cdn.poehali.dev/files/Дента плюс 10.06.25 (134) копия_resized.jpg' },
    { name: 'Врачи клиники', specialty: 'Стоматологи высшей категории', experience: 'Опытные специалисты', photo: 'https://cdn.poehali.dev/files/specialist_page.jpg' }
  ];

  const faqItems = [
    { question: 'Больно ли лечить зубы?', answer: 'Мы используем современные методы анестезии, которые делают лечение абсолютно безболезненным. Вы не почувствуете дискомфорта во время процедуры.' },
    { question: 'Сколько времени занимает первый приём?', answer: 'Первичная консультация обычно занимает 30-40 минут. Врач проведёт осмотр, сделает необходимые снимки и составит план лечения.' },
    { question: 'Какие гарантии вы даёте на лечение?', answer: 'Мы предоставляем гарантию на все виды лечения от 1 года до 5 лет в зависимости от процедуры. Детали гарантии прописываются в договоре.' },
    { question: 'Можно ли оплатить лечение в рассрочку?', answer: 'Да, мы предлагаем беспроцентную рассрочку на все виды лечения. Подробности можно уточнить у администратора.' }
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">О клинике</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Преимущества Denta Plus</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Семейная стоматология с прозрачным подходом к лечению. План и стоимость фиксируются до начала процедур.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Семейная стоматология</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Скидка 10% на все стоматологические услуги для пенсионеров. Лечим всю семью с заботой и вниманием.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <Icon name="FileCheck" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Прозрачность цен</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  План лечения и стоимость фиксируются до начала процедур. Никаких скрытых платежей.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <Icon name="Microscope" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Современное оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Лечение под микроскопом, 3D-томография, цифровое протезирование и собственная лаборатория.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">Услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Услуги и цены</h2>
            <p className="text-lg text-muted-foreground">Полный спектр стоматологических услуг для всей семьи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 animate-fade-in border-2 hover:border-primary/20" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardHeader>
                  <Icon name={service.icon as any} size={40} className="text-primary mb-4" />
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-2xl font-heading font-bold text-primary">
                    от {service.price.toLocaleString('ru-RU')} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="py-20 bg-gradient-to-br from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Наши программы и спецпредложения</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/34b71de7-b2df-41da-8761-a6f2f258774a/files/06f3dee2-70d7-461e-9469-91961db245bf.jpg"
                  alt="Скидка для пенсионеров"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="bg-white/95">
                <CardTitle className="text-xl mb-2">10% СКИДКА</CardTitle>
                <CardDescription className="text-base text-foreground">
                  DENTA PLUS заботится о старшем поколении! 10% скидка на все стоматологические услуги для пенсионеров
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/34b71de7-b2df-41da-8761-a6f2f258774a/files/05b05010-94af-483a-bb10-fb4b2e412691.jpg"
                  alt="Скидка для участников СВО"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="bg-white/95">
                <CardTitle className="text-xl mb-2">20% СКИДКА</CardTitle>
                <CardDescription className="text-base text-foreground">
                  DENTA PLUS — поддержка защитников Родины! Скидка 20% на стоматологические услуги для участников СВО
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/34b71de7-b2df-41da-8761-a6f2f258774a/files/4dac6b96-6809-462f-8a26-1091aac76330.jpg"
                  alt="Бесплатная консультация"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="bg-white/95">
                <CardTitle className="text-xl mb-2">БЕСПЛАТНАЯ</CardTitle>
                <CardDescription className="text-base text-foreground">
                  консультация в DENTA PLUS — без записи, каждый день! Узнайте все о здоровье ваших зубов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/34b71de7-b2df-41da-8761-a6f2f258774a/files/bf434fe5-0d59-4c14-af5c-1f2277254697.jpg"
                  alt="Возврат налога"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="bg-white/95">
                <CardTitle className="text-xl mb-2">ВОЗВРАТ НАЛОГА</CardTitle>
                <CardDescription className="text-base text-foreground">
                  Верните до 13% от стоимости лечения! DENTA PLUS поможет оформить документы для налогового вычета
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">Команда</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Наши специалисты</h2>
            <p className="text-lg text-muted-foreground">9 врачей высшей категории с минимальным стажем 15 лет</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <img 
                    src={doctor.photo} 
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{doctor.name}</CardTitle>
                  <CardDescription className="text-base">{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{doctor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Вопрос-ответ</h2>
            <p className="text-lg text-muted-foreground">Ответы на часто задаваемые вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-2 px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="appointment" className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">Запись на приём</h2>
              <p className="text-xl text-white/90">Заполните форму, и мы свяжемся с вами для подтверждения записи</p>
            </div>
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                    <Input
                      id="name"
                      value={appointmentForm.name}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={appointmentForm.phone}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-base">Услуга</Label>
                    <Input
                      id="service"
                      value={appointmentForm.service}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, service: e.target.value })}
                      placeholder="Например: консультация, лечение кариеса"
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date" className="text-base">Желаемая дата</Label>
                    <Input
                      id="date"
                      type="date"
                      value={appointmentForm.date}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                      className="mt-2 h-12"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg h-14">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на приём
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}