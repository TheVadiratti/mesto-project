import '../pages/index.css';

import {
  closeButtonProfile,
  closeButtonAddImage,
  closeButtonImage,
  closeButtonAvatar,
  popupList,
  editButton,
  addButton,
  editPopupForm,
  addPopupForm,
  avatarButton,
  avatarPopupForm
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
  openAvatarPopup,
  closeAvatarPopup,
  avatarFormSubmitHandler
} from './modal.js';

import {
  closePopup
} from './utilis/utilis';

import {
  removeErrors,
  parameters
} from './validation';

  // Закрытие попапа по клику на оверлей

popupList.forEach(popup => {
  popup.addEventListener('click', function(event) {
    if(event.target === popup) {
      removeErrors(popup, parameters);
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
  
  // openAvatarPopup

avatarButton.addEventListener('click', openAvatarPopup);

  // openAvatarPopup

closeButtonAvatar.addEventListener('click', closeAvatarPopup);

  // avatarFormSubmit

avatarPopupForm.addEventListener('submit', avatarFormSubmitHandler);
