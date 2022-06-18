// for index.js ----------------------------------------------------------------------------

const closeButtonProfile = document.querySelector('.popup__close-button_type_profile');
const closeButtonAddImage = document.querySelector('.popup__close-button_type_add-image');
const closeButtonImage = document.querySelector('.popup__close-button_type_image');
const closeButtonAvatar = document.querySelector('.popup__close-button_type_avatar');
const popupList = Array.from(document.querySelectorAll('.popup'));
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopupForm = document.querySelector('.popup__form_type_edit');
const addPopupForm = document.querySelector('.popup__form_type_add-image');
const pageContent = document.querySelector('.content');
const avatarButton = document.querySelector('.profile__avatar-btn');
const avatarPopupForm = document.querySelector('.popup__form_type_avatar');

export {
  closeButtonProfile,
  closeButtonAddImage,
  closeButtonImage,
  closeButtonAvatar,
  popupList,
  editButton,
  addButton,
  editPopupForm,
  addPopupForm,
  pageContent,
  avatarButton,
  avatarPopupForm
}

// for profile.js

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__avatar');

export {
  profileName,
  profileDescription,
  profileAvatar
}

// for modal.js ----------------------------------------------------------------------------

const popupProfile = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_add-image');
const popupImage = document.querySelector('.popup_type_image');
const inputEditName = document.querySelector('.popup__input_type_edit-name');
const inputEditDescription = document.querySelector('.popup__input_type_edit-description');
const inputAddName = document.querySelector('.popup__input_type_add-name');
const inputAddLink = document.querySelector('.popup__input_type_add-link');
const popupAvatar = document.querySelector('.popup_type_avatar');
const inputAvatarLink = document.querySelector('.popup__input_type_avatar');

export {
  popupProfile,
  popupAdd,
  popupImage,
  inputEditName,
  inputEditDescription,
  inputAddName,
  inputAddLink,
  popupAvatar,
  inputAvatarLink
}

// for cards.js ----------------------------------------------------------------------------

const cardTemplate = document.querySelector('.cardTemplate').content;
const photoPopupImage = popupImage.querySelector('.popup__image');
const captionPopupImage = popupImage.querySelector('.popup__caption');

export {
  cardTemplate,
  photoPopupImage,
  captionPopupImage
}