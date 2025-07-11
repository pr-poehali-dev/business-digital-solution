import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Rocket",
      title: "Быстрое внедрение",
      description:
        "Запускаем проекты в кратчайшие сроки благодаря проверенным методологиям",
      badge: "Скорость",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description:
        "Команда экспертов с 5+ летним опытом в разработке корпоративных решений",
      badge: "Экспертиза",
    },
    {
      icon: "Target",
      title: "Индивидуальный подход",
      description: "Разрабатываем решения под специфику именно вашего бизнеса",
      badge: "Персонализация",
    },
    {
      icon: "HeartHandshake",
      title: "Долгосрочная поддержка",
      description: "Сопровождаем проекты на всех этапах жизненного цикла",
      badge: "Надежность",
    },
    {
      icon: "TrendingUp",
      title: "Масштабируемость",
      description: "Создаем системы, которые растут вместе с вашим бизнесом",
      badge: "Гибкость",
    },
    {
      icon: "Award",
      title: "Качество кода",
      description:
        "Следуем лучшим практикам разработки и современным стандартам",
      badge: "Качество",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-pulse">
          <Icon name="Lightbulb" size={100} className="text-yellow-500" />
        </div>
        <div
          className="absolute top-20 right-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <Icon name="Zap" size={80} className="text-blue-500" />
        </div>
        <div
          className="absolute bottom-20 left-1/4 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <Icon name="Star" size={90} className="text-purple-500" />
        </div>
        <div
          className="absolute bottom-40 right-1/3 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        >
          <Icon name="Heart" size={70} className="text-red-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Icon name="Trophy" size={14} className="mr-2" />
            Почему выбирают нас
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Преимущества работы с Прорумба
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы не просто разрабатываем программы — мы создаем решения, которые
            трансформируют ваш бизнес
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={advantage.icon as any}
                    size={20}
                    className="text-white"
                  />
                </div>
                <Badge variant="outline" className="text-xs">
                  {advantage.badge}
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {advantage.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4">
                <Icon name="Sparkles" size={40} className="text-white" />
              </div>
              <div className="absolute top-4 right-4">
                <Icon name="Star" size={32} className="text-white" />
              </div>
              <div className="absolute bottom-4 left-8">
                <Icon name="Zap" size={36} className="text-white" />
              </div>
              <div className="absolute bottom-4 right-8">
                <Icon name="Heart" size={28} className="text-white" />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Готовы начать цифровую трансформацию?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Получите персональную консультацию и узнайте, как мы можем
                помочь вашему бизнесу
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Получить консультацию
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                  <Icon name="Folder" size={20} />
                  Портфолио проектов
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
