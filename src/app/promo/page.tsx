'use client';

import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function PromoPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-display mb-8">Акции</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Promo Card 1 */}
          <div className="bg-gradient-to-br from-primary-red to-red-600 text-white rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-4xl opacity-20">🎉</div>
            <h2 className="text-3xl font-bold font-display mb-4">
              Первый заказ
            </h2>
            <p className="text-lg mb-4">Скидка 10% на первый заказ</p>
            <p className="text-sm opacity-90 mb-6">Используйте код: FIRST10</p>
            <Link href="/catalog">
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:bg-opacity-10"
              >
                В каталог
              </Button>
            </Link>
          </div>

          {/* Promo Card 2 */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-primary-red rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-4xl opacity-20">⭐</div>
            <h2 className="text-3xl font-bold font-display mb-4 text-primary-red">
              Бесплатная доставка
            </h2>
            <p className="text-lg text-primary-dark mb-4">При заказе от 1000₽</p>
            <p className="text-sm text-gray-600 mb-6">Экономьте на каждом заказе</p>
            <Link href="/catalog">
              <Button variant="primary">
                Заказать
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured offers */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold font-display mb-8">Специальные предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎁',
                title: 'Комбо-набор',
                desc: 'Перепечи + Табани + Напиток',
                price: '450₽',
                oldPrice: '580₽',
              },
              {
                icon: '👥',
                title: 'Для компании',
                desc: '3 и более разных товара',
                discount: '15% скидка',
                oldPrice: 'обычная цена',
              },
              {
                icon: '🎊',
                title: 'Еженедельный бонус',
                desc: 'Каждый понедельник',
                bonus: '100 бонусов',
                desc2: 'на первую покупку',
              },
            ].map((offer, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-red transition-colors">
                <div className="text-4xl mb-4">{offer.icon}</div>
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{offer.desc}</p>
                {offer.price && (
                  <div>
                    <span className="text-2xl font-bold text-primary-red">{offer.price}</span>
                    <span className="line-through text-gray-400 ml-2">{offer.oldPrice}</span>
                  </div>
                )}
                {offer.discount && (
                  <div className="text-primary-red font-bold text-lg">{offer.discount}</div>
                )}
                {offer.bonus && (
                  <div className="text-primary-red font-bold">{offer.bonus}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Условия акций</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Акции действуют только при заказе через сайт</li>
            <li>✓ Коды скидок нельзя комбинировать</li>
            <li>✓ Доставка бесплатна при заказе от 1000₽</li>
            <li>✓ Бонусы накапливаются и действуют 3 месяца</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
