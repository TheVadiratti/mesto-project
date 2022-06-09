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

// getTemplate

function getTemplate(template) {
  const copy = template.firstElementChild.cloneNode(true);
  return copy;
}

// createCard

function createCard(name, link) {
  const cardCopy = getTemplate(cardTemplate);
  cardCopy.querySelector('.content__image').style.backgroundImage = `url(${link})`;
  cardCopy.querySelector('.content__card-heading').textContent = name;

  setLikeListener(cardCopy);
  removeCard(cardCopy);
  openImagePopup(cardCopy, name, link);

  return cardCopy;
}

export {
  openPopup,
  closePopup,
  createCard
}