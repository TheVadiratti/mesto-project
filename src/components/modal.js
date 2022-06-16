import {
  profileName,
  profileDescription,
  popupProfile,
  popupAdd,
  popupImage,
  inputEditName,
  inputEditDescription,
  inputAddName,
  inputAddLink,
  pageContent,
  popupAvatar,
  inputAvatarLink,
  profileAvatar,
  avatarPopupForm
} from './utilis/constants';

import {
  openPopup,
  closePopup,
  createCard
} from './utilis/utilis';

import {
  addCard,
  changeProfile,
  setAvatar
} from './api';

import {
  isMyCard,
  hasMyLike
} from './cards'

import {
  removeErrors,
  parameters,
  enableValidation
} from './validation.js';

// Ф для закрытия попапа при нажатии на Esc

function handleEscClose(event) {
  const popupActive = document.querySelector('.popup_opened');

  if(event.key === 'Escape') {
    closePopup(popupActive);
    removeErrors(popupActive, parameters);
    popupActive.querySelector('.popup__form').reset();
  }
}

// Ф для открытия модального окна изменения данных профиля

function openEditPopup() {
  openPopup(popupProfile);
  inputEditName.value = profileName.textContent;
  inputEditDescription.value = profileDescription.textContent;
  enableValidation(parameters);
};

// Ф для закрытия модального окна изменения данных профиля

function closeEditPopup() {
  closePopup(popupProfile);
  removeErrors(popupProfile, parameters);
}

// Ф для открытия модального окна добавления места

function openAddPopup() {
  openPopup(popupAdd);
  enableValidation(parameters);
}

// Ф для закрытия модального окна добавления места

function closeAddPopup() {
  closePopup(popupAdd);
  popupAdd.querySelector('.popup__form').reset();
  removeErrors(popupAdd, parameters);
}

// Ф для изменения данных профиля

function editFormSubmitHandler (event) {
  event.preventDefault();
  changeProfile(inputEditName.value, inputEditDescription.value)
  
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then(data => {
    profileName.textContent = data.name;
    profileDescription.textContent = data.about;
  })
  .catch(err => {
    console.log(err);
  })

  closePopup(popupProfile);
}

// Ф для добавления нового места (карточки)

function addFormSubmitHandler (event) {
  event.preventDefault();
  addCard(inputAddName.value, inputAddLink.value)

  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then(data => {
    pageContent.prepend(createCard(
      data.name,
      data.link,
      0,
      isMyCard(data),
      hasMyLike(data),
      data._id
      ));
  })
  .catch(err => {
    console.log(err);
  })

  closePopup(popupAdd);
}

// Ф для закрытия превью

function closeImagePopup() {
  closePopup(popupImage);
}

// Ф для открытия модального окна изменения аватара

function openAvatarPopup() {
  openPopup(popupAvatar);
  enableValidation(parameters);
}

// Ф для закрытия модального окна изменения аватара

function closeAvatarPopup() {
  closePopup(popupAvatar);
  removeErrors(popupAvatar, parameters);
  popupAvatar.querySelector('.popup__form').reset();
}

// Ф для изменения автарки

function avatarFormSubmitHandler (event) {
  event.preventDefault();
  setAvatar(inputAvatarLink.value)
  
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then(data => {
    profileAvatar.setAttribute('src', data.avatar);
    closePopup(popupAvatar);
    avatarPopupForm.reset();
  })
  .catch(err => {
    console.log(err);
  })
}

export {
  openEditPopup,
  closeEditPopup,
  openAddPopup,
  closeAddPopup,
  closeImagePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
  handleEscClose,
  openAvatarPopup,
  closeAvatarPopup,
  avatarFormSubmitHandler
};