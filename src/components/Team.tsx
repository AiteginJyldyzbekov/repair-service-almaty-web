
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Александр Петров',
      position: 'Старший мастер',
      experience: 18,
      specialty: 'Холодильники, морозильники',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Дмитрий Иванов',
      position: 'Ведущий инженер',
      experience: 12,
      specialty: 'Стиральные и посудомоечные машины',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Сергей Васильев',
      position: 'Мастер-электронщик',
      experience: 10,
      specialty: 'Телевизоры, аудиосистемы',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Алексей Смирнов',
      position: 'Мастер',
      experience: 5,
      specialty: 'Мелкая бытовая техника, кофемашины',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
  ];

  return (
    <section id="team" className="bg-muted py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold text-primary mb-4">Наша команда</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с нашими опытными мастерами, которые вернут вашу технику к жизни.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.position}</p>
                <div className="flex items-center text-gray-600 mb-1">
                  <span className="font-medium">Опыт:</span>
                  <span className="ml-2">{member.experience} лет</span>
                </div>
                <div className="text-gray-600">
                  <span className="font-medium">Специализация:</span>
                  <p className="mt-1">{member.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
