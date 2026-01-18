'use client';

import React from 'react';
import { Layout } from '@/components/layout/Layout';

export default function DeliveryPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-display mb-8">Доставка</h1>

        <div className="space-y-8">
          {/* Main Info */}
          <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Информация о доставке</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>⏱ Время доставки:</strong> 30-60 минут с момента подтверждения заказа
              </p>
              <p>
                <strong>💰 Стоимость:</strong> 150 рублей (бесплатно при заказе от 1000₽)
              </p>
              <p>
                <strong>📍 Зона доставки:</strong> Весь город в пределах кольцевой дороги
              </p>
              <p>
                <strong>🕐 Время работы:</strong> 9:00 - 20:00 ежедневно
              </p>
            </div>
          </div>

          {/* How to Order */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Как оформить заказ</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: '1',
                  title: 'Выберите товары',
                  desc: 'Перейдите в каталог и добавьте нужные товары в корзину',
                },
                {
                  step: '2',
                  title: 'Оформите заказ',
                  desc: 'Укажите адрес доставки и свои контактные данные',
                },
                {
                  step: '3',
                  title: 'Выберите способ оплаты',
                  desc: 'Оплатите онлайн или наличными при доставке',
                },
                {
                  step: '4',
                  title: 'Ожидайте доставку',
                  desc: 'Мы свяжемся с вами и доставим заказ вовремя',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-primary-red rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-primary-red mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Zones */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Карта зон доставки</h2>
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">Карта будет интегрирована здесь</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Способы оплаты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: '💳',
                  title: 'Карта',
                  desc: 'Оплата картой при оформлении заказа (Visa, MasterCard, МИР)',
                },
                {
                  icon: '💵',
                  title: 'Наличные',
                  desc: 'Оплата наличными при получении заказа',
                },
              ].map((method, idx) => (
                <div key={idx} className="border border-gray-300 rounded-lg p-6">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-gray-600">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-primary-dark text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Возникли вопросы?</h2>
            <p className="text-lg mb-4">
              Позвоните нам или напишите в чате, и мы поможем разобраться
            </p>
            <a
              href="tel:+78128746107"
              className="inline-block px-6 py-3 bg-primary-red rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              📞 8 (912) 874-61-07
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
