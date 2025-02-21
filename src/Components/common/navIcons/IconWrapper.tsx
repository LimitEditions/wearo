import { lazy, LazyExoticComponent, Suspense, useState } from "react";
import { NavType } from "../../../types/NavContentType";

export const IconWrapper = ({ navIcon, navText }: NavType) => {
  // Состояние для отслеживания наведения курсора
  const [isHovered, setIsHovered] = useState(false);

  // Ленивая загрузка динамической иконки (не то чтобы она здесь очень нужна, но производительность повысит)
  const IconDynamic = lazy(() =>
    import(`./icons/${navIcon}`).then(module => {
      const Component = module[navIcon]; // Доступ к экспорту по имени
      return { default: Component }; // Преобразуем в дефолтный экспорт, так как lazy работает только с ним
    })
  ) as LazyExoticComponent<React.ComponentType<{ isHovered: boolean }>>;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center justify-between space-y-2 opacity-80"
    >
      {/* Suspense используется для обработки асинхронной загрузки динамического компонента, при его отсутствии словим бесконечный ререндеринг */}
      <Suspense fallback={null}> {/* fallback определяет, что показывать во время загрузки */}
        <IconDynamic
          isHovered={isHovered} // Передаем состояние наведения в svg
        />
      </Suspense>

      {/* Текст под иконкой с динамическим цветом */}
      <div 
        className={`text-xs ${isHovered ? 'text-custom-blue' : 'text-normal-gray'}`}
      >
        {navText}
      </div>
    </div>
  );
};