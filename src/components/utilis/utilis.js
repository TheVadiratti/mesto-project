import {
  cardTemplate,
} from './constants';

import {
  openImagePopup,
  setLikeListener,
  removeCard
} from '../cards';

// Ф для открытия модального окна

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Ф для закрытия модального окна

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Ф для получения копии из шаблона

function getTemplate(template) {
  const copy = template.firstElementChild.cloneNode(true);
  return copy;
}

// Ф для создания карточки

function createCard(name, link) {

  // Получает шаблон
  const cardCopy = getTemplate(cardTemplate);

  // Вставляется фото и название
  cardCopy.querySelector('.content__image').style.backgroundImage = `url(${link})`;
  cardCopy.querySelector('.content__card-heading').textContent = name;

  /**
   * 1) Включается слушатель лайка;
   * 2) Включается кнопка удаления;
   * 3) Включается слушатель превью.
  */
  setLikeListener(cardCopy);
  removeCard(cardCopy);
  openImagePopup(cardCopy, name, link);

  // Возвращает готовую карточку
  return cardCopy;
}

export {
  openPopup,
  closePopup,
  createCard
}