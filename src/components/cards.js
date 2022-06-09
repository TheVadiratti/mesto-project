import {
  popupImage
} from './utilis/constants';

import {
  openPopup
} from './utilis/utilis';

import {
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

// setLikeListener

function setLikeListener(card) {
  const likeButton = card.querySelector('.content__like-button');
  likeButton.addEventListener('click', event => {
    event.target.classList.toggle('content__like-button_active');
  })
}



// removeCard

function removeCard(card) {
  const removeButton = card.querySelector('.content__remove-button');
  removeButton.addEventListener('click', event => {
    event.target.closest('.content__card').remove();
  })
}

export {
  openImagePopup,
  setLikeListener,
  removeCard
};