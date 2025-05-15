
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contacts" className="bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold text-primary mb-4">Контакты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом или оставьте заявку на ремонт
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 reveal">
          <div>
            <ContactForm />
          </div>
          
          <div>
            <div className="bg-muted rounded-lg shadow-lg p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Адрес:</h4>
                    <p className="text-gray-700">Алматы, ул. Байзакова, 222</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Телефоны:</h4>
                    <p className="text-gray-700">+7 (777) 123-45-67</p>
                    <p className="text-gray-700">+7 (727) 123-45-67</p>
                    <p className="text-gray-700">+7 (700) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email:</h4>
                    <p className="text-gray-700">info@mail.kz</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Часы работы:</h4>
                    <p className="text-gray-700">Ежедневно с 8:00 до 21:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white flex items-center"
                  onClick={() => window.open('https://wa.me/77771234567', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="Карта"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.316894552993!2d76.92964767598776!3d43.22878897111821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f0322e11eb9%3A0xc353aeaa5088787c!2sAlmaty%2C%20Kazakhstan!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
