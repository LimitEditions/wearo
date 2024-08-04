const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 считаются localhost для IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

/**
 * Регистрация сервис-воркера
 * @param {Config} [config] - конфигурация
 */
export function register(config?: Config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // Конструктор URL доступен во всех браузерах, поддерживающих SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Сервис-воркер не будет работать, если PUBLIC_URL находится в другом origin
            // Это может произойти, если CDN используется для доставки активов
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                // Это работает на localhost. Давайте проверим, существует ли сервис-воркер или нет.
                checkValidServiceWorker(swUrl, config);

                // Добавьте дополнительный лог для localhost, указывая разработчикам
                // на документацию по service worker/PWA.
                navigator.serviceWorker.ready.then(() => {
                    console.log('Это веб-приложение обслуживается кешем первым сервис-воркером.');
                });
            } else {
                // Не localhost. Просто регистрируем сервис-воркер
                registerValidSW(swUrl, config);
            }
        });
    }
}

/**
 * Регистрация валидного сервис-воркера
 * @param {string} swUrl - URL сервис-воркера
 * @param {Config} [config] - конфигурация
 */
function registerValidSW(swUrl: string, config?: Config) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            console.log(
                                'Новое содержимое доступно и будет использовано после закрытия всех вкладок.'
                            );

                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        } else {
                            console.log('Содержимое закэшировано для оффлайн использования.');

                            if (config && config.onSuccess) {
                                config.onSuccess(registration);
                            }
                        }
                    }
                };
            };

            // Подписка пользователя на push-уведомления
            subscribeUserToPush(registration);
        })
        .catch((error) => {
            console.error('Ошибка во время регистрации сервис-воркера:', error);
        });
}

/**
 * Проверка валидности сервис-воркера
 * @param {string} swUrl - URL сервис-воркера
 * @param {Config} [config] - конфигурация
 */
function checkValidServiceWorker(swUrl: string, config?: Config) {
    // Проверка, может ли быть найден сервис-воркер. Если нет, перезагрузите страницу.
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
    })
        .then((response) => {
            // Убедитесь, что сервис-воркер существует, и что мы действительно получаем JS файл.
            const contentType = response.headers.get('content-type');
            if (
                response.status === 404 ||
                (contentType != null && contentType.indexOf('javascript') === -1)
            ) {
                // Сервис-воркер не найден. Вероятно, другое приложение. Перезагрузите страницу.
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                // Сервис-воркер найден. Продолжайте как обычно.
                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log('Не найдено интернет соединение. Приложение работает в оффлайн режиме.');
        });
}

/**
 * Функция для отписки от сервис-воркера
 */
export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}

// публичный VAPID ключ, сгененрированный в паре с приватным на сервере
const publicVapidKey = 'BG-d_Ln_C7s7I_MFQpHim75qy2Gx21RI9X03H1SVpayU7F53Esz9aGJQeNSIiPn9fqydD-J51J7CvSj2wwYwSAA';

/**
 * Функция для преобразования base64 строки в Uint8Array
 * @param {string} base64String - base64 строка
 * @returns {Uint8Array} - массив байтов
 */
function urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

/**
 * Функция для подписки пользователя на push-уведомления
 * @param {ServiceWorkerRegistration} registration - регистрация сервис-воркера
 */
function subscribeUserToPush(registration: ServiceWorkerRegistration) {
    const convertedVapidKey = urlBase64ToUint8Array(publicVapidKey);

    registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey
    }).then((subscription: PushSubscription) => {
        console.log('Подписка на push-уведомления выполнена:', subscription);

        // Отправка подписки на сервер
        fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }).catch((err: Error) => console.error('Ошибка подписки на push-уведомления:', err));
}
