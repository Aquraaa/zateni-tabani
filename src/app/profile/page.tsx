'use client';

import React from 'react';
import { Layout } from '@/components/layout/Layout';
import Link from 'next/link';

export default function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="max-w-md mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold font-display mb-8 text-center">
            Вход
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
                placeholder="Пароль"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Войти
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Нет аккаунта?</p>
            <button
              onClick={() => setIsLoggedIn(true)}
              className="text-primary-red font-semibold hover:underline"
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold font-display mb-8">Личный кабинет</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Menu */}
          <aside className="md:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 bg-primary-red text-white">
                <h3 className="font-semibold">👤 Профиль</h3>
              </div>
              <nav className="p-4 space-y-2">
                {[
                  { label: 'Мои данные' },
                  { label: 'История заказов' },
                  { label: 'Адреса' },
                  { label: 'Избранное' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="border-t p-4">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-red-600 font-semibold hover:text-red-800"
                >
                  Выход
                </button>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="md:col-span-3 space-y-6">
            {/* User Info */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Мои данные</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Имя', value: 'Иван Иванов' },
                  { label: 'Email', value: 'ivan@example.com' },
                  { label: 'Телефон', value: '+7 (912) 123-45-67' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <label className="text-sm text-gray-600">{item.label}</label>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order History */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">История заказов</h2>
              <div className="space-y-4">
                {[
                  {
                    id: '#12345',
                    date: '15.01.2024',
                    total: '850₽',
                    status: 'Доставлен',
                  },
                  {
                    id: '#12344',
                    date: '10.01.2024',
                    total: '1250₽',
                    status: 'Доставлен',
                  },
                ].map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div>
                      <p className="font-semibold">Заказ {order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary-red">{order.total}</p>
                      <p className="text-sm text-green-600">{order.status}</p>
                    </div>
                    <button className="text-primary-red font-semibold hover:underline">
                      Повторить
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Addresses */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Мои адреса</h2>
              <div className="space-y-4">
                {[
                  'Воткинское шоссе 118, кв. 45',
                  'Курортная 2а, кв. 12',
                ].map((addr, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <p>{addr}</p>
                    <div className="space-x-2">
                      <button className="text-primary-red text-sm hover:underline">
                        Редактировать
                      </button>
                      <button className="text-red-600 text-sm hover:underline">
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
