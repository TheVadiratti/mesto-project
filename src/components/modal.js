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
  addPopupForm,
  avatarPopupForm
} from './utilis/constants';

import {
  openPopup,
  closePopup,
  createCard,
  renderLoading
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
  resetButton
} from './validation.js';

// Ф для закрытия попапа при нажатии на Esc

function handleEscClose(event) {
  if(event.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}

// Ф для открытия модального окна изменения данных профиля

function openEditPopup() {
  openPopup(popupProfile);
  removeErrors(popupProfile, parameters);
  inputEditName.value = profileName.textContent;
  inputEditDescription.value = profileDescription.textContent;
};

// Ф для закрытия модального окна изменения данных профиля

function closeEditPopup() {
  closePopup(popupProfile);
}

// Ф для открытия модального окна добавления места

function openAddPopup() {
  openPopup(popupAdd);
  removeErrors(popupAdd, parameters);
}

// Ф для закрытия модального окна добавления места

function closeAddPopup() {
  closePopup(popupAdd);
}

// Ф для изменения данных профиля

function handleProfileFormSubmit (event) {
  event.preventDefault();
  renderLoading(popupProfile, false);
  changeProfile(inputEditName.value, inputEditDescription.value)
  .then(data => {
    profileName.textContent = data.name;
    profileDescription.textContent = data.about;
    closePopup(popupProfile);
  })

  .catch(err => {
    console.log(err);
  })

  .finally(() => {
    renderLoading(popupProfile, true);
  })
}

// Ф для добавления нового места (карточки)

function handleAddFormSubmit (event) {
  event.preventDefault();
  renderLoading(popupAdd, false);
  addCard(inputAddName.value, inputAddLink.value)

  .then(data => {
    pageContent.prepend(createCard(
      data.name,
      data.link,
      0,
      isMyCard(data),
      hasMyLike(data),
      data._id
      ));
    addPopupForm.reset();
    resetButton();
    closePopup(popupAdd);
  })

  .catch(err => {
    console.log(err);
    
  })

  .finally(() => {
    renderLoading(popupAdd, true);
  })
}

// Ф для закрытия превью

function closeImagePopup() {
  closePopup(popupImage);
}

// Ф для открытия модального окна изменения аватара

function openAvatarPopup() {
  openPopup(popupAvatar);
}

// Ф для закрытия модального окна изменения аватара

function closeAvatarPopup() {
  closePopup(popupAvatar);
}

// Ф для изменения автарки

function handleAvatarFormSubmit (event) {
  event.preventDefault();
  renderLoading(popupAvatar, false);
  setAvatar(inputAvatarLink.value)

  .then(data => {
    profileAvatar.setAttribute('src', data.avatar);
    avatarPopupForm.reset();
    resetButton();
    closePopup(popupAvatar);
  })
  
  .catch(err => {
    console.log(err);
  })

  .finally(() => {
    renderLoading(popupAvatar, true);
  })
}

export {
  openEditPopup,
  closeEditPopup,
  openAddPopup,
  closeAddPopup,
  closeImagePopup,
  handleProfileFormSubmit,
  handleAddFormSubmit,
  handleEscClose,
  openAvatarPopup,
  closeAvatarPopup,
  handleAvatarFormSubmit
};