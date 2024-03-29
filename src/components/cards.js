import {
  popupImage,
  photoPopupImage,
  captionPopupImage
} from './utilis/constants';

import {
  openPopup
} from './utilis/utilis';

import {
  deleteCard,
  putLike,
  deleteLike
} from './api';

import {
  userID
} from './profile';

// Ф для добавления слушателя модальго окна с превью

function setImageHandler(image, name, link) {
  image.addEventListener('click', event => {

    // проверка, что нажата не корзинка
    if (event.target === image) {

      /**
       * 1) Добавляется фото;
       * 2) Добавляется содержимое атрибута alt;
       * 3) Добавляется подпись к фото.
       */
      photoPopupImage.setAttribute('src', `${link}`);
      photoPopupImage.setAttribute('alt', `${name}`);
      captionPopupImage.textContent = name;

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

    .then(() => {
      event.target.closest('.content__card').remove();
    })

    .catch(err => {
      console.log(err);
    });
  })
}

function toggleLike(event) {
  const cardID = event.target.closest('.content__card').getAttribute('id');
  if(event.target.classList.contains('content__like-button_active')) {

    deleteLike(cardID)
    
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
  if(card.owner._id === userID) {
    return true;
  }
  return false;
}

// Ф для проверки своего лайка на карточке

function hasMyLike(card) {
  const arrLikes = card.likes;
  return arrLikes.some(obj => {
    return obj._id === userID;
  })
}

export {
  setImageHandler,
  setLikeListener,
  removeCard,
  setLike,
  removeLike,
  isMyCard,
  hasMyLike
};