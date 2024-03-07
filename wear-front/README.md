# Структура React-компонента
### Базовая структура
```
import React, { FC } from 'react';
import getStyles from './utils/getStyles';
import { BlockStyle } from './types/interfaces/Styles';

const headerStyles: BlockStyle = {
  background: 'bg-gray-500',
  spacing: 'p-3'
}

// типизация пропсов
interface ComponentProps {}

export const Component: FC<ComponentProps> = () => {
  // Все UseState и создание других переменных

  // useEffect

  // Обработчики событий

  return (
    <header className={`${getStyles(headerStyles)}`}>
      <h1 className={`${getStyles(hStyle)}`}>Hello</h1>
    </header>
  );
}
```

### Импорты
* В каждом компоненте должен быть импорт функции для преобразования объекта со стилями в строку:
> import getStyles from './utils/getStyles';
* В каждом компоненте должен быть импорт interface объекта стилей:
> import { BlockStyle } from './types/interfaces/Styles';

### Стилизация
Если нужно стилизовать html-элемент данного компонента, то сразу после импортов создается объект с типом BlockStyle. Название объекта в формате "tagStyles".
Стилизация происходит с использованием готовых классов tailwind. Все классы можно посмотреть [здесь](https://nerdcave.com/tailwind-cheat-sheet).
BlockStyle имеет следующие необязательные свойства:
* blockSize - размеры блока (ширина, высота)
* container - flex/grid сетки и их дополнительные параметры (justify-content, align-items...)
* spacing - внутренние и внешние отступы (margin, padding)
* border - стилизация border (ширина, радиус...)
* background - все background-стили (size, color, image, position...)
* text - стилизация текста (размер, ширина, цвета, позиционирование...)
* transitionsAnimation - transition-стили и анимации
* hover - эффекты при наведении курсора
* media - адаптивные стили под разные брейкпоинты tailwind (sm, md, lg, xl, 2xl)

Если требуется стилизовать несколько html-элементов, то создается несколько объектов с типом BlockStyle на каждый элемент. Пример:
```
const headerStyles: BlockStyle = {
  background: 'bg-gray-500',
  blockSize: 'w-full',
  spacing: 'p-3'
}

const hStyle: BlockStyle = {
  text: 'text-white text-center',
  media: 'sm:text-sm md:text-2xl'
}
```

Далее эти стили можно подставаить в className соответствующего тега, используя функцию getStyles:
```
<h1 className={`${getStyles(hStyles)}`}>Hello</h1>
```
### Содержание компонента
Компоненты используем функциональные. Для быстрого создания компонента можно использовать сниппет *rafc*. Далее наполняем компонент в следующем порядке:
1. Все необходиые useState
2. Другие переменные, для которых не требуется состояние
3. Используем другие хуки
4. Обработчики событий (onChange, onClick...)
5. return - семантическая jsx-разметка.