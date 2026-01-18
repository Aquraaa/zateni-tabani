'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/cartStore';
import { products, categories } from '@/data/products';
import { Category } from '@/types';
import { useSearchParams } from 'next/navigation';

function CatalogContent() {
  const searchParams = useSearchParams();
  const selectedCategory = (searchParams.get('category') as Category) || null;

  const [activeCategory, setActiveCategory] = useState<Category | null>(selectedCategory);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('price-asc');
  const [searchQuery, setSearchQuery] = useState('');

  const addItem = useCartStore((state) => state.addItem);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

    return sorted;
  }, [activeCategory, sortBy, searchQuery]);

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addItem(product, 1);
      // Here you could show a toast notification
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-red-50 to-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-2">Каталог</h1>
          <p className="text-gray-600">
            {filteredAndSortedProducts.length} товара(ов)
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">Категории</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                    !activeCategory
                      ? 'bg-primary-red text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Все товары
                </button>
                {(Object.entries(categories) as [Category, string][]).map(
                  ([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        activeCategory === key
                          ? 'bg-primary-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {label}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Sorting */}
            <div>
              <h3 className="font-bold text-lg mb-4">Сортировка</h3>
              <div className="space-y-2">
                {[
                  { value: 'price-asc' as const, label: 'Дешевле' },
                  { value: 'price-desc' as const, label: 'Дороже' },
                  { value: 'rating' as const, label: 'По рейтингу' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={sortBy === option.value}
                      onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                      className="accent-primary-red"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="md:col-span-3">
            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red"
              />
            </div>

            {/* Products grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => handleAddToCart(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500 mb-4">
                  Товары не найдены
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setActiveCategory(null);
                    setSearchQuery('');
                  }}
                >
                  Показать все товары
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
