
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-r from-primary/10 to-secondary/5">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Профессиональный ремонт бытовой техники в Алматы
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Быстрый и качественный ремонт любой сложности с гарантией до 12 месяцев.
            Выезд мастера по Алматы - бесплатно!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              <FileText className="mr-2 h-4 w-4" />
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <PhoneCall className="mr-2 h-4 w-4" />
              Позвонить мастеру
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/20 rounded-full"></div>
          <div className="relative z-10 bg-white rounded-lg shadow-xl p-6">
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Бесплатный выезд', icon: '🚗' },
                { title: 'Бесплатная диагностика', icon: '🔍' },
                { title: 'Гарантия до 12 мес.', icon: '🛡️' },
                { title: 'Ремонт от 15 минут', icon: '⏱️' },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow animate-float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
