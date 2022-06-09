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
} from './utilis/constants';

import {
  openPopup,
  closePopup
} from './utilis/utilis';

import {
  removeErrors,
  parameters,
  enableValidation
} from './validation.js';

import {
  pageContent
} from './utilis/constants';

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
  openEditPopup,
  closeEditPopup,
  openAddPopup,
  closeAddPopup,
  closeImagePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
  handleEscClose
};