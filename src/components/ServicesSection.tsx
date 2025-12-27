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
    { name: 'Иванов Иван Иванович', specialty: 'Главный врач, стоматолог-хирург', experience: '15 лет опыта' },
    { name: 'Петрова Анна Сергеевна', specialty: 'Стоматолог-терапевт', experience: '10 лет опыта' },
    { name: 'Смирнов Дмитрий Олегович', specialty: 'Стоматолог-ортопед', experience: '12 лет опыта' },
    { name: 'Кузнецова Мария Ивановна', specialty: 'Детский стоматолог', experience: '8 лет опыта' }
  ];

  const portfolio = [
    { title: 'Отбеливание зубов', description: 'Результат после процедуры профессионального отбеливания' },
    { title: 'Установка виниров', description: 'Красивая улыбка после установки виниров' },
    { title: 'Имплантация', description: 'Восстановление зубного ряда' },
    { title: 'Исправление прикуса', description: 'До и после лечения брекет-системой' }
  ];

  const reviews = [
    { name: 'Ольга М.', rating: 5, text: 'Отличная клиника! Профессиональные врачи, современное оборудование. Теперь не боюсь ходить к стоматологу!' },
    { name: 'Алексей К.', rating: 5, text: 'Делал имплантацию у доктора Иванова. Всё прошло безболезненно и быстро. Очень доволен результатом!' },
    { name: 'Марина С.', rating: 5, text: 'Привела дочку к детскому стоматологу. Ребёнок не плакал, врач нашла подход. Спасибо большое!' }
  ];

  const faqItems = [
    { question: 'Больно ли лечить зубы?', answer: 'Мы используем современные методы анестезии, которые делают лечение абсолютно безболезненным. Вы не почувствуете дискомфорта во время процедуры.' },
    { question: 'Сколько времени занимает первый приём?', answer: 'Первичная консультация обычно занимает 30-40 минут. Врач проведёт осмотр, сделает необходимые снимки и составит план лечения.' },
    { question: 'Какие гарантии вы даёте на лечение?', answer: 'Мы предоставляем гарантию на все виды лечения от 1 года до 5 лет в зависимости от процедуры. Детали гарантии прописываются в договоре.' },
    { question: 'Можно ли оплатить лечение в рассрочку?', answer: 'Да, мы предлагаем беспроцентную рассрочку на все виды лечения. Подробности можно уточнить у администратора.' },
    { question: 'Есть ли у вас парковка?', answer: 'Да, для наших пациентов доступна бесплатная парковка рядом с клиникой.' }
  ];

  const certificates = [
    'Лицензия на медицинскую деятельность',
    'Сертификаты специалистов',
    'Членство в Ассоциации стоматологов',
    'ISO 9001:2015'
  ];

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">О нас</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы создали клинику, где каждый пациент чувствует себя комфортно и получает лучшее лечение
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="animate-scale-in hover:shadow-lg transition">
              <CardHeader>
                <Icon name="Award" size={40} className="text-primary mb-4" />
                <CardTitle>Опытные врачи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Наши специалисты имеют опыт работы более 10 лет и регулярно повышают квалификацию
                </p>
              </CardContent>
            </Card>
            <Card className="animate-scale-in hover:shadow-lg transition" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Icon name="Zap" size={40} className="text-primary mb-4" />
                <CardTitle>Современное оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Используем новейшие технологии для точной диагностики и эффективного лечения
                </p>
              </CardContent>
            </Card>
            <Card className="animate-scale-in hover:shadow-lg transition" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Icon name="Heart" size={40} className="text-primary mb-4" />
                <CardTitle>Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Разрабатываем персональный план лечения с учётом всех особенностей пациента
                </p>
              </CardContent>
            </Card>
            <Card className="animate-scale-in hover:shadow-lg transition" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <Icon name="MapPin" size={40} className="text-primary mb-4" />
                <CardTitle>4 филиала</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Выбирайте удобное расположение в разных районах Норильска
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Полный спектр стоматологических услуг</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={service.id} className="hover:shadow-lg transition animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <Icon name={service.icon as any} size={40} className="text-primary mb-4" />
                  <CardTitle>{service.name}</CardTitle>
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

      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Калькулятор</Badge>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Рассчитайте стоимость лечения</h2>
              <p className="text-muted-foreground">Выберите необходимые услуги и узнайте примерную стоимость</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Выберите услуги</CardTitle>
                <CardDescription>Отметьте все процедуры, которые вам необходимы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id, service.price)}
                      />
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-muted-foreground">{service.price.toLocaleString('ru-RU')} ₽</div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-6 border-t">
                  <div className="flex justify-between items-center text-2xl font-heading font-bold">
                    <span>Итого:</span>
                    <span className="text-primary">{totalCost.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">* Точная стоимость определяется после консультации врача</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Профессиональные врачи</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый специалист имеет высшую квалификационную категорию и большой опыт работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <CardDescription className="text-sm">{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{doctor.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Наши работы</h2>
            <p className="text-muted-foreground">Примеры успешно выполненных процедур</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon name="Image" size={64} className="text-primary/40" />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Что говорят наши пациенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&ldquo;{review.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Сертификаты</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Наши документы</h2>
            <p className="text-muted-foreground">Мы работаем официально и имеем все необходимые лицензии</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Award" size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-sm">{cert}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground">Ответы на самые популярные вопросы наших пациентов</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="appointment" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Запись на приём</Badge>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Запишитесь на консультацию</h2>
              <p className="text-muted-foreground">Заполните форму и мы свяжемся с вами для уточнения деталей</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      value={appointmentForm.name}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={appointmentForm.phone}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <Input
                      id="service"
                      value={appointmentForm.service}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, service: e.target.value })}
                      placeholder="Например: лечение кариеса"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Предпочтительная дата</Label>
                    <Input
                      id="date"
                      type="date"
                      value={appointmentForm.date}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
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