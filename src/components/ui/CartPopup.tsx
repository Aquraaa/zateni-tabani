import React, { useState } from 'react';
import { CartItem } from '@/types';
import { Button } from './Button';

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  totalPrice: number;
  onCheckout: () => void;
}

export const CartPopup: React.FC<CartPopupProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
  onCheckout,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-lg z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Корзина</h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none hover:bg-gray-100 p-1 rounded"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-grow overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Корзина пуста</p>
              <Button
                variant="primary"
                size="sm"
                className="mt-4"
                onClick={onClose}
              >
                Продолжить покупки
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 border rounded-lg"
                >
                  <div className="flex-grow">
                    <h4 className="font-semibold text-sm">{item.product.name}</h4>
                    <p className="text-xs text-gray-600 mb-2">
                      {item.product.weight} × {item.product.price}₽
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary-red mb-2">
                      {item.product.price * item.quantity}₽
                    </p>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Итого:</span>
              <span className="text-primary-red">{totalPrice}₽</span>
            </div>
            <Button
              variant="primary"
              className="w-full"
              onClick={onCheckout}
            >
              Оформить заказ
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
