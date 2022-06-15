import {
  pageContent,
  popupImage
} from './utilis/constants';

import {
  openPopup,
  createCard
} from './utilis/utilis';

import {
  getCards
} from './api';

// Ф для добавления слушателя модальго окна с превью

function openImagePopup(card, name, link) {
  card.addEventListener('click', event => {

    // проверка, что нажата не корзинка
    if (event.target.classList.contains('content__image')) {

      /**
       * 1) Добавляется фото;
       * 2) Добавляется содержимое атрибута alt;
       * 3) Добавляется подпись к фото.
       */
      popupImage.querySelector('.popup__image').setAttribute('src', `${link}`);
      popupImage.querySelector('.popup__image').setAttribute('alt', `${name}`);
      popupImage.querySelector('.popup__caption').textContent = name;

      // Открытие модального окна с фото
      openPopup(popupImage);
    }
  })
}

// Ф для установки слушателя лайка

function setLikeListener(card) {
  const likeButton = card.querySelector('.content__like-button');

  likeButton.addEventListener('click', event => {
    event.target.classList.toggle('content__like-button_active');
  })
}



// Ф для установки слушателя корзинки удаления

function removeCard(card) {
  const removeButton = card.querySelector('.content__remove-button');
  
  removeButton.addEventListener('click', event => {
    event.target.closest('.content__card').remove();
  })
}

// getCards

getCards()

.then(res => {
  return res.json();
})
.then(data => {
  console.log(data);
  for(let i = 0; i < data.length; i++) {
    pageContent.append(createCard(data[i].name, data[i].link));
  }
})

export {
  openImagePopup,
  setLikeListener,
  removeCard
};