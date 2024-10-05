import { retrieve } from "./utils/encryption";
import { arrayBufferToBase64, urlBase64ToUint8Array } from "./utils/format";


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
    // if (process.env.NODE_ENV === 'development' && 'serviceWorker' in navigator) {
        // Конструктор URL доступен во всех браузерах, поддерживающих SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Сервис-воркер не будет работать, если PUBLIC_URL находится в другом origin
            // Это может произойти, если CDN используется для доставки активов
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = '/service-worker.js';
    
            // Проверка на наличие уже зарегистрированного Service Worker
            navigator.serviceWorker.getRegistration().then((registration) => {
                if (registration) {
                    console.log('Service Worker уже зарегистрирован:', registration);
                    checkAndSubscribeUserToPush(registration)
                } else {
                    // Если Service Worker не зарегистрирован, регистрируем новый
                    if (isLocalhost) {
                        checkValidServiceWorker(swUrl, config);
    
                        navigator.serviceWorker.ready.then(() => {
                            console.log('Это веб-приложение обслуживается кешем первым сервис-воркером.');
                        });
                    } else {
                        console.log(swUrl)
                        registerValidSW(swUrl, config);
                    }
                }
            }).catch((error) => {
                console.error('Ошибка при проверке регистрации Service Worker:', error);
            });
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

            // Проверяем и подписываем пользователя на push-уведомления, если он еще не подписан
            checkAndSubscribeUserToPush(registration);
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
 * Функция для подписки пользователя на push-уведомления
 * @param {ServiceWorkerRegistration} registration - регистрация сервис-воркера
 */
function subscribeUserToPush(registration: ServiceWorkerRegistration) {
    const convertedVapidKey = urlBase64ToUint8Array(publicVapidKey);
    const userId = retrieve('guid');
    if(!userId) return console.error('Залогиньтесь для начала');

    registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey
    }).then((subscription: PushSubscription) => {
        console.log('Подписка на push-уведомления выполнена (на клиенте):', subscription);
        
        const pushData = {
            "userGuid": userId,
            "pushAuth": arrayBufferToBase64(subscription.getKey('auth') as Uint8Array),
            "pushEndpoint": subscription.endpoint,
            "pushP256DH": arrayBufferToBase64(subscription.getKey('p256dh') as Uint8Array)
        };

        // Отправка подписки на сервер
        fetch('/api/Push', {
            method: 'POST',
            body: JSON.stringify(pushData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${retrieve('token')}`
            }
        })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error('Ошибка сети: ' + response.statusText);
            }
            return response.status;
        })
        .then(data => {
            console.log('Успешно отправлено:', data);
        })
        .catch(err => {
            registration.pushManager.getSubscription().then(existingSubscription => {
                if(existingSubscription) existingSubscription.unsubscribe().then(() => {
                    console.log('Подписка на клиенте отменена из-за ошибки отправки данных на сервер:', err)
                });
            });
        });
    }).catch((err: Error) => console.error('Ошибка подписки на push-уведомления (на клиенте):', err));
}

// Функция для проверки текущей подписки и подписки пользователя на push-уведомления
function checkAndSubscribeUserToPush(registration: ServiceWorkerRegistration) {
    registration.pushManager.getSubscription().then((existingSubscription) => {
        if (existingSubscription === null) {
            // Пользователь еще не подписан, подписываем его
            console.log('Пользователь еще не подписан на push-уведомления. Подписываем...');
            subscribeUserToPush(registration);
        } else {
            // Пользователь уже подписан
            console.log('Пользователь уже подписан на push-уведомления:', existingSubscription);
            // existingSubscription.unsubscribe();
        };
    }).catch((err) => {
        console.error('Ошибка проверки подписки на push-уведомления:', err);
    });
};
