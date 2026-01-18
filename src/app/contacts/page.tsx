'use client';

import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ContactsPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-display mb-12">Контакты</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">📞 Телефон</h3>
                <p className="text-gray-600">
                  <a href="tel:+78128746107" className="hover:text-primary-red">
                    8 (912) 874-61-07
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">📍 Адреса</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Воткинское шоссе 118</li>
                  <li>Курортная 2а</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🕐 Часы работы</h3>
                <p className="text-gray-600">Ежедневно с 9:00 до 20:00</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🚚 Доставка</h3>
                <p className="text-gray-600">
                  Доставляем по городу в пределах часа с момента заказа
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Форма обратной связи</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
                  placeholder="Ваше сообщение"
                />
              </div>

              <Button variant="primary" className="w-full">
                Отправить
              </Button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600">
                Интегрированная карта будет здесь
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Какова минимальная сумма заказа?',
                a: 'Минимальная сумма заказа составляет 300 рублей.',
              },
              {
                q: 'Сколько стоит доставка?',
                a: 'Доставка стоит 150 рублей в пределах города. Бесплатно при заказе от 1000 рублей.',
              },
              {
                q: 'Какие способы оплаты вы принимаете?',
                a: 'Мы принимаем оплату картой и наличные при доставке.',
              },
              {
                q: 'Можно ли что-то поменять или добавить в заказ?',
                a: 'Да, позвоните нам на номер 8 (912) 874-61-07 в течение 10 минут после оформления.',
              },
            ].map((item, idx) => (
              <details key={idx} className="border border-gray-200 rounded-lg">
                <summary className="px-4 py-3 font-semibold cursor-pointer hover:bg-gray-50">
                  {item.q}
                </summary>
                <div className="px-4 py-3 bg-gray-50 text-gray-600">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
