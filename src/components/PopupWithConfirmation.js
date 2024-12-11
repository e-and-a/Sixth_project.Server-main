// Импорт базового класса Popup
import { Popup } from "./Popup.js";

// Экспортируемый класс PopupWithConfirmation наследует функционал Popup
export class PopupWithConfirmation extends Popup {
  /**
   * Конструктор класса PopupWithConfirmation.
   * Предназначен для создания всплывающего окна с подтверждением действий.
   * @param {string} popupSelector - селектор всплывающего окна.
   * @param {Object} param1 - объект с функцией-обработчиком.
   * @param {Function} param1.handleSubmitDelete - обработчик отправки формы.
   */
  constructor(popupSelector, { handleSubmitDelete }) {
    // Вызываем конструктор родительского класса
    super(popupSelector);
    // Сохраняем обработчик отправки формы
    this._handleSubmitDelete = handleSubmitDelete;
    // Находим элемент формы внутри всплывающего окна
    this._form = this._popup.querySelector('.popup__form');
  }

  /**
   * Устанавливает слушатели событий для всплывающего окна.
   * Добавляет обработчик отправки формы, который вызывает переданный обработчик удаления.
   */
  setEventListeners() {
    // Устанавливаем базовые слушатели событий из родительского класса
    super.setEventListeners();
    // Добавляем слушатель события 'submit' на форму
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault(); // Предотвращаем стандартное поведение формы
      // Вызываем обработчик удаления с передачей id и элемента карточки
      this._handleSubmitDelete(this._idCard, this._card);
    });
  }

  /**
   * Устанавливает данные карточки (id и элемент), с которыми будет работать всплывающее окно.
   * @param {string} id - уникальный идентификатор карточки.
   * @param {HTMLElement} element - DOM-элемент карточки.
   */
  getCard(id, element) {
    this._clear(); // Очищаем предыдущие данные карточки
    this._idCard = id; // Сохраняем id карточки
    this._cardElement = element; // Сохраняем элемент карточки
  }

  /**
   * Открывает всплывающее окно и передает текущую карточку.
   * @param {HTMLElement} card - элемент карточки, связанный с всплывающим окном.
   */
  open(card) {
    this._card = card; // Сохраняем текущую карточку
    super.open(); // Вызываем метод открытия из родительского класса
  }

  /**
   * Очищает данные текущей карточки.
   * Сбрасывает id и элемент карточки.
   * @private
   */
  _clear() {
    this._idCard = ''; // Сбрасываем id карточки
    this._cardElement = ''; // Сбрасываем элемент карточки
  }
}
