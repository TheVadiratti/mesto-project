let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupForm = document.querySelector('.popup__form');
const popup = document.querySelectorAll('.popup');
const input = document.querySelectorAll('.popup__input');
const closeButton = document.querySelectorAll('.popup__close-button');

// editWindow

function editWindowToggle() {
  popup[0].classList.toggle('popup_opened');
  input[0].value = profileName.textContent;
  input[1].value = profileDescription.textContent;
};
let editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', editWindowToggle);
closeButton[0].addEventListener('click', editWindowToggle);

// addWindow

function addWindowToggle() {
  popup[1].classList.toggle('popup_opened');
};
let addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', addWindowToggle);
closeButton[1].addEventListener('click', addWindowToggle);

// formSubmit

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = input[0].value;
  profileDescription.textContent = input[1].value;
  editWindowToggle();
}

popupForm.addEventListener('submit', formSubmitHandler);

// added card

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('.cardTemplate').content;
const pageContent = document.querySelector('.content');

function addCards() {
  for (let i = 0; i < 6; i++) {
    let cardCopy = cardTemplate.querySelector('.content__card').cloneNode(true);
    cardCopy.querySelector('.content__image').style.backgroundImage = `url(${initialCards[i].link})`;
    cardCopy.querySelector('.content__card-heading').textContent = initialCards[i].name;
    pageContent.append(cardCopy);
  }
};
addCards();

// like
const likeButtons = document.querySelectorAll('.content__like-button');
likeButtons.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.target.classList.toggle('content__like-button_active');
  })
});