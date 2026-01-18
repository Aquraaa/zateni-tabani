'use client';

import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

export default function Home() {
  const addItem = useCartStore((state) => state.addItem);

  const handleStartShopping = () => {
    // Navigation will be handled by Link component
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
                <span className="text-primary-red">ТАБАНИ</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-primary-dark mb-6">
                Традиции, которые чувствуешь с первого кусочка!
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Аутентичные рецепты удмуртской кухни, приготовленные с любовью. Каждое блюдо — это история традиций, передаваемых из поколения в поколение.
              </p>
              <div className="flex gap-4">
                <Link href="/catalog">
                  <Button variant="primary" size="lg">
                    Перейти в каталог
                  </Button>
                </Link>
                <Link href="/delivery">
                  <Button variant="outline" size="lg">
                    Узнать о доставке
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative image placeholder */}
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-red to-red-200 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl">🍴</div>
              </div>
              {/* Ornament decoration */}
              <div className="absolute top-10 right-10 text-4xl opacity-20">💎</div>
              <div className="absolute bottom-10 left-10 text-4xl opacity-20">⭐</div>
            </div>
          </div>
        </div>

        {/* Ornamental divider */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent opacity-30"></div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-center mb-12">
            Наше меню
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Перепечи', emoji: '🥟', href: '/catalog?category=perepechis' },
              { name: 'Табани', emoji: '🍞', href: '/catalog?category=tabanis' },
              { name: 'Пицца', emoji: '🍕', href: '/catalog?category=pizza' },
              { name: 'Напитки', emoji: '☕', href: '/catalog?category=drinks' },
            ].map((category) => (
              <Link key={category.name} href={category.href}>
                <div className="card-hover bg-gray-50 p-8 rounded-lg text-center cursor-pointer hover:bg-red-50">
                  <div className="text-5xl mb-4">{category.emoji}</div>
                  <h3 className="text-xl font-semibold text-primary-dark">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚚',
                title: 'Быстрая доставка',
                description: 'Доставляем за 30-60 минут в пределах города',
              },
              {
                icon: '✨',
                title: 'Свежесть гарантирована',
                description: 'Готовим каждый заказ с использованием свежих ингредиентов',
              },
              {
                icon: '💚',
                title: 'Традиционные рецепты',
                description: 'Аутентичные блюда удмуртской кухни',
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">
            Готовы попробовать?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Заказывайте прямо сейчас и получите первый заказ с 10% скидкой!
          </p>
          <Link href="/catalog">
            <Button variant="primary" size="lg">
              Начать заказ
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
