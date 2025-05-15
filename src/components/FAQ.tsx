
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Сколько стоит вызов мастера?',
      answer: 'Вызов мастера и диагностика проводятся БЕСПЛАТНО при условии последующего ремонта. Если вы откажетесь от ремонта после диагностики, стоимость выезда составит 3 000 ₸.'
    },
    {
      question: 'Как быстро приедет мастер?',
      answer: 'В большинстве случаев наши мастера приезжают в течение 1-2 часов после звонка. В загруженные дни время ожидания может составлять до 3-4 часов. Также возможно назначить удобное для вас время.'
    },
    {
      question: 'Даёте ли вы гарантию на ремонт?',
      answer: 'Да, мы предоставляем гарантию от 3 до 12 месяцев в зависимости от типа ремонта и установленных запчастей. Гарантийный срок указывается в гарантийном талоне.'
    },
    {
      question: 'Работаете ли вы в выходные и праздничные дни?',
      answer: 'Да, мы работаем без выходных с 8:00 до 21:00, включая праздничные дни.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем оплату наличными, банковскими картами через терминал и переводом на Kaspi.'
    },
    {
      question: 'Выезжаете ли вы за пределы Алматы?',
      answer: 'Да, мы выезжаем в пригороды Алматы (Каскелен, Талгар, Иссык, Капшагай и др.) с дополнительной оплатой за дорогу.'
    }
  ];

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold text-primary mb-4">Часто задаваемые вопросы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ответы на популярные вопросы о нашем сервисе
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                className={`flex justify-between items-center p-5 cursor-pointer rounded-t-lg ${
                  openIndex === index 
                    ? 'bg-primary text-white' 
                    : 'bg-white hover:bg-gray-50 text-primary'
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-semibold">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
              
              {openIndex === index && (
                <div className="p-5 bg-white border border-gray-200 rounded-b-lg border-t-0 animate-accordion-down">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
