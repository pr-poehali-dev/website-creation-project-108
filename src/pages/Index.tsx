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
    { id: '1', name: 'Профессиональная чистка зубов', price: 3500, icon: 'Sparkles' },
    { id: '2', name: 'Лечение кариеса, пульпита, периодонтита', price: 5000, icon: 'Stethoscope' },
    { id: '3', name: 'Эстетическая реставрация', price: 8000, icon: 'Palette' },
    { id: '4', name: 'Детская стоматология', price: 3000, icon: 'Baby' },
    { id: '5', name: 'Хирургия (удаление зубов)', price: 4500, icon: 'Scissors' },
    { id: '6', name: 'Протезирование (съемное и несъемное)', price: 25000, icon: 'Crown' },
    { id: '7', name: 'Коронки на имплантах', price: 45000, icon: 'Drill' },
    { id: '8', name: 'Ортодонтия (брекеты)', price: 80000, icon: 'AlignJustify' }
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