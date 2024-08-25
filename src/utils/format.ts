/**
 * Функция для преобразования base64 строки в Uint8Array
 * @param {string} base64String - base64 строка
 * @returns {Uint8Array} - массив байтов
 */
export function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};


/**
* Функция для преобразования ArrayBuffer в Base64 строку
* @param {ArrayBuffer} buffer - буфер данных (массив байтов)
* @returns {string} - Base64 строка
*/
export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};
