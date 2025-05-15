
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ирина Смирнова',
      location: 'Алматы, мкр. Орбита',
      device: 'Холодильник Samsung',
      problem: 'Перестал морозить, образовывался лёд на задней стенке',
      result: 'Мастер выявил проблему с системой разморозки. Заменил датчик и восстановил работу испарителя. Холодильник работает уже больше полугода без проблем.',
      rating: 5,
    },
    {
      name: 'Андрей Козлов',
      location: 'Алматы, ул. Абая',
      device: 'Стиральная машина LG',
      problem: 'Перестала сливать воду, выдавала ошибку',
      result: 'Приехали в тот же день, почистили фильтр насоса, заменили сам насос. Всё работает отлично!',
      rating: 4,
    },
    {
      name: 'Марина Кузнецова',
      location: 'Алматы, мкр. Самал',
      device: 'Посудомоечная машина Bosch',
      problem: 'Не включалась совсем, не было признаков жизни',
      result: 'Мастер быстро выявил проблему с электронным модулем, заменил его. Машинка заработала как новая. Очень вежливый сервис.',
      rating: 5,
    },
    {
      name: 'Тимур Ахметов',
      location: 'Алматы, мкр. Аксай',
      device: 'Телевизор Sony',
      problem: 'Пропало изображение, звук был',
      result: 'Оперативный выезд, детальная диагностика. Заменили блок подсветки. Результат отличный, цена порадовала.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-gradient-to-r from-primary/10 to-secondary/5 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold text-primary mb-4">Отзывы клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Что говорят о нас довольные клиенты после ремонта их техники
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 reveal">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="w-full sm:w-1/3">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {testimonials[currentIndex].location}
                  </p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">
                        {i < testimonials[currentIndex].rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-2/3">
                <p className="text-gray-500 mb-2">
                  <strong>Техника:</strong> {testimonials[currentIndex].device}
                </p>
                <p className="text-gray-500 mb-4">
                  <strong>Проблема:</strong> {testimonials[currentIndex].problem}
                </p>
                <p className="text-gray-700 italic">
                  "{testimonials[currentIndex].result}"
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
