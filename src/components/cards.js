import {
  pageContent,
  popupImage
} from './utilis/constants';

import {
  openPopup,
  createCard
} from './utilis/utilis';

import {
  getCards,
  deleteCard
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

// Ф постваить лайк

function setLike(event) {
  event.target.classList.add('content__like-button_active');
}

// Ф убрать лайк

function removeLike(event) {
  event.target.classList.remove('content__like-button_active');
}

// Ф для установки слушателя корзинки удаления

function removeCard(card) {
  const removeButton = card.querySelector('.content__remove-button');
  
  removeButton.addEventListener('click', event => {
    deleteCard(event.target.closest('.content__card').getAttribute('id'))
    .catch(err => {
      console.log(err);
    });
    event.target.closest('.content__card').remove();
  })
}

// Слушатель постановки/удаления лайка

function setLikeListener(card) {
  const likeButton = card.querySelector('.content__like-button');
  
  likeButton.addEventListener('click', event => {
    if(likeButton.classList.contains('content__like-button_active')) {
      removeLike(event);
    }
      else {
        setLike(event);
      }
  })
}

// Ф для проверки на свою карточку

function isMyCard(card) {
  if(card.owner._id === 'a9497c41abc43b7e36cc01aa') {
    return true;
  }
  return false;
}

// Ф для получения карточек с сервера

getCards()

.then(res => {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
})
.then(data => {
  for(let i = 0; i < data.length; i++) {
    pageContent.append(createCard(
      // параметры
      data[i].name,
      data[i].link,
      data[i].likes.length,
      isMyCard(data[i]),
      data[i]._id
      ));
  }
})
.catch(err => {
  console.log(err);
})

export {
  openImagePopup,
  setLikeListener,
  removeCard
};