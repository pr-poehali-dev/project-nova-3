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
    grade: 'Английский язык',
    title: 'Оценка знаний английского языка',
    type: 'Методический материал',
    description: 'Элементы оценки имели место, но в большей степени высказывание содержало информацию и отражало конкретные факты. Учащийся показал знание большого запаса лексики.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Оценивание и тестирование в преподавании иностранного языка',
    type: 'Методический материал',
    description: 'Слово тест в английском языке обозначает «испытание, проба, эксперимент, проверка». При такой полисемии существует терминологическая неточность.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Обобщение правил чтения английского языка',
    type: 'Методический материал',
    description: 'Изучив русский алфавит, мы сможем легко прочесть любые тексты. А вот для правильного чтения на английском языке придется приложить больше усилий.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'ЕГЭ / ГИА',
    title: 'Правила пунктуации английского языка',
    type: 'Подготовка к ЕГЭ',
    description: 'Материал для подготовки к ЕГЭ (ГИА) по английскому языку на тему: «Правила пунктуации английского языка».',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: '9–11 класс',
    title: 'Правила написания письма на английском языке. ЕГЭ',
    type: 'Подготовка к ЕГЭ',
    description: 'Данная разработка составлена для учащихся старшей школы (9–11 классы).',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: '10–11 класс',
    title: 'Подготовка к ЕГЭ по английскому языку',
    type: 'Подготовка к ЕГЭ',
    description: 'Предложенный модуль составлен для учащихся старшей школы (10–11 классы) с учётом программы, возраста и индивидуальных особенностей.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: '9–10 класс',
    title: 'Косвенная речь. Закрепление материала',
    type: 'Конспект урока',
    description: 'Данный урок будет полезен учителям английского языка. Содержит ход объяснения нового материала по косвенной речи для 9 и 10 класса.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: '6 класс',
    title: 'Чтение и закрепление по книге «Алиса в стране чудес», глава 8',
    type: 'Рабочий лист',
    description: 'Пособие для учащихся 6 класса к учебнику «Spotlight 6». Работа с 8 главой, чтение и упражнения на закрепление прочитанного.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'ЕГЭ',
    title: 'Подготовка устной части «Монолог». ЕГЭ. Английский язык',
    type: 'Подготовка к ЕГЭ',
    description: 'Обучение речевой деятельности, которое напрямую связано с умением применять полученные знания на практике. Задания устной части ЕГЭ.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: '7 класс',
    title: 'Подготовка к контрольной работе',
    type: 'Контрольная работа',
    description: 'Разработка проверяет сформированность всех видов универсальных учебных действий, знания по изученным лексическим и грамматическим темам.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Как вызвать интерес к иностранному языку',
    type: 'Методический материал',
    description: 'Самые простые способы стимулирования интереса связаны с использованием телевизора и компьютерных программ. Людям нравится смотреть телевизор.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Способы и приёмы запоминания английских слов',
    type: 'Методический материал',
    description: 'При изучении иностранного языка очень важно постоянно пополнять свой лексический запас – запоминать новые и новые слова по английскому языку.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Универсальные учебные действия (УУД) — формирование и развитие на уроке английского языка',
    type: 'Методический материал',
    description: 'Формирование и развитие универсальных учебных действий на уроке английского языка.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Оценивание и тестирование в преподавании иностранного языка',
    type: 'Методический материал',
    description: 'В современном образовании тест является одним из компонентов обучения.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Методы и приёмы коммуникативных навыков на уроках английского языка',
    type: 'Методический материал',
    description: 'Общение, или иными словами коммуникация, его особенности и механизмы являются предметом изучения многих наук.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Презентация по ФГОС: коммуникативные навыки на уроках английского языка',
    type: 'Презентация',
    description: 'Методы и приёмы формирования коммуникативных навыков на уроках английского языка.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Колледж',
    title: 'Конспект бинарного урока',
    type: 'Конспект урока',
    description: 'Конспект бинарного урока для преподавателей колледжа. Урок у студентов, обучающихся на электриков, на английском языке совместно с преподавателем.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Презентация «Is it easy to be young?»',
    type: 'Презентация',
    description: 'Совершенствование навыков говорения, чтения, аудирования. Практика учащихся в нахождении соответствий, работа в парах.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: '5 класс',
    title: 'План воспитательной работы. 5 класс',
    type: 'Планирование',
    description: 'Характерной особенностью возраста является активное формирование коллективных групп. Социально-ориентированные ученики очень зависимы от мнения группы.',
    url: 'https://multiurok.ru/english-cool/files/',
  },
  {
    grade: 'Английский язык',
    title: 'Общение на английском',
    type: 'Методический материал',
    description: 'Книги в помощь учителю английского языка. Oxford University Press.',
    url: 'https://multiurok.ru/english-cool/files/',
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
                  Учитель английского языка МАОУ СОШ №28. Работаю с 2010 года — за это время 
                  накопила большой опыт и выработала собственный творческий подход к преподаванию.
                </p>
                <p>
                  На уроках использую разнообразные методы и приёмы, чтобы каждый ученик мог 
                  увлечься языком. Постоянно делюсь опытом с коллегами и публикую только самые 
                  новые и интересные материалы — чтобы другим педагогам было проще готовиться к урокам.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-light text-gray-900">15+</p>
                  <p className="text-sm text-gray-500 mt-1">лет опыта</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-gray-900">СОШ №28</p>
                  <p className="text-sm text-gray-500 mt-1">МАОУ</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-gray-900">с 2010</p>
                  <p className="text-sm text-gray-500 mt-1">год начала</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="https://cdn.poehali.dev/projects/41461925-bb81-48f6-a190-0d5d13409230/bucket/020ba617-8ffc-43e1-b52a-7a90166b1f39.jpg"
                  alt="Кристина Михайловна"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-gray-900 px-6 py-4 text-white shadow-xl">
                <p className="text-sm font-medium">Творческий учитель</p>
                <p className="text-xs text-white/60 mt-0.5">МАОУ СОШ №28</p>
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
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-gray-200 hover:shadow-sm sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex-shrink-0">
                  <span className="inline-block rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
                    {item.grade}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
                    <Icon name="Tag" size={14} />
                    {item.type}
                  </span>
                  <Icon name="ExternalLink" size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                </div>
              </a>
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