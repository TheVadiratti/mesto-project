import {
  cardTemplate,
  popupImage
} from './constants';

import {
  openPopup,
  handleEscClose
} from './modal';

// openImagePopup


function openImagePopup(card, name, link) {
  card.addEventListener('click', event => {
    // проверка, что нажата не корзинка
    if (event.target.classList.contains('content__image')) {
      popupImage.querySelector('.popup__image').setAttribute('src', `${link}`);
      popupImage.querySelector('.popup__image').setAttribute('alt', `${name}`);
      popupImage.querySelector('.popup__caption').textContent = name;
      openPopup(popupImage);
      document.addEventListener('keyup', handleEscClose);
    }
  })
}

// getTemplate

function getTemplate(template) {
  const copy = template.firstElementChild.cloneNode(true);
  return copy;
}

// setLikeListener

function setLikeListener(card) {
  const likeButton = card.querySelector('.content__like-button');
  likeButton.addEventListener('click', event => {
    event.target.classList.toggle('content__like-button_active');
  })
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

// removeCard

function removeCard(card) {
  const removeButton = card.querySelector('.content__remove-button');
  removeButton.addEventListener('click', event => {
    event.target.closest('.content__card').remove();
  })
}

export { createCard };