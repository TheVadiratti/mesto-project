import '../pages/index.css';

import { initialCards } from './initialCards';

import {
  closeButtonProfile,
  closeButtonAddImage,
  closeButtonImage,
  popupList,
  editButton,
  addButton,
  editPopupForm,
  addPopupForm
} from './constants';

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

  // addCards

const pageContent = document.querySelector('.content');

function addCards() {
  initialCards.forEach(card => {
    pageContent.append(createCard(card.name, card.link));
  })
}

addCards();
