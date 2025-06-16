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
    },
    {
      icon: "BarChart3",
      title: "Системы управления",
      description:
        "Создаем мощные инструменты для контроля и управления всеми аспектами вашего бизнеса",
      features: ["Аналитические панели", "Отчетность", "KPI мониторинг"],
    },
    {
      icon: "Database",
      title: "Цифровизация данных",
      description:
        "Переводим ваши данные в цифровой формат и создаем удобные системы работы с ними",
      features: ["Миграция данных", "Интеграции", "API разработка"],
    },
    {
      icon: "Shield",
      title: "Безопасность систем",
      description:
        "Обеспечиваем надежную защиту ваших данных и соответствие требованиям безопасности",
      features: ["Шифрование данных", "Аудит безопасности", "Compliance"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные решения для цифровой трансформации вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
