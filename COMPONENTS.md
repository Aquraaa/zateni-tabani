# 📦 Компоненты - Документация

## UI Компоненты

### 1. Button

Переиспользуемая кнопка с тремя вариантами и тремя размерами.

**Расположение**: `src/components/ui/Button.tsx`

**Варианты (variant)**:
- `primary` - красная кнопка (основная действие)
- `secondary` - серая кнопка (вторичная действие)
- `outline` - прозрачная с красным border

**Размеры (size)**:
- `sm` - маленькая (12px текст)
- `md` - средняя (16px текст)
- `lg` - большая (18px текст)

**Использование**:
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md" onClick={() => {}}>
  Нажми меня
</Button>

<Button variant="outline" size="sm" disabled>
  Отключено
</Button>
```

**Props**:
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

---

### 2. ProductCard

Карточка товара с информацией о цене, весе, рейтингом и кнопкой добавления в корзину.

**Расположение**: `src/components/ui/ProductCard.tsx`

**Props**:
```typescript
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}
```

**Использование**:
```tsx
import { ProductCard } from '@/components/ui/ProductCard';
import { products } from '@/data/products';

const handleAddToCart = (product) => {
  useCartStore.getState().addItem(product, 1);
};

<ProductCard 
  product={products[0]} 
  onAddToCart={handleAddToCart}
/>
```

**Отображаемые данные**:
- Название товара
- Описание (обрезано 2 строки)
- Вес
- Рейтинг и количество отзывов
- Цена
- Кнопка "В корзину"

---

### 3. CartPopup

Всплывающее окно (modal) с содержимым корзины.

**Расположение**: `src/components/ui/CartPopup.tsx`

**Props**:
```typescript
interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  totalPrice: number;
  onCheckout: () => void;
}
```

**Использование**:
```tsx
import { CartPopup } from '@/components/ui/CartPopup';
import { useCartStore } from '@/store/cartStore';

const [isOpen, setIsOpen] = useState(false);
const items = useCartStore(state => state.items);
const totalPrice = useCartStore(state => state.getTotalPrice());

<CartPopup
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  items={items}
  onUpdateQuantity={(id, qty) => {}}
  onRemoveItem={(id) => {}}
  totalPrice={totalPrice}
  onCheckout={() => {}}
/>
```

**Особенности**:
- Закрывается кликом на backdrop
- Кнопки +/- для изменения количества
- Удаление товара из корзины
- Итоговая сумма
- Кнопка оформления

---

## Layout Компоненты

### 1. Layout

Главный компонент layout, оборачивает весь контент.

**Расположение**: `src/components/layout/Layout.tsx`

**Использование**:
```tsx
import { Layout } from '@/components/layout/Layout';

export default function Page() {
  return (
    <Layout>
      <main>Содержимое страницы</main>
    </Layout>
  );
}
```

**Включает**:
- Navigation (верх)
- Main контент (посередине)
- Footer (внизу)

---

### 2. Navigation

Навигационная панель с логотипом, меню, поиском и корзиной.

**Расположение**: `src/components/layout/Navigation.tsx`

**Элементы**:
- Логотип (ссылка на главную)
- Меню: Каталог, Акции, Доставка, Контакты
- Поиск (иконка)
- Корзина (с количеством товаров)
- Профиль (иконка)

**Особенности**:
- Sticky позиционирование
- Badge с количеством товаров в корзине
- Responsive (мобильное меню - заготовка)

---

### 3. Footer

Футер с контактами, ссылками и информацией о компании.

**Расположение**: `src/components/layout/Footer.tsx`

**Секции**:
1. **О бренде** - название, девиз, копирайт
2. **Контакты** - телефон, адреса, часы
3. **Меню** - ссылки на категории
4. **Информация** - О нас, Доставка, FAQ, Политика

---

## Custom Hooks

### useCartStore

Zustand hook для управления корзиной.

**Использование**:
```tsx
import { useCartStore } from '@/store/cartStore';

export function MyComponent() {
  // Получить отдельное значение
  const items = useCartStore(state => state.items);
  
  // Получить функцию
  const addItem = useCartStore(state => state.addItem);
  
  // Или сразу несколько
  const { items, addItem, removeItem, getTotalPrice } = useCartStore();
  
  return (
    <div>
      <p>Товаров в корзине: {items.length}</p>
      <p>Сумма: {getTotalPrice()}₽</p>
    </div>
  );
}
```

**Методы**:
- `addItem(product, quantity)` - добавить/увеличить
- `removeItem(productId)` - удалить товар
- `updateQuantity(productId, quantity)` - изменить количество
- `clearCart()` - очистить все
- `getTotalPrice()` - получить сумму
- `getTotalItems()` - получить количество товаров

---

## Страницы (Pages)

### / (Главная)

**Файл**: `src/app/page.tsx`

**Секции**:
1. Hero - призыв к действию
2. Категории - 4 карточки категорий
3. Преимущества - 3 блока с плюсами
4. CTA - финальный призыв

---

### /catalog

**Файл**: `src/app/catalog/page.tsx`

**Функции**:
- Фильтрация по категориям
- Поиск по названию
- Сортировка (цена ASC/DESC, рейтинг)
- Сетка карточек товаров (3 колонки на desktop)
- Sidebar с фильтрами

---

### /cart

**Файл**: `src/app/cart/page.tsx`

**Шаги**:
1. **Корзина** - список товаров, изменение количества
2. **Доставка** - форма с контактами и адресом
3. **Оплата** - выбор способа оплаты
4. **Подтверждение** - спасибо-сообщение

**Sidebar**: Итоги заказа

---

### /contacts

**Файл**: `src/app/contacts/page.tsx`

**Содержимое**:
- Контактная информация
- Форма обратной связи
- Карта (placeholder)
- FAQ секция

---

### /delivery

**Файл**: `src/app/delivery/page.tsx`

**Информация**:
- Сроки доставки
- Стоимость
- Как оформить
- Зоны доставки
- Способы оплаты

---

### /profile

**Файл**: `src/app/profile/page.tsx`

**Разделы**:
- Вход/регистрация (форма)
- Мои данные
- История заказов
- Мои адреса

---

### /promo

**Файл**: `src/app/promo/page.tsx`

**Содержимое**:
- Основные акции
- Специальные предложения
- Условия акций

---

### /admin

**Файл**: `src/app/admin/page.tsx`

**Вкладки**:
1. **Товары** - форма добавления, список товаров
2. **Заказы** - таблица с заказами
3. **Отзывы** - модерация отзывов

---

## Типы данных

**Расположение**: `src/types/index.ts`

```typescript
type Category = 'perepechis' | 'tabanis' | 'pizza' | 'drinks';

interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  weight: string;
  description?: string;
  image?: string;
  rating?: number;
  reviews?: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  status: 'pending' | 'preparing' | 'shipping' | 'delivered';
  createdAt: Date;
}

interface User {
  id: string;
  email: string;
  phone?: string;
  name?: string;
  addresses?: string[];
}
```

---

## Данные

**Расположение**: `src/data/products.ts`

Экспортирует:
- `products` - массив всех товаров
- `categories` - объект с названиями категорий
- `companyInfo` - информация о компании

```typescript
import { products, categories, companyInfo } from '@/data/products';

console.log(companyInfo.phone); // "8 (912) 874-61-07"
console.log(categories.perepechis); // "Перепечи"
```

---

## Стили

**Global CSS**: `src/globals.css`

**Tailwind Config**: `tailwind.config.ts`

**Кастомные классы**:
- `.ornament` - базовый класс для орнамента
- `.card-hover` - hover эффект для карточек
- `.button-hover` - hover эффект для кнопок

---

## Лучшие практики

### 1. Использование компонентов
```tsx
// ✅ Хорошо
import { Button } from '@/components/ui/Button';

// ❌ Плохо
import Button from '@/components/ui/Button';
```

### 2. TypeScript
```tsx
// ✅ Хорошо
interface Props {
  onClick: (id: string) => void;
}

// ❌ Плохо
interface Props {
  onClick: any;
}
```

### 3. Zustand в компонентах
```tsx
// ✅ Хорошо
const totalPrice = useCartStore(state => state.getTotalPrice());

// ❌ Плохо (создаёт лишние ре-рендеры)
const store = useCartStore();
const totalPrice = store.getTotalPrice();
```

### 4. Условный рендеринг
```tsx
// ✅ Хорошо
{items.length > 0 && <CartList items={items} />}

// ❌ Плохо
{items.length > 0 ? <CartList items={items} /> : null}
```

---

## Навигация между страницами

Используется Next.js Link компонент:

```tsx
import Link from 'next/link';

<Link href="/catalog">
  <Button>Перейти в каталог</Button>
</Link>
```

---

## Примеры интеграции

### Добавление товара в корзину
```tsx
import { useCartStore } from '@/store/cartStore';

function ProductCard({ product }) {
  const addItem = useCartStore(state => state.addItem);
  
  const handleAdd = () => {
    addItem(product, 1);
    // Можно показать toast или другое уведомление
  };
  
  return (
    <Button onClick={handleAdd}>
      В корзину
    </Button>
  );
}
```

### Отображение корзины
```tsx
function CartPage() {
  const items = useCartStore(state => state.items);
  const totalPrice = useCartStore(state => state.getTotalPrice());
  
  return (
    <div>
      {items.map(item => (
        <CartItem key={item.product.id} item={item} />
      ))}
      <p>Итого: {totalPrice}₽</p>
    </div>
  );
}
```

---

**Документация обновлена: January 2026**
