/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

// Предварительно кэшируем все ресурсы, сгенерированные вашим процессом сборки.
// Их URL-адреса внедряются в переменную manifest ниже.
// Эта переменная должна присутствовать в файле вашего service worker, 
// даже если вы решите не использовать предварительное кэширование. 
// Подробнее: https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Настройка маршрутизации в стиле App Shell, чтобы все запросы навигации
// обрабатывались вашим index.html shell. Подробнее: 
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');

console.log('worker', process.env.PUBLIC_URL);
registerRoute(
    // Возвращает false для исключения запросов, которые не должны обрабатываться index.html.
    ({ request, url }: { request: Request; url: URL }) => {
        // Пропустить, если это не навигационный запрос.
        if (request.mode !== 'navigate') {
            return false;
        }

        // Пропустить, если URL начинается с /_.
        if (url.pathname.startsWith('/_')) {
            return false;
        }

        // Пропустить, если URL содержит расширение файла.
        if (url.pathname.match(fileExtensionRegexp)) {
            return false;
        }

        // Вернуть true для обработки запроса с помощью обработчика.
        return true;
    },
    createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// Регистрация стратегии для кэширования API запросов
registerRoute(
    // Регулярное выражение для всех запросов к API, за исключением api/Auth
    ({ url }) => url.pathname.startsWith('/api/') && !url.pathname.startsWith('/api/Auth'),
    // Использование стратегии "Устаревший, пока перепроверяется"
    new StaleWhileRevalidate({
        cacheName: 'lru-cache',
        plugins: [
            // Плагин для кэширования ответов со статусом 200
            new CacheableResponsePlugin({
                statuses: [200],
            }),
            // Плагин для управления сроком жизни кэшированных элементов
            new ExpirationPlugin({
                maxEntries: 100,
            }),
        ],
    })
);

// Регистрация стратегии для кэширования изображений
registerRoute(
    // Регулярное выражение для всех запросов к изображениям
    ({ request }) => request.destination === 'image',
    // Использование стратегии "Устаревший, пока перепроверяется" для изображений
    new StaleWhileRevalidate({
        cacheName: 'image-cache',
        plugins: [
            // Плагин для кэширования ответов со статусом 200
            new CacheableResponsePlugin({
                statuses: [200],
            }),
            // Плагин для управления сроком жизни кэшированных элементов
            new ExpirationPlugin({
                maxEntries: 50,
            }),
        ],
    })
);

// // Комментированная регистрация стратегии для кэширования изображений png
// // В данном случае она не требуется, так как предыдущая регистрация 
// // уже охватывает все изображения, включая png.
// // Если нужны особые условия для png изображений, можно раскомментировать и настроить.
// registerRoute(
//   // Регулярное выражение для всех запросов к изображениям png
//   ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
//   // Использование стратегии "Устаревший, пока перепроверяется" для png
//   new StaleWhileRevalidate({
//     cacheName: 'images',
//     plugins: [
//       // Плагин для управления сроком жизни кэшированных элементов
//       new ExpirationPlugin({ maxEntries: 50 }),
//     ],
//   })
// );

// Обработка сообщения для принудительного обновления service worker
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

/**
 * Обработчик для событий push-уведомлений
 */
self.addEventListener('push', event => {
    console.log('Push-уведомление получено:', event);

    const data = event.data?.json();

    const options = {
        body: data.body,
        icon: data.icon,
        badge: data.badge,
        data: {
            url: data.url
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

/**
 * Обработчик для кликов по уведомлениям
 */
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        self.clients.openWindow(event.notification.data.url)
    );
});
