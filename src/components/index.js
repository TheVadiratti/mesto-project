import '../pages/index.css';

import {
  closeButtonProfile,
  closeButtonAddImage,
  closeButtonImage,
  popupList,
  editButton,
  addButton,
  editPopupForm,
  addPopupForm,
} from './utilis/constants';

import {
  getProfileData
} from './profile';

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
  closePopup
} from './utilis/utilis';

  // Закрытие попапа по клику на оверлей

popupList.forEach(popup => {
  popup.addEventListener('click', function(event) {
    if(event.target === popup) {
      closePopup(popup);
    }
  })
})

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
