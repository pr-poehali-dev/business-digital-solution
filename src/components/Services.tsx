import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Settings",
      title: "Автоматизация бизнес-процессов",
      description:
        "Оптимизируем рабочие процессы и устраняем ручной труд с помощью современных технологий",
      features: ["CRM системы", "ERP решения", "Workflow автоматизация"],
      bgIcon: "Workflow",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: "BarChart3",
      title: "Системы управления",
      description:
        "Создаем мощные инструменты для контроля и управления всеми аспектами вашего бизнеса",
      features: ["Аналитические панели", "Отчетность", "KPI мониторинг"],
      bgIcon: "TrendingUp",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: "Database",
      title: "Цифровизация данных",
      description:
        "Переводим ваши данные в цифровой формат и создаем удобные системы работы с ними",
      features: ["Миграция данных", "Интеграции", "API разработка"],
      bgIcon: "FileText",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: "Shield",
      title: "Безопасность систем",
      description:
        "Обеспечиваем надежную защиту ваших данных и соответствие требованиям безопасности",
      features: ["Шифрование данных", "Аудит безопасности", "Compliance"],
      bgIcon: "Lock",
      gradient: "from-red-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Icon name="Laptop" size={200} className="text-blue-600" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Icon name="Smartphone" size={150} className="text-purple-600" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Icon name="Globe" size={300} className="text-gray-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" size={16} className="text-blue-600" />
            <span className="text-blue-800 text-sm font-medium">
              Наши решения
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные решения для цифровой трансформации вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white relative overflow-hidden"
            >
              {/* Background Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Icon
                  name={service.bgIcon as any}
                  size={48}
                  className="text-gray-400"
                />
              </div>

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center gap-2 text-sm text-gray-700"
                    >
                      <Icon name="Check" size={16} className="text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
