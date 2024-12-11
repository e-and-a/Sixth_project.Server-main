// Определяем массив presets, который содержит настройки Babel
const presets = [
  [
    // Подключаем пресет @babel/preset-env, который позволяет использовать современные возможности JavaScript
    // и автоматически преобразует их для поддержки в указанных версиях браузеров
    '@babel/preset-env', 
    {
      // Указываем браузеры и их минимальные версии, которые должны поддерживаться
      targets: {
        edge: '17',        // Microsoft Edge версии 17
        ie: '11',          // Internet Explorer версии 11
        firefox: '50',     // Mozilla Firefox версии 50
        chrome: '64',      // Google Chrome версии 64
        safari: '11.1'     // Safari версии 11.1
      },
      // Опция useBuiltIns указывает, как подключать полифиллы:
      // "entry" означает, что Babel добавит полифиллы, необходимые для поддерживаемых браузеров,
      // при условии, что в точке входа проекта явно импортирован core-js
      useBuiltIns: "entry" 
    }
  ]
];

// Экспортируем объект с настройками Babel для использования в других частях проекта
module.exports = { presets };
