import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      subtitle: "Звоните в рабочие часы",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@prorumba.ru",
      subtitle: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Офис",
      content: "Москва, ул. Технологическая, 15",
      subtitle: "Приходите на встречу",
    },
    {
      icon: "Clock",
      title: "Время работы",
      content: "Пн-Пт: 9:00 - 18:00",
      subtitle: "По московскому времени",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Обсудим ваш проект и подберем оптимальное решение
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">
              Как с нами связаться
            </h3>

            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={info.icon as any}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-blue-400 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-400 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Оставьте заявку
              </CardTitle>
              <p className="text-gray-300">
                Расскажите о своем проекте, и мы свяжемся с вами
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Компания
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="Название компании"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="email@company.com"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Расскажите о вашем проекте..."
                ></textarea>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                <Icon name="Send" size={20} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
