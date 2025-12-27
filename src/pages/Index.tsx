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
    { id: '1', name: 'Консультация и осмотр', price: 500, icon: 'Stethoscope' },
    { id: '2', name: 'Профессиональная чистка зубов', price: 3200, icon: 'Sparkles' },
    { id: '3', name: 'Лечение кариеса', price: 4500, icon: 'CircleDot' },
    { id: '4', name: 'Лечение пульпита', price: 8500, icon: 'Activity' },
    { id: '5', name: 'Лечение периодонтита', price: 9500, icon: 'Zap' },
    { id: '6', name: 'Эстетическая реставрация зуба', price: 7500, icon: 'Palette' },
    { id: '7', name: 'Детская стоматология (приём)', price: 2500, icon: 'Baby' },
    { id: '8', name: 'Удаление зуба простое', price: 3500, icon: 'Scissors' },
    { id: '9', name: 'Удаление зуба сложное', price: 6500, icon: 'XCircle' },
    { id: '10', name: 'Металлокерамическая коронка', price: 12000, icon: 'Crown' },
    { id: '11', name: 'Коронка из диоксида циркония', price: 25000, icon: 'Gem' },
    { id: '12', name: 'Съёмный протез (акриловый)', price: 22000, icon: 'ClipboardList' },
    { id: '13', name: 'Бюгельный протез', price: 45000, icon: 'Grid3x3' },
    { id: '14', name: 'Имплантация (1 имплант)', price: 35000, icon: 'Drill' },
    { id: '15', name: 'Брекет-система (1 челюсть)', price: 45000, icon: 'AlignJustify' },
    { id: '16', name: 'Отбеливание зубов', price: 15000, icon: 'Smile' }
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