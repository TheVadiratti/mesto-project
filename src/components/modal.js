import {
  profileName,
  profileDescription,
  popupProfile,
  popupAdd,
  popupImage,
  inputEditName,
  inputEditDescription,
  inputAddName,
  inputAddLink
} from './constants';

import {
  removeErrors,
  parameters,
  enableValidation
} from './validation.js';

import {
  pageContent
} from './constants';

import { createCard } from './cards';

// Ф для открытия модального окна

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Ф для закрытия модального окна

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Ф для закрытия попапа при нажатии на Esc

function handleEscClose(event) {
  const popupActive = document.querySelector('.popup_opened');
  if(event.key === 'Escape') {
    closePopup(popupActive);
  }
}

// editPopup

function openEditPopup() {
  openPopup(popupProfile);
  inputEditName.value = profileName.textContent;
  inputEditDescription.value = profileDescription.textContent;
  enableValidation(parameters);
  document.addEventListener('keyup', handleEscClose);
};

function closeEditPopup() {
  closePopup(popupProfile);
  removeErrors(popupProfile, parameters);
  document.removeEventListener('keyup', handleEscClose);
}

// addPopup

function openAddPopup() {
  openPopup(popupAdd);
  popupAdd.querySelector('.popup__form').reset();
  enableValidation(parameters);
  document.addEventListener('keyup', handleEscClose);
}

function closeAddPopup() {
  closePopup(popupAdd);
  removeErrors(popupAdd, parameters);
  document.removeEventListener('keyup', handleEscClose);
}

// editFormSubmit

function editFormSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = inputEditName.value;
  profileDescription.textContent = inputEditDescription.value;
  closePopup(popupProfile);
}

// addFormSubmit

function addFormSubmitHandler (event) {
  event.preventDefault();
  pageContent.prepend(createCard(inputAddName.value, inputAddLink.value));
  closePopup(popupAdd);
}

// closeImagePopup

function closeImagePopup() {
  closePopup(popupImage);
  document.removeEventListener('keyup', handleEscClose);
}

export {
  openPopup,
  closePopup,
  openEditPopup,
  closeEditPopup,
  openAddPopup,
  closeAddPopup,
  closeImagePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
  handleEscClose
};