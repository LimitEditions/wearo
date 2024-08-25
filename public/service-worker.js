/* eslint-disable no-restricted-globals */
/* global workbox */

// Подключаем Workbox через CDN
// eslint-disable-next-line no-undef
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.core.clientsClaim();

// Обработчик для событий push-уведомлений
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

// Обработчик для кликов по уведомлениям  
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.openWindow(event.notification.data.url)
  );
});