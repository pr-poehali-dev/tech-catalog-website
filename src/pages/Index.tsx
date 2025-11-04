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
    image: 'https://cdn.poehali.dev/projects/a4db207d-850d-4d0a-a98d-f30598e3e04b/files/4895257e-9854-40b7-9880-febfad092b43.jpg',
    badge: 'Хит продаж',
    specs: ['3.5L V6', 'Автомат', '415 л.с.'],
  },
  {
    id: 2,
    title: 'Yamaha Raptor 700R',
    brand: 'Yamaha',
    year: 2024,
    price: 850000,
    image: 'https://cdn.poehali.dev/projects/a4db207d-850d-4d0a-a98d-f30598e3e04b/files/ee905170-a6cc-4a20-bcbd-a22305bd3410.jpg',
    badge: 'Новинка',
    specs: ['686cc', '45 л.с.', 'Спортивный'],
  },
  {
    id: 3,
    title: 'Suzuki DF300AP',
    brand: 'Suzuki',
    year: 2024,
    price: 1200000,
    image: 'https://cdn.poehali.dev/projects/a4db207d-850d-4d0a-a98d-f30598e3e04b/files/7b2a9cf6-ea6e-4d52-bb06-a809631f4bb4.jpg',
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

      <section className="relative pt-32 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-6 py-2 text-sm animate-fade-in shadow-lg">
            ✨ Прямые поставки из Китая
          </Badge>
          <h1 className="text-6xl md:text-8xl font-heading font-black text-slate-900 mb-8 animate-fade-in leading-tight">
            Премиальная техника<br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              по честным ценам
            </span>
          </h1>
          <p className="text-2xl text-slate-600 mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Автомобили, квадроциклы, лодочные моторы и спортивный инвентарь напрямую от производителей
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Icon name="Search" className="mr-2" size={22} />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <Icon name="Phone" className="mr-2" size={22} />
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
            {categories.map((category, idx) => (
              <Card key={category.id} className="group hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-slate-50 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="p-10 text-center">
                  <div className={`${category.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon name={category.icon} className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                  <p className="text-slate-600 text-lg">{category.count}+ товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">Популярные товары</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Хиты продаж этого месяца</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {product.badge && (
                    <Badge className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg px-4 py-2 text-sm">
                      ✨ {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-sm border-blue-600 text-blue-600">{product.brand}</Badge>
                    <Badge variant="outline" className="text-sm border-slate-300">{product.year}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.specs.map((spec, idx) => (
                      <span key={idx} className="text-sm text-slate-700 bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-2 rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Подробнее
                    </Button>
                  </div>
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
              <div key={index} className="text-center animate-fade-in group cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Icon name={feature.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Более 500 довольных клиентов по всей России</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={24} />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">"{review.text}"</p>
                  <p className="font-bold text-slate-900 text-lg">{review.name}</p>
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