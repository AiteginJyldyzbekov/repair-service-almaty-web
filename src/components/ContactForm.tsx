
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    deviceType: '',
    issue: '',
    preferredTime: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Пожалуйста, заполните обязательные поля',
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Заявка успешно отправлена! Наш мастер свяжется с вами в ближайшее время.',
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      phone: '',
      address: '',
      deviceType: '',
      issue: '',
      preferredTime: '',
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: '',
      });
    }, 5000);
  };

  const deviceTypes = [
    'Холодильник',
    'Стиральная машина',
    'Посудомоечная машина',
    'Микроволновая печь',
    'Телевизор',
    'Кофемашина',
    'Другое',
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-primary mb-6">Оставить заявку</h3>
      
      {formStatus.submitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-md p-4 mb-6">
          {formStatus.message}
        </div>
      )}
      
      {formStatus.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-md p-4 mb-6">
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Адрес
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-1">
              Тип техники
            </label>
            <select
              id="deviceType"
              name="deviceType"
              value={formData.deviceType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">Выберите тип техники</option>
              {deviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4 md:col-span-2">
            <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
              Опишите проблему
            </label>
            <textarea
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
              Удобное время для визита
            </label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              placeholder="Например: после 18:00"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
        
        <div className="mt-2">
          <Button type="submit" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
            <Send className="mr-2 h-4 w-4" />
            Отправить заявку
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
