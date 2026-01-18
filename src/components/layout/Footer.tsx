import React from 'react';
import { companyInfo } from '@/data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-display mb-2">ТАБАНИ</h3>
            <p className="text-sm text-gray-300 mb-4">{companyInfo.tagline}</p>
            <p className="text-xs text-gray-400">© 2024 {companyInfo.name}</p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>📞 {companyInfo.phone}</li>
              <li>🕐 {companyInfo.workingHours}</li>
              {companyInfo.addresses.map((addr, idx) => (
                <li key={idx}>📍 {addr}</li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold mb-4">Меню</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Перепечи</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Табани</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Пицца</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Напитки</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-sm text-gray-400">
          <p>Все права защищены. Доставка с {companyInfo.workingHours}</p>
        </div>
      </div>
    </footer>
  );
};
