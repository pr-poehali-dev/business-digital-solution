import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        {/* Tech Pattern */}
        <div className="absolute top-1/4 right-1/4 opacity-20">
          <Icon name="Cpu" size={120} className="text-blue-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-15">
          <Icon name="Network" size={100} className="text-purple-400" />
        </div>
        <div className="absolute top-1/2 left-1/6 opacity-10">
          <Icon name="Workflow" size={80} className="text-cyan-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
            <Icon name="Zap" size={16} className="text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">
              Цифровая трансформация бизнеса
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Прорумба
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-normal text-gray-300">
              Превращаем идеи в технологии
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Профессиональная разработка систем управления бизнесом, оцифровка
            процессов и внедрение передовых технологий
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="ArrowRight" size={20} />
              Начать проект
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg"
            >
              <Icon name="Play" size={20} />
              Смотреть презентацию
            </Button>
          </div>

          {/* Floating Tech Icons */}
          <div className="hidden lg:block">
            <div className="absolute top-20 left-10 animate-pulse">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Icon name="Code" size={24} className="text-blue-400" />
              </div>
            </div>
            <div
              className="absolute top-40 right-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Icon name="Database" size={24} className="text-purple-400" />
              </div>
            </div>
            <div
              className="absolute bottom-40 left-16 animate-pulse"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Icon name="Cog" size={24} className="text-green-400" />
              </div>
            </div>
            <div
              className="absolute bottom-20 right-16 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Icon name="Rocket" size={24} className="text-orange-400" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400 text-sm">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-400 text-sm">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5 лет</div>
              <div className="text-gray-400 text-sm">На рынке</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
