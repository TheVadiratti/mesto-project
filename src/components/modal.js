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
  pageContent
} from './utilis/constants';

import {
  openPopup,
  closePopup,
  createCard
} from './utilis/utilis';

import {
  changeProfile
} from './api';

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
  popupAdd.querySelector('.popup__form').reset();
  enableValidation(parameters);
}

// Ф для закрытия модального окна добавления места

function closeAddPopup() {
  closePopup(popupAdd);
  removeErrors(popupAdd, parameters);
}

// Ф для изменения данных профиля

function editFormSubmitHandler (event) {
  event.preventDefault();
  changeProfile(inputEditName.value, inputEditDescription.value)
  
  .then(res => {
    console.log(res.ok);
  })

  profileName.textContent = inputEditName.value;
  profileDescription.textContent = inputEditDescription.value;
  closePopup(popupProfile);
}

// Ф для добавления нового места (карточки)

function addFormSubmitHandler (event) {
  event.preventDefault();
  pageContent.prepend(createCard(inputAddName.value, inputAddLink.value));
  closePopup(popupAdd);
}

// Ф для закрытия превью

function closeImagePopup() {
  closePopup(popupImage);
}

export {
  openEditPopup,
  closeEditPopup,
  openAddPopup,
  closeAddPopup,
  closeImagePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
  handleEscClose
};