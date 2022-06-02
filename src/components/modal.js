import { removeErrors, enableValidation } from './validation.js';

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupProfile = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_add-image');
const popupImage = document.querySelector('.popup_type_image');
const inputEditName = document.querySelector('.popup__input_type_edit-name');
const inputEditDescription = document.querySelector('.popup__input_type_edit-description');
const inputAddName = document.querySelector('.popup__input_type_add-name');
const inputAddLink = document.querySelector('.popup__input_type_add-link');

// Ф для открытия модального окна

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Ф для закрытия модального окна

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// editPopup

function openEditPopup() {
  openPopup(popupProfile);
  inputEditName.value = profileName.textContent;
  inputEditDescription.value = profileDescription.textContent;
  enableValidation();
};

function closeEditPopup() {
  closePopup(popupProfile);
  removeErrors(popupProfile);
}

// addPopup

function openAddPopup() {
  openPopup(popupAdd);
  enableValidation();
  inputAddName.value = '';
  inputAddLink.value = '';
}

function closeAddPopup() {
  closePopup(popupAdd);
  removeErrors(popupAdd);
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

// openImagePopup

let contentImageURL;

function openImagePopup(card) {
  const targetImage = card.querySelector('.content__image');
  targetImage.addEventListener('click', event => {
    if (event.target.classList.contains('content__image')) {
      contentImageURL = event.target.style.backgroundImage.slice(4, -1).replace(/"/g, "");
      popupImage.querySelector('.popup__image').setAttribute('src', `${contentImageURL}`);
      popupImage.querySelector('.popup__image').setAttribute('alt', `${event.target.nextElementSibling.firstElementChild.textContent}`);
      popupImage.querySelector('.popup__caption').textContent = event.target.nextElementSibling.firstElementChild.textContent;
      openPopup(popupImage);
    }
  })
}

// closeImagePopup

function closeImagePopup() {
  closePopup(popupImage);
}

export {
  openEditPopup,
  closeEditPopup,
  openAddPopup,
  closeAddPopup,
  openImagePopup,
  closeImagePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
  closePopup
};