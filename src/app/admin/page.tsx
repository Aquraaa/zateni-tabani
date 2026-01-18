'use client';

import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { products } from '@/data/products';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'reviews'>('products');
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'perepechis',
    price: 0,
    weight: '',
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    // Add product logic here
    alert('Товар добавлен (демо-режим)');
    setNewProduct({ name: '', category: 'perepechis', price: 0, weight: '' });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold font-display">Администратор</h1>
          <Button variant="secondary">Выход</Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {[
            { id: 'products', label: 'Товары' },
            { id: 'orders', label: 'Заказы' },
            { id: 'reviews', label: 'Отзывы' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-red text-primary-red'
                  : 'border-transparent text-gray-600 hover:text-primary-dark'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Add product form */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Добавить товар</h3>
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Название
                    </label>
                    <input
                      type="text"
                      value={newProduct.name}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Категория
                    </label>
                    <select
                      value={newProduct.category}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, category: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    >
                      <option value="perepechis">Перепечи</option>
                      <option value="tabanis">Табани</option>
                      <option value="pizza">Пицца</option>
                      <option value="drinks">Напитки</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Цена (₽)
                    </label>
                    <input
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          price: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Вес/объем
                    </label>
                    <input
                      type="text"
                      value={newProduct.weight}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, weight: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <Button variant="primary" type="submit" className="w-full">
                    Добавить
                  </Button>
                </form>
              </div>
            </div>

            {/* Products list */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Список товаров</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {products.slice(0, 10).map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded"
                    >
                      <div className="flex-grow">
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm text-gray-600">
                          {product.weight} • {product.price}₽
                        </p>
                      </div>
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
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Управление заказами</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">ID</th>
                    <th className="px-4 py-2 text-left font-semibold">Клиент</th>
                    <th className="px-4 py-2 text-left font-semibold">Сумма</th>
                    <th className="px-4 py-2 text-left font-semibold">Статус</th>
                    <th className="px-4 py-2 text-left font-semibold">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#001', client: 'Иван И.', sum: '850₽', status: 'В пути' },
                    { id: '#002', client: 'Мария П.', sum: '1250₽', status: 'Готовится' },
                    { id: '#003', client: 'Петр К.', sum: '650₽', status: 'Принят' },
                  ].map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{order.id}</td>
                      <td className="px-4 py-2">{order.client}</td>
                      <td className="px-4 py-2 font-semibold">{order.sum}</td>
                      <td className="px-4 py-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 space-x-2">
                        <button className="text-primary-red text-sm hover:underline">
                          Редактировать
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Модерация отзывов</h3>
            <p className="text-gray-600 mb-6">
              Здесь вы сможете просматривать и модерировать отзывы о товарах
            </p>
            <div className="text-center py-8 text-gray-500">
              Нет новых отзывов для проверки
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
