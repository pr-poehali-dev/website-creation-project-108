import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { Footer } from '@/components/Footer';

export default function Index() {
  const [appointmentForm, setAppointmentForm] = useState({ name: '', phone: '', service: '', date: '' });
  const [callbackForm, setCallbackForm] = useState({ name: '', phone: '' });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  const services = [
    { id: '1', name: 'Консультация и осмотр', price: 500, icon: 'Stethoscope', category: 'Лечение' },
    { id: '2', name: 'Профессиональная чистка зубов', price: 3200, icon: 'Sparkles', category: 'Профилактика' },
    { id: '3', name: 'Лечение кариеса', price: 4500, icon: 'CircleDot', category: 'Лечение' },
    { id: '4', name: 'Лечение пульпита', price: 8500, icon: 'Activity', category: 'Лечение' },
    { id: '5', name: 'Лечение периодонтита', price: 9500, icon: 'Zap', category: 'Лечение' },
    { id: '6', name: 'Эстетическая реставрация зуба', price: 7500, icon: 'Palette', category: 'Лечение' },
    { id: '7', name: 'Детская стоматология (приём)', price: 2500, icon: 'Baby', category: 'Детская стоматология' },
    { id: '8', name: 'Удаление зуба простое', price: 3500, icon: 'Scissors', category: 'Хирургия' },
    { id: '9', name: 'Удаление зуба сложное', price: 6500, icon: 'XCircle', category: 'Хирургия' },
    { id: '10', name: 'Металлокерамическая коронка', price: 12000, icon: 'Crown', category: 'Протезирование' },
    { id: '11', name: 'Коронка из диоксида циркония', price: 25000, icon: 'Gem', category: 'Протезирование' },
    { id: '12', name: 'Съёмный протез (акриловый)', price: 22000, icon: 'ClipboardList', category: 'Протезирование' },
    { id: '13', name: 'Бюгельный протез', price: 45000, icon: 'Grid3x3', category: 'Протезирование' },
    { id: '14', name: 'Имплантация (1 имплант)', price: 35000, icon: 'Drill', category: 'Протезирование' },
    { id: '15', name: 'Брекет-система (1 челюсть)', price: 45000, icon: 'AlignJustify', category: 'Ортодонтия' },
    { id: '16', name: 'Отбеливание зубов', price: 15000, icon: 'Smile', category: 'Профилактика' }
  ];

  const handleServiceToggle = (serviceId: string, price: number) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
      setTotalCost(totalCost - price);
    } else {
      setSelectedServices([...selectedServices, serviceId]);
      setTotalCost(totalCost + price);
    }
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${appointmentForm.name}! Мы свяжемся с вами в ближайшее время для подтверждения записи.`);
    setAppointmentForm({ name: '', phone: '', service: '', date: '' });
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${callbackForm.name}! Мы перезвоним вам в течение 15 минут.`);
    setCallbackForm({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        callbackForm={callbackForm}
        setCallbackForm={setCallbackForm}
        handleCallbackSubmit={handleCallbackSubmit}
      />
      <HeroSection />
      <ServicesSection 
        services={services}
        selectedServices={selectedServices}
        totalCost={totalCost}
        handleServiceToggle={handleServiceToggle}
        appointmentForm={appointmentForm}
        setAppointmentForm={setAppointmentForm}
        handleAppointmentSubmit={handleAppointmentSubmit}
      />
      <Footer />
    </div>
  );
}