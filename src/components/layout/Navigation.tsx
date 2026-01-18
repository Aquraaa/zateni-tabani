import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/Button';

export const Navigation: React.FC = () => {
  const cartCount = useCartStore((state) => state.getTotalItems());

  const navItems = [
    { href: '/catalog', label: 'Каталог' },
    { href: '/promo', label: 'Акции' },
    { href: '/delivery', label: 'Доставка' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold font-display text-primary-red">
              ТАБАНИ
            </div>
            <span className="text-xs text-gray-600">Зацени</span>
          </Link>

          {/* Center navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary-dark hover:text-primary-red transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/search"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Поиск"
            >
              <span className="text-xl">🔍</span>
            </Link>

            <Link href="/cart" className="relative">
              <Button variant="outline" size="sm">
                <span className="text-lg mr-1">🛒</span>
                Корзина
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            <Link href="/profile">
              <Button variant="secondary" size="sm">
                👤
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu would go here */}
      </div>
    </nav>
  );
};
