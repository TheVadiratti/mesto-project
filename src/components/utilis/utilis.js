import {
  cardTemplate,
} from './constants';

import {
  handleEscClose
} from '../modal';

import {
  openImagePopup,
  removeCard,
  setLikeListener,
  setLike,
  removeLike
} from '../cards';

// Ф для открытия модального окна

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscClose);
}

// Ф для закрытия модального окна

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEscClose);
}

// Ф для получения копии из шаблона

function getTemplate(template) {
  const copy = template.firstElementChild.cloneNode(true);
  return copy;
}

// Ф для создания карточки

function createCard(name, link, likes, removeButtonStatus, likeButtonStatus, id) {

  // Получает шаблон
  const cardCopy = getTemplate(cardTemplate);

  // Вставляется фото и название
  cardCopy.querySelector('.content__image').style.backgroundImage = `url(${link})`;
  cardCopy.querySelector('.content__card-heading').textContent = name;
  cardCopy.querySelector('.content__quantity').textContent = likes;

  /**
   * 1) Включается слушатель лайка;
   * 2) Включается слушатель превью;
   * 3) Добавляется идентификатор.
  */
  setLikeListener(cardCopy);
  openImagePopup(cardCopy, name, link);
  cardCopy.setAttribute('id', id);

  // проверка на свою
  if(removeButtonStatus) {
    cardCopy.querySelector('.content__remove-button').classList.add('content__remove-button_active');
    removeCard(cardCopy);
  }

  // проверка лайка
  if(likeButtonStatus) {
    setLike(cardCopy.querySelector('.content__like-button'));
  }
    else {
      removeLike(cardCopy.querySelector('.content__like-button'));
    }

  // Возвращает готовую карточку
  return cardCopy;
}

// Ф индикации загрузки

function renderLoading(popup, isLoading) {
  const btn = popup.querySelector('.popup__button');
  if(isLoading) {
    btn.textContent = 'Сохранить';
  }
  else {
    btn.textContent = 'Сохранение...';
  }
}

export {
  openPopup,
  closePopup,
  createCard,
  renderLoading
}