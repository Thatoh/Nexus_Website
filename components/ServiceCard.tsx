import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow duration-300">
      <div className="p-4 rounded-full bg-nexusbyte-accent-green text-nexusbyte-primary-dark mb-4 inline-block">
        {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
      </div>
      <h3 className="text-xl font-semibold text-nexusbyte-primary-dark mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
      <button className="mt-6 px-5 py-2 text-sm font-medium text-nexusbyte-primary-dark border-2 border-nexusbyte-accent-green rounded-md hover:bg-nexusbyte-accent-green hover:text-white transition-colors duration-200">
        Learn More
      </button>
    </div>
  );
}

export default ServiceCard;