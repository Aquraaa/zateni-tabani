# 📋 Quick Reference - Зацени ТАБАНИ

## 🚀 Быстрый старт (2 минуты)

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 🗂️ Основные файлы

| Путь | Назначение |
|------|-----------|
| `src/app/page.tsx` | Главная страница |
| `src/app/catalog/page.tsx` | Каталог товаров |
| `src/app/cart/page.tsx` | Корзина и checkout |
| `src/components/ui/Button.tsx` | Кнопка компонент |
| `src/store/cartStore.ts` | Zustand store |
| `src/data/products.ts` | 24 товара |
| `src/types/index.ts` | TypeScript типы |

---

## 🎨 Цвета

```css
#FFFFFF  /* Основной белый */
#FF0000  /* Акцент красный */
#1A1A1A  /* Текст темный */
```

Используются через Tailwind:
```html
<div class="bg-primary-white text-primary-dark">
  <button class="bg-primary-red text-white">Кнопка</button>
</div>
```

---

## 🧩 Компоненты

### Button
```tsx
<Button variant="primary" size="md" onClick={() => {}}>
  Текст
</Button>
```

### ProductCard
```tsx
<ProductCard product={product} onAddToCart={() => {}} />
```

### CartPopup
```tsx
<CartPopup isOpen={true} items={items} onClose={() => {}} />
```

---

## 🛒 Zustand Store

```tsx
import { useCartStore } from '@/store/cartStore';

// Получить значения
const items = useCartStore(state => state.items);
const total = useCartStore(state => state.getTotalPrice());

// Вызвать функции
const { addItem, removeItem, updateQuantity } = useCartStore();

// Использование
addItem(product, 1);
updateQuantity(productId, 5);
removeItem(productId);
```

---

## 📄 Страницы

| URL | Компонент | Функция |
|-----|-----------|---------|
| `/` | `app/page.tsx` | Главная |
| `/catalog` | `app/catalog/page.tsx` | Каталог |
| `/cart` | `app/cart/page.tsx` | Корзина |
| `/contacts` | `app/contacts/page.tsx` | Контакты |
| `/delivery` | `app/delivery/page.tsx` | Доставка |
| `/promo` | `app/promo/page.tsx` | Акции |
| `/profile` | `app/profile/page.tsx` | Профиль |
| `/admin` | `app/admin/page.tsx` | Админ-панель |

---

## 📦 Товары в каталоге

### Категории
```
perepechis  → Перепечи (8 товаров)
tabanis     → Табани (6 товаров)
pizza       → Пицца (4 товара)
drinks      → Напитки (6 товаров)
```

### Структура товара
```typescript
{
  id: "unique-id",
  name: "Название",
  category: "perepechis",
  price: 100,
  weight: "75г",
  description: "Описание",
  rating: 4.8,
  reviews: 24
}
```

---

## 🔗 Навигация

```tsx
import Link from 'next/link';

<Link href="/catalog">
  <Button>Перейти в каталог</Button>
</Link>
```

Доступные ссылки:
- `/` - Главная
- `/catalog` - Каталог
- `/cart` - Корзина
- `/contacts` - Контакты
- `/delivery` - Доставка
- `/promo` - Акции
- `/profile` - Профиль
- `/admin` - Админ

---

## 📝 Типы данных

```typescript
type Category = 'perepechis' | 'tabanis' | 'pizza' | 'drinks';

interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  weight: string;
  description?: string;
  rating?: number;
  reviews?: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}
```

---

## 🎯 Основные команды

```bash
npm install          # Установить зависимости
npm run dev          # Разработка (на 3000)
npm run build        # Сборка
npm start            # Production
npm run type-check   # Проверить типы
npm run lint         # Lint
```

---

## 📱 Tailwind Breakpoints

```
sm: 640px    // планшет
md: 768px    // маленький планшет
lg: 1024px   // десктоп
xl: 1280px   // большой экран
```

Пример:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 колонка на мобиле, 2 на планшете, 3 на десктопе */}
</div>
```

---

## 🎨 Часто используемые Tailwind классы

```css
/* Текст */
text-primary-dark     /* Темный текст */
text-primary-red      /* Красный текст */
font-bold             /* Жирный */
text-center           /* Выравнивание */

/* Фон */
bg-white              /* Белый фон */
bg-primary-red        /* Красный фон */
bg-gray-50            /* Светло-серый */

/* Отступы */
p-4                   /* Padding: 16px */
m-8                   /* Margin: 32px */
px-4 py-2             /* Padding: 16px горизонтально, 8px вертикально */

/* Границы */
border-2              /* Граница 2px */
border-primary-red    /* Красная граница */
rounded-lg            /* Border-radius: 12px */

/* Эффекты */
shadow-lg             /* Большая тень */
hover:bg-red-600      /* При hover */
transition-colors     /* Плавный переход */
```

---

## 🔍 Дебаг

```bash
# Проверить ошибки TypeScript
npm run type-check

# Посмотреть структуру
ls -la src/

# Проверить все компоненты
find src/components -type f -name "*.tsx"
```

---

## 📚 Документация

- `README.md` - Что это?
- `SETUP.md` - Как установить?
- `DESIGN_GUIDE.md` - Как выглядит?
- `COMPONENTS.md` - Как использовать компоненты?
- `ROADMAP.md` - Что дальше?
- `PROJECT_SUMMARY.md` - Итоги

---

## 🌐 Деплой

### Vercel (рекомендуется)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t zateni-tabani .
docker run -p 3000:3000 zateni-tabani
```

---

## 💡 Советы

1. **Используйте Zustand правильно**: `useCartStore(state => state.items)` вместо `useCartStore().items`

2. **TypeScript**: Все типы в `src/types/index.ts`

3. **Компоненты**: Переиспользуйте UI компоненты из `src/components/ui/`

4. **Данные**: Добавляйте товары в `src/data/products.ts`

5. **Стили**: Используйте Tailwind классы, избегайте inline styles

---

## 🚨 Типичные ошибки

❌ Забыть `'use client'` в компонентах с интерактивностью  
✅ Добавьте `'use client';` вверху файла

❌ Неправильно использовать Zustand  
✅ `useCartStore(state => state.getTotalPrice())`

❌ Забыть типы для пропсов  
✅ Всегда определяйте `interface Props`

---

## 📞 Контакты

**Зацени ТАБАНИ**
- 📍 Воткинское шоссе 118, Курортная 2а
- 📞 8 (912) 874-61-07
- ⏰ 9:00 - 20:00

---

## 🎓 Ресурсы

- Next.js: https://nextjs.org/docs
- TypeScript: https://www.typescriptlang.org
- Tailwind: https://tailwindcss.com
- Zustand: https://docs.zustand-react.org

---

**Вопросы? Читайте документацию или начните с SETUP.md!**

✅ Готово к разработке!
