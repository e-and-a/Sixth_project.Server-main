// Подключаем модуль autoprefixer, который добавляет вендорные префиксы 
// для обеспечения кроссбраузерной совместимости CSS
const autoprefixer = require('autoprefixer');

// Подключаем модуль cssnano, который используется для минимизации CSS-файлов
const cssnano = require('cssnano');

// Экспортируем объект с настройками PostCSS
module.exports = {
  plugins: [
    // Добавляем плагин autoprefixer для автоматического добавления префиксов
    autoprefixer,

    // Добавляем плагин cssnano для минимизации CSS
    // Передаем ему настройки: 'preset: default' означает, что будут применены стандартные правила минимизации
    cssnano({ preset: 'default' })
  ]
};
