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
  deleteCard,
  putLike,
  deleteLike
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

function setLike(button) {
  button.classList.add('content__like-button_active');
}

// Ф убрать лайк

function removeLike(button) {
  button.classList.remove('content__like-button_active');
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

function toggleLike(event) {
  const cardID = event.target.closest('.content__card').getAttribute('id');
  console.log(cardID);
  if(event.target.classList.contains('content__like-button_active')) {

    deleteLike(cardID)
    
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(data => {
        event.target.nextElementSibling.textContent = data.likes.length;
        removeLike(event.target);
      })
      .catch(err => {
        console.log(err);
      })
  }
    else {

      putLike(cardID)
    
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(data => {
        event.target.nextElementSibling.textContent = data.likes.length;
        setLike(event.target);
      })
      .catch(err => {
        console.log(err);
      })
    }
}

// Слушатель постановки/удаления лайка

function setLikeListener(card) {
  const likeButton = card.querySelector('.content__like-button');
  
  likeButton.addEventListener('click', toggleLike)
}

// Ф для проверки на свою карточку

function isMyCard(card) {
  if(card.owner._id === 'a9497c41abc43b7e36cc01aa') {
    return true;
  }
  return false;
}

// Ф для проверки своего лайка на карточке

function hasMyLike(card) {
  const arrLikes = card.likes;
  return arrLikes.some(obj => {
    return obj._id === 'a9497c41abc43b7e36cc01aa';
  })
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
  console.log(data);
  for(let i = 0; i < data.length; i++) {
    pageContent.append(createCard(
      // параметры
      data[i].name,
      data[i].link,
      data[i].likes.length,
      isMyCard(data[i]),
      hasMyLike(data[i]),
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
  removeCard,
  setLike,
  removeLike,
};