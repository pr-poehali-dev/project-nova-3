import Icon from '@/components/ui/icon';

const categories = [
  {
    icon: 'BookOpen',
    title: 'Конспекты уроков',
    description: 'Готовые планы-конспекты уроков для разных классов с целями, упражнениями и домашним заданием',
    count: '12 материалов',
  },
  {
    icon: 'FileText',
    title: 'Рабочие листы',
    description: 'Раздаточные материалы и рабочие листы для отработки грамматики, лексики и навыков чтения',
    count: '18 материалов',
  },
  {
    icon: 'Presentation',
    title: 'Презентации',
    description: 'Визуальные материалы и слайды для подачи нового материала и закрепления пройденного',
    count: '9 материалов',
  },
  {
    icon: 'ClipboardList',
    title: 'Контрольные работы',
    description: 'Тесты, контрольные и проверочные работы по всем разделам программы',
    count: '15 материалов',
  },
  {
    icon: 'Gamepad2',
    title: 'Игры и активности',
    description: 'Интерактивные игры и коммуникативные задания для повышения мотивации учеников',
    count: '7 материалов',
  },
  {
    icon: 'Globe',
    title: 'Страноведение',
    description: 'Материалы о культуре, традициях и реалиях англоязычных стран для расширения кругозора',
    count: '5 материалов',
  },
];

const featured = [
  {
    grade: '5 класс',
    title: 'Тема "My Family" — комплект материалов',
    type: 'Конспект + рабочий лист',
    description: 'Полный комплект для изучения темы «Семья»: план урока, лексические упражнения и задания на говорение',
  },
  {
    grade: '8 класс',
    title: 'Present Perfect vs Past Simple',
    type: 'Презентация + тест',
    description: 'Сравнительная таблица, правила употребления и 20 практических упражнений с ключами',
  },
  {
    grade: '10 класс',
    title: 'Подготовка к ОГЭ: раздел «Чтение»',
    type: 'Тренировочные задания',
    description: 'Набор текстов с заданиями в формате ОГЭ с детальным разбором стратегий выполнения',
  },
];

export default function MaterialsSection() {
  return (
    <div>
      {/* About section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                О себе
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Учитель английского языка с многолетним опытом работы в общеобразовательной школе. 
                  Специализируюсь на обучении учеников 5–11 классов, подготовке к ОГЭ и ЕГЭ.
                </p>
                <p>
                  На этом сайте я делюсь авторскими методическими разработками — конспектами уроков, 
                  рабочими листами, презентациями и тестами, которые помогут сделать обучение английскому 
                  языку интересным и эффективным.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-light text-gray-900">66+</p>
                  <p className="text-sm text-gray-500 mt-1">материалов</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-gray-900">5–11</p>
                  <p className="text-sm text-gray-500 mt-1">классы</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-gray-900">ОГЭ/ЕГЭ</p>
                  <p className="text-sm text-gray-500 mt-1">подготовка</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="https://cdn.poehali.dev/templates/creative-portfolio-ru/portrait.jpg"
                  alt="Кристина Михайловна"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-gray-900 px-6 py-4 text-white shadow-xl">
                <p className="text-sm font-medium">Учитель английского</p>
                <p className="text-xs text-white/60 mt-0.5">Пугасей К.М.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section id="materials" className="bg-gray-50 py-20">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900">Методические разработки</h2>
            <p className="mt-3 text-gray-500">Авторские материалы для уроков английского языка</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <Icon name={cat.icon} size={22} />
                </div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">{cat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cat.description}</p>
                <p className="mt-4 text-xs font-medium text-gray-400">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured materials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900">Избранные разработки</h2>
            <p className="mt-3 text-gray-500">Наиболее популярные и полные комплекты материалов</p>
          </div>

          <div className="space-y-4">
            {featured.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-gray-200 hover:shadow-sm sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex-shrink-0">
                  <span className="inline-block rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
                    {item.grade}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
                    <Icon name="Tag" size={14} />
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-8 md:px-16 text-center">
          <h2 className="text-3xl font-light mb-4">Связаться со мной</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Если у вас есть вопросы по материалам или предложения о сотрудничестве — напишите мне
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20"
            >
              <Icon name="Mail" size={16} />
              Написать на почту
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
