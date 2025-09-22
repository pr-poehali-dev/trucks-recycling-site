import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const trucks = [
    {
      brand: "DAF",
      model: "XF 105",
      year: "2018",
      engine: "12.9L",
      available: "В разборе",
      parts: ["Двигатель", "КПП", "Мост", "Кабина", "Электрика"]
    },
    {
      brand: "MAN",
      model: "TGX 18.440",
      year: "2019", 
      engine: "12.4L",
      available: "В разборе",
      parts: ["Двигатель", "КПП", "Мост", "Кабина", "Гидравлика"]
    },
    {
      brand: "VOLVO",
      model: "FH 460",
      year: "2020",
      engine: "12.8L", 
      available: "В разборе",
      parts: ["Двигатель", "КПП", "Мост", "Кабина", "Пневматика"]
    },
    {
      brand: "DAF",
      model: "CF 85",
      year: "2017",
      engine: "12.9L",
      available: "В разборе", 
      parts: ["Двигатель", "КПП", "Мост", "Кабина", "Тормоза"]
    },
    {
      brand: "MAN",
      model: "TGS 35.400",
      year: "2018",
      engine: "10.5L",
      available: "В разборе",
      parts: ["Двигатель", "КПП", "Мост", "Кабина", "Рулевое"]
    },
    {
      brand: "VOLVO",
      model: "FM 370", 
      year: "2019",
      engine: "9.3L",
      available: "В разборе",
      parts: ["Двигатель", "КПП", "Мост", "Кабина", "Подвеска"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Truck" size={32} />
              <h1 className="text-2xl font-bold">ГрузАвтоРазбор</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('catalog')}
                className="hover:text-accent transition-colors"
              >
                Каталог
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-accent transition-colors"
              >
                Контакты
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Запчасти для грузовых автомобилей
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Разборка грузовиков DAF, MAN, VOLVO. Качественные запчасти с гарантией. 
            Быстрая доставка по всей России.
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('catalog')}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Icon name="Search" size={20} className="mr-2" />
            Смотреть каталог
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Каталог доступных машин</h3>
            <p className="text-muted-foreground text-lg">
              Актуальный список грузовиков, поступивших на разборку
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trucks.map((truck, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">
                      {truck.brand} {truck.model}
                    </CardTitle>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                      {truck.available}
                    </span>
                  </div>
                  <CardDescription>
                    {truck.year} год • Двигатель {truck.engine}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      ДОСТУПНЫЕ УЗЛЫ:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {truck.parts.map((part, partIndex) => (
                        <span 
                          key={partIndex}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {part}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Уточнить наличие
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Контакты</h3>
              <p className="text-muted-foreground text-lg">
                Свяжитесь с нами для уточнения наличия запчастей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" size={40} className="mx-auto mb-4 text-accent" />
                  <h4 className="font-bold mb-2">Телефон</h4>
                  <p className="text-muted-foreground mb-2">+7 (999) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Ежедневно 9:00-18:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" size={40} className="mx-auto mb-4 text-accent" />
                  <h4 className="font-bold mb-2">Адрес</h4>
                  <p className="text-muted-foreground mb-2">г. Москва, ул. Грузовая, д. 15</p>
                  <p className="text-sm text-muted-foreground">Разборочная площадка</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" size={40} className="mx-auto mb-4 text-accent" />
                  <h4 className="font-bold mb-2">Email</h4>
                  <p className="text-muted-foreground mb-2">info@gruzrazborka.ru</p>
                  <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Truck" size={24} />
              <span className="font-bold">ГрузАвтоРазбор</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm opacity-80">
                © 2024 ГрузАвтоРазбор. Все права защищены.
              </p>
              <p className="text-sm opacity-60 mt-1">
                Разборка грузовых автомобилей DAF • MAN • VOLVO
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;