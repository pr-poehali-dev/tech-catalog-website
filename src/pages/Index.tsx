import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categories = [
  { id: 'cars', title: 'Автомобили', icon: 'Car', count: 150, color: 'bg-blue-600' },
  { id: 'atvs', title: 'Квадроциклы', icon: 'Bike', count: 45, color: 'bg-sky-600' },
  { id: 'motors', title: 'Лодочные моторы', icon: 'Anchor', count: 80, color: 'bg-cyan-600' },
  { id: 'sport', title: 'Спортивный инвентарь', icon: 'Dumbbell', count: 120, color: 'bg-blue-700' },
];

const features = [
  { icon: 'Shield', title: 'Гарантия качества', desc: 'Проверка каждого товара перед отправкой' },
  { icon: 'Truck', title: 'Быстрая доставка', desc: 'Логистика по всей России за 14-30 дней' },
  { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Консультация на всех этапах покупки' },
  { icon: 'Award', title: 'Лучшие цены', desc: 'Прямые поставки без посредников' },
];

const products = [
  {
    id: 1,
    title: 'Toyota Land Cruiser 300',
    brand: 'Toyota',
    year: 2023,
    price: 8500000,
    image: '/placeholder.svg',
    badge: 'Хит продаж',
    specs: ['3.5L V6', 'Автомат', '415 л.с.'],
  },
  {
    id: 2,
    title: 'Yamaha Raptor 700R',
    brand: 'Yamaha',
    year: 2024,
    price: 850000,
    image: '/placeholder.svg',
    badge: 'Новинка',
    specs: ['686cc', '45 л.с.', 'Спортивный'],
  },
  {
    id: 3,
    title: 'Suzuki DF300AP',
    brand: 'Suzuki',
    year: 2024,
    price: 1200000,
    image: '/placeholder.svg',
    badge: null,
    specs: ['300 л.с.', '4-тактный', 'V6'],
  },
];

const reviews = [
  { name: 'Алексей М.', text: 'Отличный сервис! Купил Land Cruiser, доставили за 3 недели. Все прозрачно и честно.', rating: 5 },
  { name: 'Ирина К.', text: 'Заказывала квадроцикл для мужа. Менеджеры помогли с выбором, цена приятно удивила!', rating: 5 },
  { name: 'Дмитрий П.', text: 'Профессиональный подход. Лодочный мотор пришел в идеальном состоянии. Рекомендую!', rating: 5 },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                ТЕХНИКА КИТАЯ
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#categories" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Каталог</a>
              <a href="#partners" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Партнеры</a>
              <a href="#reviews" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Отзывы</a>
              <a href="#contacts" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Контакты</a>
              <Button className="bg-blue-600 hover:bg-blue-700">Консультация</Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              <a href="#categories" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">Каталог</a>
              <a href="#partners" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">Партнеры</a>
              <a href="#reviews" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">Отзывы</a>
              <a href="#contacts" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">Контакты</a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Консультация</Button>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-2 text-sm animate-fade-in">
            Прямые поставки из Китая
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-slate-900 mb-6 animate-fade-in">
            Премиальная техника<br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              по честным ценам
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto animate-fade-in">
            Автомобили, квадроциклы, лодочные моторы и спортивный инвентарь напрямую от производителей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              <Icon name="Search" className="mr-2" size={20} />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">Категории техники</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Выберите категорию для просмотра каталога</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-slate-600">{category.count}+ товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Надежный партнер в поставках техники</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">Популярные товары</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Хиты продаж этого месяца</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">{product.brand}</Badge>
                    <Badge variant="outline" className="text-xs">{product.year}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec, idx) => (
                      <span key={idx} className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Более 500 довольных клиентов по всей России</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-bold text-slate-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Оставьте заявку и получите персональную консультацию нашего специалиста
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-6">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>

      <footer id="contacts" className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-heading font-bold">ТЕХНИКА КИТАЯ</span>
              </div>
              <p className="text-slate-400">Премиальная техника по честным ценам</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Автомобили</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Квадроциклы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лодочные моторы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Спортивный инвентарь</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (800) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@tehnika-china.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Техника Китая. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
