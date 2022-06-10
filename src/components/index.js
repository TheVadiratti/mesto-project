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
  addPopupForm,
  pageContent
} from './utilis/constants';

import {
  openEditPopup,
  closeEditPopup,
  openAddPopup,
  closeAddPopup,
  closeImagePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
} from './modal.js';

import {
  createCard
} from './utilis/utilis';

import {
  closePopup
} from './utilis/utilis';


// МОДАЛЬНЫЕ ОКНА

  // Закрытие попапа по клику на оверлей

popupList.forEach(popup => {
  popup.addEventListener('click', function(event) {
    if(event.target === popup) {
      closePopup(popup);
    }
  })
})

  // СЛУШАТЕЛИ

  // Edit

editButton.addEventListener('click', openEditPopup);
closeButtonProfile.addEventListener('click', closeEditPopup);

  // Add

addButton.addEventListener('click', openAddPopup);
closeButtonAddImage.addEventListener('click', closeAddPopup);

  // editFormSubmit

editPopupForm.addEventListener('submit', editFormSubmitHandler);

  // addFormSubmit

addPopupForm.addEventListener('submit', addFormSubmitHandler);

  // closeImagePopup

closeButtonImage.addEventListener('click', closeImagePopup);

// КАРТОЧКИ

  // addCards

function addCards() {
  initialCards.forEach(card => {
    pageContent.append(createCard(card.name, card.link));
  })
}

addCards();
