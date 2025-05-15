
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type ServiceCategoryProps = {
  title: string;
  icon: string;
  issues: string[];
  stages: string[];
  priceRange: string;
  timeFrame: string;
};

const ServicesCategory: React.FC<ServiceCategoryProps> = ({
  title,
  icon,
  issues,
  stages,
  priceRange,
  timeFrame,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <span className="text-4xl mr-4">{icon}</span>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="text-primary h-6 w-6" />
        ) : (
          <ChevronDown className="text-primary h-6 w-6" />
        )}
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 pt-1 bg-gray-50 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-secondary mb-2">Типичные неисправности:</h4>
              <ul className="ml-5 list-disc space-y-1">
                {issues.map((issue, index) => (
                  <li key={index} className="text-gray-700">{issue}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-2">Этапы ремонта:</h4>
              <ol className="ml-5 list-decimal space-y-1">
                {stages.map((stage, index) => (
                  <li key={index} className="text-gray-700">{stage}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-4 pt-4 border-t border-gray-200">
            <div>
              <h4 className="font-bold text-secondary mb-2">Стоимость:</h4>
              <p className="text-gray-700">{priceRange}</p>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-2">Сроки выполнения:</h4>
              <p className="text-gray-700">{timeFrame}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCategory;
