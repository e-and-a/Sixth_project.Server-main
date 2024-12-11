// Экспортируемый класс Api для работы с сервером
export class Api {
  /**
   * Конструктор класса Api.
   * @param {Object} options - опции для работы с API.
   * @param {string} options.serverURL - базовый URL сервера.
   * @param {Object} options.headers - заголовки для запросов.
   */
  constructor(options) {
    this._headers = options.headers; // Сохраняем заголовки запросов
    this._serverURL = options.serverURL; // Сохраняем URL сервера
    /**
     * Метод для обработки ответа от сервера.
     * @param {Response} res - ответ от сервера.
     * @returns {Promise<JSON|Error>} - возвращает JSON-ответ или ошибку.
     */
    this._handlePromiseReturn = ((res) => {
      if (res.ok) { // Если ответ успешный, возвращаем JSON
        return res.json();
      }
      // Если ответ не успешный, возвращаем Promise с текстом ошибки
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  /** ================= Методы работы с данными пользователя ================= */

  /**
   * Получает данные пользователя с сервера.
   * @returns {Promise<Response>} - объект с данными пользователя или ошибка.
   */
  getUserInfo() {
    return fetch(`${this._serverURL}/users/me`, {
      headers: this._headers // Передаем заголовки в запрос
    })
      .then((res) => this._handlePromiseReturn(res)); // Обрабатываем ответ
  }

  /**
   * Отправляет данные пользователя на сервер.
   * @param {Object} data - объект с полями name и about.
   * @returns {Promise<Response>} - объект с обновленными данными или ошибка.
   */
  sendUserInfo(data) {
    return fetch(`${this._serverURL}/users/me`, {
      method: 'PATCH', // Используем метод PATCH для обновления данных
      headers: this._headers, // Передаем заголовки
      body: JSON.stringify({ // Преобразуем объект с данными в строку JSON
        name: data.name, // Имя пользователя
        about: data.about // Описание пользователя
      })
    })
      .then((res) => this._handlePromiseReturn(res)); // Обрабатываем ответ
  }

  /**
   * Обновляет аватар пользователя на сервере.
   * @param {string} avatar - URL аватара.
   * @returns {Promise<Response>} - объект с обновленным аватаром или ошибка.
   */
  updateAvatar(avatar) {
    return fetch(`${this._serverURL}/users/me/avatar`, {
      method: 'PATCH', // Используем метод PATCH для обновления аватара
      headers: this._headers, // Передаем заголовки
      body: JSON.stringify({ avatar: avatar }) // Преобразуем объект с аватаром в JSON
    })
      .then((res) => this._handlePromiseReturn(res)); // Обрабатываем ответ
  }

  /** ================= Методы работы с карточками ================= */

  /**
   * Получает список карточек с сервера.
   * @returns {Promise<Response>} - объект с карточками или ошибка.
   */
  getCards() {
    return fetch(`${this._serverURL}/cards`, {
      headers: this._headers // Передаем заголовки в запрос
    })
      .then((res) => this._handlePromiseReturn(res)); // Обрабатываем ответ
  }

  /**
   * Отправляет данные новой карточки на сервер.
   * @param {Object} data - объект с полями name и link.
   * @returns {Promise<Response>} - объект с новой карточкой или ошибка.
   */
  sendCard(data) {
    return fetch(`${this._serverURL}/cards`, {
      method: 'POST', // Используем метод POST для создания новой карточки
      headers: this._headers, // Передаем заголовки
      body: JSON.stringify({ // Преобразуем объект с данными в JSON
        name: data.name, // Название карточки
        link: data.link // Ссылка на изображение
      })
    })
      .then((res) => this._handlePromiseReturn(res)); // Обрабатываем ответ
  }

  /**
   * Удаляет карточку с сервера.
   * @param {string} cardID - идентификатор карточки.
   * @returns {Promise<Response>} - подтверждение удаления или ошибка.
   */
  deleteCard(cardID) {
    return fetch(`${this._serverURL}/cards/${cardID}`, {
      method: 'DELETE', // Используем метод DELETE для удаления
      headers: this._headers // Передаем заголовки
    });
  }

  /**
   * Ставит лайк на карточку.
   * @param {string} cardID - идентификатор карточки.
   * @returns {Promise<Response>} - обновленные данные карточки или ошибка.
   */
  setLike(cardID) {
    return fetch(`${this._serverURL}/cards/${cardID}/likes`, {
      method: 'PUT', // Используем метод PUT для установки лайка
      headers: this._headers // Передаем заголовки
    })
      .then((res) => this._handlePromiseReturn(res)); // Обрабатываем ответ
  }

  /**
   * Убирает лайк с карточки.
   * @param {string} cardID - идентификатор карточки.
   * @returns {Promise<Response>} - обновленные данные карточки или ошибка.
   */
  deleteLike(cardID) {
    return fetch(`${this._serverURL}/cards/${cardID}/likes`, {
      method: 'DELETE', // Используем метод DELETE для удаления лайка
      headers: this._headers // Передаем заголовки
    })
      .then((res) => this._handlePromiseReturn(res)); // Обрабатываем ответ
  }
}
