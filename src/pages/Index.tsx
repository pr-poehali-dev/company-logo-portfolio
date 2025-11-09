import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Globe",
      title: "Создание сайтов",
      description: "Разработка современных и адаптивных веб-сайтов любой сложности"
    },
    {
      icon: "Palette",
      title: "Разработка логотипов",
      description: "Уникальный фирменный стиль для вашего бренда"
    },
    {
      icon: "TrendingUp",
      title: "Яндекс.Директ",
      description: "Настройка и оптимизация рекламных кампаний"
    }
  ];

  const portfolio = [
    { title: "Интернет-магазин электроники", category: "Веб-разработка", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
    { title: "Логотип для ресторана", category: "Дизайн", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800" },
    { title: "Корпоративный сайт", category: "Веб-разработка", image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800" },
    { title: "Рекламная кампания для стартапа", category: "Реклама", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800" }
  ];

  const cases = [
    {
      title: "Увеличение продаж на 250%",
      client: "Интернет-магазин одежды",
      description: "Настройка контекстной рекламы и редизайн сайта увеличили конверсию с 1.2% до 4.2%",
      metrics: [
        { label: "Рост продаж", value: "+250%" },
        { label: "Конверсия", value: "4.2%" },
        { label: "ROI", value: "380%" }
      ]
    },
    {
      title: "Запуск нового бренда",
      client: "Кофейня премиум-класса",
      description: "Разработка фирменного стиля, создание сайта и настройка рекламы для новой кофейни",
      metrics: [
        { label: "Посетителей", value: "15K/мес" },
        { label: "Узнаваемость", value: "+180%" },
        { label: "Клиентов", value: "2.5K" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://cdn.poehali.dev/projects/89e95d17-c959-4e8e-9f12-62f776a8bea1/files/96dfc5a9-a773-44ff-a013-8b15774b39d9.jpg" 
              alt="Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div className="hidden md:flex gap-8">
              {["Главная", "Обо мне", "Услуги", "Портфолио", "Кейсы", "Контакты"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase().replace(/\s+/g, '-') ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Создаю сайты,<br />логотипы и<br />настраиваю рекламу
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Помогаю бизнесу расти в digital-пространстве. Разрабатываю сайты, создаю запоминающиеся логотипы и настраиваю эффективную рекламу в Яндекс.Директ.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("портфолио")}>
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600" 
                  alt="Hero" 
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="обо-мне" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Более 5 лет опыта в веб-разработке, дизайне и настройке контекстной рекламы. 
            Работал с компаниями из разных сфер: от небольших стартапов до крупных корпораций. 
            Мой подход — не просто красивая картинка, а решение, которое приносит реальный результат вашему бизнесу.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Проектов завершено</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary mb-2">5+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Портфолио</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-sm text-accent mb-2">{item.category}</div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="кейсы" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Кейсы</h2>
          <div className="space-y-12">
            {cases.map((caseItem, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2">{caseItem.title}</h3>
                      <div className="text-primary font-medium mb-4">{caseItem.client}</div>
                      <p className="text-gray-600 leading-relaxed text-lg">{caseItem.description}</p>
                    </div>
                    <div className="flex md:flex-col gap-6">
                      {caseItem.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center md:text-right">
                          <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-6 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl mb-12 opacity-90">
            Свяжитесь со мной, и мы обсудим ваши идеи
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Mail" className="mr-2" size={20} />
              info@example.com
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Send" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="opacity-70">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
