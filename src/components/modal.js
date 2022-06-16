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
  addCard,
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
      data[i].name,
      data[i].link,
      0,
      isMyCard(data[i]),
      hasMyLike(data[i]),
      data[i]._id));
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