
import React from 'react';
import { Award, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold text-primary mb-4">О компании</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            С 2014 года наша команда профессионалов обеспечивает жителей Алматы надежным и качественным ремонтом бытовой техники.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <div className="relative">
              <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45249f78a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Мастер ремонтирует технику" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary font-bold p-4 rounded-lg shadow-md">
                10+ лет опыта
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Наш подход к работе</h3>
            <p className="text-gray-700 mb-6">
              Наша миссия — обеспечивать безупречный сервис и ремонт любой сложности при максимальном комфорте для клиента. 
              Мы ценим ваше время и доверие, поэтому работаем быстро, качественно и прозрачно.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: <Shield className="h-6 w-6 text-secondary" />,
                  title: "Гарантии",
                  description: "На все виды работ и замененные детали предоставляется гарантия до 12 месяцев."
                },
                {
                  icon: <Users className="h-6 w-6 text-secondary" />,
                  title: "Опытные мастера",
                  description: "Наши специалисты имеют профильное образование и опыт от 5 лет работы."
                },
                {
                  icon: <Award className="h-6 w-6 text-secondary" />,
                  title: "Качественные запчасти",
                  description: "Используем только оригинальные или высококачественные совместимые запчасти."
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="mt-1 mr-4 flex-shrink-0 p-2 rounded-full bg-secondary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
