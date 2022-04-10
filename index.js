const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupProfile = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_add-image');
const popupImage = document.querySelector('.popup_type_image');
const inputEditName = document.querySelector('.popup__input_type_edit-name');
const inputEditDescription = document.querySelector('.popup__input_type_edit-description');
const inputAddName = document.querySelector('.popup__input_type_add-name');
const inputAddLink = document.querySelector('.popup__input_type_add-link');
const closeButtonProfile = document.querySelector('.popup__close-button_type_profile');
const closeButtonAddImage = document.querySelector('.popup__close-button_type_add-image');
const closeButtonImage = document.querySelector('.popup__close-button_type_image');

// openPopup

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// closePopup

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// editPopup

const editButton = document.querySelector('.profile__edit-button');

function openEditPopup() {
  openPopup(popupProfile);
  inputEditName.value = profileName.textContent;
  inputEditDescription.value = profileDescription.textContent;
};

function closeEditPopup() {
  closePopup(popupProfile);
}

editButton.addEventListener('click', openEditPopup);
closeButtonProfile.addEventListener('click', closeEditPopup);

// addPopup

const addButton = document.querySelector('.profile__add-button');

function OpenAddPopup() {
  openPopup(popupAdd);
  inputAddName.value = '';
  inputAddLink.value = '';
}

function closeAddPopup() {
  closePopup(popupAdd);
}

addButton.addEventListener('click', OpenAddPopup);
closeButtonAddImage.addEventListener('click', closeAddPopup);

// editFormSubmit

const editPopupForm = document.querySelector('.popup__form_type_edit');

function editFormSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = inputEditName.value;
  profileDescription.textContent = inputEditDescription.value;
  closePopup(popupProfile);
}

editPopupForm.addEventListener('submit', editFormSubmitHandler);

// addFormSubmit

const addPopupForm = document.querySelector('.popup__form_type_add-image');

function createCard(name, link) {
  const cardCopy = cardTemplate.querySelector('.content__card').cloneNode(true);
  cardCopy.querySelector('.content__image').style.backgroundImage = `url(${link})`;
  cardCopy.querySelector('.content__card-heading').textContent = name;
  const addedLikeButton = cardCopy.querySelector('.content__like-button');
  addedLikeButton.addEventListener('click', event => {
    event.target.classList.toggle('content__like-button_active');
  })
  removeCard(cardCopy);
  openImagePopup(cardCopy);
  return cardCopy;
}

function addFormSubmitHandler (event) {
  event.preventDefault();
  pageContent.prepend(createCard(inputAddName.value, inputAddLink.value));
  closePopup(popupAdd);
}

addPopupForm.addEventListener('submit', addFormSubmitHandler);

// addCards

const arrayLength = initialCards.length;
const cardTemplate = document.querySelector('.cardTemplate').content;
const pageContent = document.querySelector('.content');

function addCards() {
  for (i = 0; i < arrayLength; i++) {
    pageContent.append(createCard(initialCards[i].name, initialCards[i].link))
  }
  targetImages = pageContent.querySelectorAll('.content__image');
}

addCards();

// like

function like(card) {
  const likeButtons = card.querySelector('.content__like-button');
  likeButtons.forEach(item => {
    item.addEventListener('click', event => {
      event.target.classList.toggle('content__like-button_active');
    })
  })
}

// remove

function removeCard(card) {
  const removeButton = card.querySelector('.content__remove-button');
  removeButton.addEventListener('click', event => {
    event.target.closest('.content__card').remove();
  })
}  
  

// openImagePopup

let contentImageURL;

function openImagePopup(card) {
  const targetImage = card.querySelector('.content__image');
  targetImage.addEventListener('click', event => {
    if (event.target.innerHTML !== document.querySelector('.content__remove-button').innerHTML) {
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

closeButtonImage.addEventListener('click', closeImagePopup);
