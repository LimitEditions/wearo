/* eslint-disable no-restricted-globals */
/* global workbox */

// Подключаем Workbox через CDN
// eslint-disable-next-line no-undef
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.core.clientsClaim();

// Обработчик для событий push-уведомлений
self.addEventListener('push', (event) => {
    if (!(self.Notification && self.Notification.permission === "granted")) {
        return;
    }

    // Проверяем, есть ли данные в событии
    if (event.data) {
        console.log('Данные:', event.data); // Данные json() падает, а text() выдает строку, похожую на объект, но нужны регулярки, чтоб изнее достать данные корректно

        // Получаем текстовые данные из события
        const msgData = event.data.text(); // Это возвращает строку, а не промис

        console.log('Полученные данные:', msgData); // Логируем текстовые данные

        event.waitUntil(
            self.registration.showNotification('title', {
                body: msgData
            })
        );
    } else {
        console.log('Нет данных в событии push');
    };
});

// Обработчик для кликов по уведомлениям  
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        self.clients.openWindow("https://developer.mozilla.org/en-US/docs/Web/API/PushEvent")
    );
});