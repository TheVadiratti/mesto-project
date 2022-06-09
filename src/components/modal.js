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
  pageContent,
  createCard
} from './cards.js';

// Ф для открытия модального окна

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Ф для закрытия модального окна

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// editPopup

function openEditPopup() {
  openPopup(popupProfile);
  inputEditName.value = profileName.textContent;
  inputEditDescription.value = profileDescription.textContent;
  enableValidation(parameters);
};

function closeEditPopup() {
  closePopup(popupProfile);
  removeErrors(popupProfile, parameters);
}

// addPopup

function openAddPopup() {
  openPopup(popupAdd);
  inputAddName.value = '';
  inputAddLink.value = '';
  enableValidation(parameters);
}

function closeAddPopup() {
  closePopup(popupAdd);
  removeErrors(popupAdd, parameters);
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
}

export {
  openEditPopup,
  closeEditPopup,
  openAddPopup,
  closeAddPopup,
  closeImagePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
  closePopup
};