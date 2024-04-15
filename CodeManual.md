# Правила написания кода для React-компонентов и TypeScript интерфейсов
## TypeScript
1. **Использование наследования для интерфейсов.**
Перед созданием нового интерфейса стоит проверить, существуют ли базовые интерфейсы, которые можно расширить, чтобы избежать дублирования кода.

Пример:
```typescript
// Неправильно
export interface IButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    type?: 'submit' | 'button';
}

// Правильно
export interface IButtonProps extends React ButtonHTMLAttributes<HTMLButtonElement> {
    showButton?: boolean;
}
```
2. **Избежание излишней декомпозиции интерфейсов.**
Если интерфейс используется только в одном месте и содержит мало свойств, его можно объявить локально.

Пример:
```typescript
// Неправильно
export interface IAuthWrapperProps {
    children: React.ReactNode;
}

// Правильно
export const AuthWrapper = ({ children }: { children: React.ReactNode }) => (<div>{children}</div>);
```
3. **Объединение похожих интерфейсов.**
Создание обобщённого интерфейса с использованием дженериков для похожих интерфейсов.

Пример:
```typescript
// Неправильно
export interface ILoginFormProps {
    user: AuthModel;
    onSubmit: () => void;
}
export interface IRegistrationFormProps {
    user: CreateUserModel;
    onSubmit: () => void;
}

// Правильно
interface IFormProps<TUser> {
    user: TUser;
    onSubmit: () => void;
}

export type ILoginFormProps = IFormProps<AuthModel>;
export type IRegistrationFormProps = IFormProps<CreateUserModel>;
```
4. **Правильное использование опциональных и обязательных параметров.**
Определение, какие свойства могут быть опциональными. Если от конкретного свойства зависит отрисовка объекта, это свойство по определению не может быть опциональным.

Пример:
```typescript
// Неправильно
export interface IButtonProps {
    showButton?: boolean;
}

// Правильно
export interface IButtonProps {
    showButton: boolean;
}
```
5. **Понятное именование и структурирование интерфейсов.**
Использование по возможности ясных и консистентных имен для интерфейсов и типов.

Пример:
```typescript
// Неправильно
export interface IUserDetails {
    name: string;
    age: number;
}

// Правильно
export interface IUserProfile {
    fullName: string;
    age: number;
}
```

## Utils
1. **Оптимизация функций валидации.**
Избежание дублирования кода, необходимо создавать функции более универсальными и читаемыми.

Пример:
```typescript
// Неправильно
export function validateWord(word: string | undefined, target: TargetValidationType): boolean {
    if (word && word.length >= 4) {
        switch(target) {
            case 'username':
            case 'userName':
                if (/^[A-Za-z0-9]+$/.test(word)) {
                    return true;
                };
                break;
            case 'password':
                if (/^[A-Za-z0-9!@#$%^&*]+$/.test(word)) {
                    return true;
                };
                break;
        };
    };
    return false;
};

// Правильно
export function validate(word: string, target: string | null | undefined): boolean {
    if (target === 'password') {
        return /^[A-Za-z0-9!@#$%^&*]+$/.test(word);
    } else {
        return /^[A-Za-z0-9]+$/.test(word);
    };
};
```

2. **Использование значений по умолчанию и явных проверок.**
Замена проверок на undefined и null с использованием значений по умолчанию или явных проверок типов, упрощение и уменьшение количества условий в функциях, чтобы упростить логику и сделать код более надежным.  

Пример:
```typescript
// Неправильно
if (word && word.length >= 4) {...

// Правильно
if (word?.length >= 4) {...
```

3. **Ясное разделение логики.**
Разделение логики валидации и вывода сообщений, к примеру, для улучшения читаемости и возможности повторного использования кода.

## Components
1. **Принцип единой ответственности для компонентов.**

Правило: Каждый компонент должен быть ответственен только за одну функцию.
Используем useState и useRef непосредственно в компонентах, где они используются, чтобы избежать лишних пропсов и упростить понимание логики компонента.

Пояснение: Это помогает сделать компоненты более управляемыми, тестируемыми и переиспользуемыми. Компоненты, которые выполняют слишком много задач или управляют слишком многими аспектами приложения, становятся трудными для понимания и поддержки.

Пример:
```typescript
// Хорошо: Компонент только отображает список элементов
const ItemList = ({ items }) => (
  <ul>
    {items.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
);

// Плохо: Компонент управляет загрузкой данных и их отображением
const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
};
```

2. **Пропс как способ передачи данных между компонентами.**

Правило: Использование пропсов для передачи данных и обработчиков событий от родительских компонентов к дочерним.

Пояснение: Пропсы являются основным механизмом для передачи данных и взаимодействия между компонентами в React. Это позволяет создавать чистые, не зависящие от глобального состояния компоненты, которые легче тестировать и поддерживать.

Пример:
```typescript
// Родительский компонент
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return <ChildComponent count={count} onIncrement={increment} />;
};

// Дочерний компонент
const ChildComponent = ({ count, onIncrement }) => (
  <div>
    <p>{count}</p>
    <button onClick={onIncrement}>Increment</button>
  </div>
);
```

3. **Использование контекста и аутлетов для передачи данных через промежуточные компоненты.**

Правило: Использование React Context или React Router's Outlet для передачи данных через несколько уровней вложенных компонентов, избегая "prop drilling" (бесконечный проброс пропсов через множество уровней).

Пояснение: Контекст позволяет предоставить глобальные данные всему дереву компонентов или определённой его части, избегая необходимости передавать пропсы на каждом уровне вложенности. Аутлеты (React Router v6) позволяют родительским маршрутам определять местоположение рендера для дочерних маршрутов.

Пример с контекстом:
```typescript
// Создание контекста
const UserContext = React.createContext();

// Родительский компонент, который предоставляет данные
const App = () => {
  const user = { name: 'Alice', age: 25 };

  return (
    <UserContext.Provider value={user}>
      <Component />
    </UserContext.Provider>
  );
};

// Дочерний компонент, который использует данные
const Component = () => {
  const user = useContext(UserContext);

  return <div>Hello, {user.name}!</div>;
};
```
Пример с аутлетом (React Router v6):
```typescript
// Родительский маршрут, который определяет место для рендера дочерних маршрутов
<Route path="dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} />
  <Route path="settings" element={<DashboardSettings />} />
</Route>

// Компонент DashboardLayout, в котором рендерятся дочерние маршруты
const DashboardLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet context={someContext}/>  {/* Место для рендера дочерних маршрутов */}
    </div>
  );
};
```

4. **Использование колбэков для передачи информации от дочерних к родительским компонентам.**

Правило: Для передачи данных или уведомлений от дочерних компонентов к родительским используем функции обратного вызова (колбэки).

Пояснение: Колбэки позволяют дочерним компонентам общаться с родительскими, передавая данные или сигналы о событиях (например, кликах, изменениях данных), что делает компоненты менее зависимыми от глобального состояния и более гибкими в использовании.

Пример:
```typescript
// Родительский компонент
const ParentComponent = () => {
  const handleChildClick = (data) => {
    console.log('Data received from child:', data);
  };

  return <ChildComponent onClick={handleChildClick} />;
};

// Дочерний компонент
const ChildComponent = ({ onClick }) => (
  <button onClick={() => onClick('Child data')}>Click me</button>
);
```

5. **Избежание избыточного количества пропсов.**

Необходимо стараться не перегружать компоненты большим количеством пропсов. Это ухудшает читаемость и поддержку компонента. Разделяем компонент на более мелкие, если он начинает принимать слишком много различных пропсов.

Пример плохой практики:
```typescript
const Component = ({ prop1, prop2, prop3, prop4, prop5, prop6, ... }) => {
  // сложная логика с использованием множества пропсов
}
```
Лучшая практика:
```typescript
const Component = ({ mainProp, secondaryProp }) => {
  // более упрощенная логика с ограниченным количеством пропсов
}
```

6. **Локализация состояний.**

Размещаем хуки состояния useState непосредственно в тех компонентах, где они используются, вместо передачи состояний и функций их изменения через пропсы от родительских компонентов. Это улучшает изоляцию и переиспользуемость компонентов, делая их менее зависимыми от внешнего контекста.

Пример нежелательной практики:
```typescript
const ParentComponent = () => {
  const [value, setValue] = useState('');

  return <ChildComponent value={value} setValue={setValue} />;
}

const ChildComponent = ({ value, setValue }) => {
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
```
Рекомендуемая практика:
```typescript
const ParentComponent = () => {
  return <ChildComponent />;
}

const ChildComponent = () => {
  const [value, setValue] = useState('');

  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
```

7. **Использование условных рендеров.**

Избежание включения логики рендеринга в теле компонента без непосредственной необходимости. Вместо { showButton && \<button>...\</button> } используем предварительные условия для возврата null в начале компонента, если компонент не должен рендериться.

Пример:
```typescript
if (!showButton) return null;
return <button>{children}</button>;
```

8. **Оптимизация props компонентов.**

Избежание передачи избыточных props, которые могут быть заданы по умолчанию или не требуются для конкретной реализации компонента. Это улучшит читаемость и уменьшит зависимости компонента.

Пример:
```typescript
<Input name="username" value={username} onChange={handleChange} />
```

9. **Динамическое создание компонентов.**

Используем массивы данных для создания повторяющихся компонентов. Это упрощает код и делает его более удобным для внесения изменений.

Пример:
```typescript
{inputs.map(input => (
  <label key={input.name}>
    <Input {...input} />
  </label>
))}
```

10. **Параметризация компонентов.**

Для повторяющегося использования одного и того же компонента с разными параметрами, передаем параметры компонента через объект или массив, чтобы уменьшить количество кода и упростить его поддержку.

Пример:
```typescript
const inputFields = [
  { name: 'username', placeholder: 'Введите логин', value: username },
  { name: 'password', type: 'password', placeholder: 'Введите пароль', value: password },
];
inputFields.map(field => <Input {...field} />);
```

11. **Упрощение передачи props.**

Используем оператор распространения (...props) для передачи свойств в компонент, чтобы избежать явного перечисления каждого свойства и упростить масштабирование компонента.

Пример:
```typescript
<button {...props}>{children}</button>
```

12. **Абстракция и высшего порядка компоненты (HOCs).**

Используем компоненты высшего порядка для обертывания логики, общей для многих компонентов, таким образом изолируем и переиспользуем код управления состоянием и эффектами.

Пример:
```typescript
const withAuthLogic = ({ Component, type }) => {
  // Общая логика аутентификации
};
```

13. **Оптимизация рендеринга.**

Используем React.memo, useMemo, и useCallback для предотвращения ненужных ререндеров и улучшения производительности компонентов.

Пример:
```typescript
const HocComponent = React.memo(({ ...props }) => {
  // Компонент с оптимизированным ререндерингом
});
```

14. **DRY (Don't Repeat Yourself).**

Стремимся к минимизации повторения кода. Используем функции, компоненты высшего порядка, кастомные хуки, или утилиты для общих задач, чтобы избежать дублирования логики в разных частях приложения.

Пример:
```typescript
// Использование функции для валидации, применяемой в различных компонентах
export function validateField(value, type) {
  // Логика валидации
}
```

15. **Интеллигентное написание кода.**

При написании кода учитываем будущее его использование и возможные места расширения функционала. Это помогает предотвратить потребность в кардинальных изменениях и рефакторинге при добавлении новых фич.

Пример:
```typescript
// Разработка функции с учетом возможных расширений
export const fetchData = async (url, params = {}, method = 'GET') => {
  // Универсальная функция для отправки запросов
}
```

16. **Комментарии и документация.**

Пишим понятные и информативные комментарии к сложным участкам кода и к общим компонентам, особенно если код содержит неочевидные решения или работает с внешними API, которые могут иметь особенности в использовании.

Пример:
```typescript
// Hook useAuth проверяет авторизацию пользователя и управляет доступом к защищенным маршрутам
export const useAuth = () => {
  // Определение текущего состояния авторизации
}
```

### *Happy coding!!!*