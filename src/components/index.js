import {
  openEditPopup,
  closeEditPopup,
  openAddPopup,
  closeAddPopup,
  closeImagePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
  closePopup
} from './modal.js';

import { addCards } from './cards.js';

const closeButtonProfile = document.querySelector('.popup__close-button_type_profile');
const closeButtonAddImage = document.querySelector('.popup__close-button_type_add-image');
const closeButtonImage = document.querySelector('.popup__close-button_type_image');
const popupList = Array.from(document.querySelectorAll('.popup'));
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopupForm = document.querySelector('.popup__form_type_edit');
const addPopupForm = document.querySelector('.popup__form_type_add-image');

// МОДАЛЬНЫЕ ОКНА

  // Edit

editButton.addEventListener('click', openEditPopup);
closeButtonProfile.addEventListener('click', closeEditPopup);

  // Add

addButton.addEventListener('click', openAddPopup);
closeButtonAddImage.addEventListener('click', closeAddPopup);

  // Закрытие попапа по клику на оверлей

popupList.forEach(popup => {
  popup.addEventListener('click', function(event) {
    if(event.target === popup) {
      closePopup(popup);
    }
  })
})

  // Закрытие попапа при нажатии на Esc

document.addEventListener('keyup', function(event) {
  const popupActive = document.querySelector('.popup_opened');
  if(popupActive !== null) {
    if(event.key === 'Escape') {
      closePopup(popupActive);
    }
  }
})

  // editFormSubmit

editPopupForm.addEventListener('submit', editFormSubmitHandler);

  // addFormSubmit

addPopupForm.addEventListener('submit', addFormSubmitHandler);

  // closeImagePopup

closeButtonImage.addEventListener('click', closeImagePopup);

// КАРТОЧКИ

  // addCards

addCards();
