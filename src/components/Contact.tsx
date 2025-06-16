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
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Icon name="Wifi" size={120} className="text-blue-400" />
        </div>
        <div className="absolute bottom-40 right-20">
          <Icon name="Satellite" size={100} className="text-purple-400" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Icon name="Radio" size={200} className="text-gray-600" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Icon name="MessageSquare" size={16} className="text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">
              Связаться с нами
            </span>
          </div>
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
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Icon name="Users" size={24} className="text-blue-400" />
              Как с нами связаться
            </h3>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
              >
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

            {/* Social Links */}
            <div className="mt-8 p-6 bg-gray-800 rounded-2xl border border-gray-700">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Icon name="Share2" size={18} className="text-blue-400" />
                Мы в соцсетях
              </h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <Icon name="Mail" size={16} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <Icon name="Phone" size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Icon name="PenTool" size={24} className="text-blue-400" />
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
