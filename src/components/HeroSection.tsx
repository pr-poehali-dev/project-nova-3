import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/41461925-bb81-48f6-a190-0d5d13409230/files/de0bee0f-8226-4f6e-b970-96e52dd26c35.jpg',
  'https://cdn.poehali.dev/projects/41461925-bb81-48f6-a190-0d5d13409230/files/9252ffae-4696-4b69-b560-b630c72e3b67.jpg',
  'https://cdn.poehali.dev/projects/41461925-bb81-48f6-a190-0d5d13409230/files/030b8a49-9810-4f33-bdab-40259c8ac720.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/41461925-bb81-48f6-a190-0d5d13409230/bucket/020ba617-8ffc-43e1-b52a-7a90166b1f39.jpg"
                  alt="Пугасей Кристина Михайловна"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-3">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Пугасей Кристина Михайловна
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Учитель английского языка · МАОУ СОШ №28
                </p>
                <p className="text-base text-white/60 max-w-md leading-relaxed">
                  Творческий и креативный педагог с 2010 года. Делюсь авторскими разработками для увлекательного изучения английского языка.
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    href="#materials"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    Смотреть разработки
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}