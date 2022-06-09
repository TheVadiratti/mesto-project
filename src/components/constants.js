// for index.js

const closeButtonProfile = document.querySelector('.popup__close-button_type_profile');
const closeButtonAddImage = document.querySelector('.popup__close-button_type_add-image');
const closeButtonImage = document.querySelector('.popup__close-button_type_image');
const popupList = Array.from(document.querySelectorAll('.popup'));
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopupForm = document.querySelector('.popup__form_type_edit');
const addPopupForm = document.querySelector('.popup__form_type_add-image');

export {
  closeButtonProfile,
  closeButtonAddImage,
  closeButtonImage,
  popupList,
  editButton,
  addButton,
  editPopupForm,
  addPopupForm
}

// for modal.js

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupProfile = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_add-image');
const popupImage = document.querySelector('.popup_type_image');
const inputEditName = document.querySelector('.popup__input_type_edit-name');
const inputEditDescription = document.querySelector('.popup__input_type_edit-description');
const inputAddName = document.querySelector('.popup__input_type_add-name');
const inputAddLink = document.querySelector('.popup__input_type_add-link');

export {
  profileName,
  profileDescription,
  popupProfile,
  popupAdd,
  popupImage,
  inputEditName,
  inputEditDescription,
  inputAddName,
  inputAddLink
}

// for cards.js

let contentImageURL;
const cardTemplate = document.querySelector('.cardTemplate').content;

export {
  contentImageURL,
  cardTemplate
}