'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmation'>('cart');

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    address: '',
    paymentMethod: 'card',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    setStep('delivery');
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentComplete = () => {
    clearCart();
    setStep('confirmation');
  };

  if (step === 'confirmation') {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold font-display mb-4">
              Заказ принят!
            </h1>
            <p className="text-gray-600 mb-8">
              Спасибо за ваш заказ. Мы скоро свяжемся с вами для уточнения деталей доставки.
            </p>
            <Link href="/catalog">
              <Button variant="primary" size="lg">
                Вернуться в каталог
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Steps indicator */}
        <div className="flex justify-between mb-8 max-w-2xl mx-auto">
          {['cart', 'delivery', 'payment'].map((s, idx) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === s || (idx < ['cart', 'delivery', 'payment'].indexOf(step))
                    ? 'bg-primary-red text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {idx + 1}
              </div>
              {idx < 2 && <div className="flex-1 h-1 mx-2 bg-gray-300"></div>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {step === 'cart' && (
              <div>
                <h2 className="text-2xl font-bold font-display mb-6">Корзина</h2>
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-500 mb-4">Корзина пуста</p>
                    <Link href="/catalog">
                      <Button variant="primary">Перейти в каталог</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex-grow">
                          <h3 className="font-semibold text-lg">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.product.weight}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-2 justify-end">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                              −
                            </button>
                            <span className="px-3 py-1 min-w-12">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-bold text-primary-red text-lg mb-2">
                            {item.product.price * item.quantity}₽
                          </p>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-xs text-red-600 hover:text-red-800"
                          >
                            Удалить
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {step === 'delivery' && (
              <form onSubmit={handleOrderSubmit}>
                <h2 className="text-2xl font-bold font-display mb-6">
                  Доставка и контакты
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
                      placeholder="+7 (912) 123-45-67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Адрес доставки
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
                      placeholder="Улица, дом, квартира"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button variant="secondary" onClick={() => setStep('cart')}>
                    Вернуться
                  </Button>
                  <Button variant="primary" type="submit" className="flex-1">
                    Продолжить к оплате
                  </Button>
                </div>
              </form>
            )}

            {step === 'payment' && (
              <div>
                <h2 className="text-2xl font-bold font-display mb-6">Оплата</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 border-2 border-primary-red rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: e.target.value,
                        }))
                      }
                      className="accent-primary-red"
                    />
                    <span className="text-lg font-semibold">Карта</span>
                  </label>

                  <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: e.target.value,
                        }))
                      }
                      className="accent-primary-red"
                    />
                    <span className="text-lg font-semibold">
                      Наличные при доставке
                    </span>
                  </label>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button
                    variant="secondary"
                    onClick={() => setStep('delivery')}
                  >
                    Вернуться
                  </Button>
                  <Button
                    variant="primary"
                    className="flex-1"
                    onClick={handlePaymentComplete}
                  >
                    Завершить заказ
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order summary */}
          <aside className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-bold font-display mb-4">
              Итого заказа
            </h3>
            <div className="space-y-3 mb-4 pb-4 border-b">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span>
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="font-semibold">
                    {item.product.price * item.quantity}₽
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Сумма товаров:</span>
                <span>{totalPrice}₽</span>
              </div>
              <div className="flex justify-between">
                <span>Доставка:</span>
                <span className="text-primary-red font-semibold">150₽</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Итого:</span>
                <span className="text-primary-red">
                  {totalPrice + 150}₽
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
