import React from 'react';
import { Product } from '@/types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return (
      <div className="flex items-center gap-1">
        <span className="text-sm font-semibold text-primary-red">{rating.toFixed(1)}</span>
        <span className="text-xs text-gray-500">({product.reviews} отзывов)</span>
      </div>
    );
  };

  return (
    <div className="card-hover bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Image placeholder with ornament */}
      <div className="relative w-full h-48 bg-gradient-to-br from-red-50 to-gray-50 flex items-center justify-center overflow-hidden">
        <div className="text-4xl opacity-20">🍴</div>
        {/* Ornament corner */}
        <div className="absolute top-2 right-2 w-6 h-6 border-l-2 border-t-2 border-primary-red opacity-50"></div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary-dark mb-1 line-clamp-2">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">{product.weight}</span>
          {renderStars(product.rating)}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-red">
            {product.price}₽
          </span>
          <Button
            size="sm"
            variant="primary"
            onClick={() => onAddToCart(product)}
          >
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
