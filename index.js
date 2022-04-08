let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let editPopupForm = document.querySelectorAll('.popup__form')[0];
let addPopupForm = document.querySelectorAll('.popup__form')[1];
let popup = document.querySelectorAll('.popup');
const input = document.querySelectorAll('.popup__input');
let closeButton = document.querySelectorAll('.popup__close-button');

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
  input[2].value = '';
  input[3].value = '';
};
let addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', addWindowToggle);
closeButton[1].addEventListener('click', addWindowToggle);

// editFormSubmit

function editFormSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = input[0].value;
  profileDescription.textContent = input[1].value;
  editWindowToggle();
}

editPopupForm.addEventListener('submit', editFormSubmitHandler);

// addFormSubmit

function addFormSubmitHandler (evt) {
  evt.preventDefault();
  initialCardsArray.unshift({});
  initialCardsArray[0].name = input[2].value;
  initialCardsArray[0].link = input[3].value;
  let cardCopy = cardTemplate.querySelector('.content__card').cloneNode(true);
  cardCopy.querySelector('.content__image').style.backgroundImage = `url(${initialCardsArray[0].link})`;
  cardCopy.querySelector('.content__card-heading').textContent = initialCardsArray[0].name;
  pageContent.prepend(cardCopy);
  let addedLikeButton = document.querySelector('.content__like-button');
  addedLikeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('content__like-button_active');
  })
  remove();
  popupImageOpen();
  addWindowToggle();
}

addPopupForm.addEventListener('submit', addFormSubmitHandler);

// initial cards

let initialCardsArray = [
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

const arrayLength = initialCardsArray.length;
const cardTemplate = document.querySelector('.cardTemplate').content;
const pageContent = document.querySelector('.content');

function initialCards() {
  for (i = 0; i < arrayLength; i++) {
    let cardCopy = cardTemplate.querySelector('.content__card').cloneNode(true);
    cardCopy.querySelector('.content__image').style.backgroundImage = `url(${initialCardsArray[i].link})`;
    cardCopy.querySelector('.content__card-heading').textContent = initialCardsArray[i].name;
    pageContent.append(cardCopy);
  }
}

initialCards();

// like

function like() {
  let likeButtons = document.querySelectorAll('.content__like-button');
  likeButtons.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.target.classList.toggle('content__like-button_active');
    })
  })
}

like();

// remove

function remove() {
  let removeButtons = document.querySelectorAll('.content__remove-button');
  removeButtons.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.target.closest('.content__card').remove();
      // remove from array
      let targetElement = event.target.closest('.content__card');
      initialCardsArray = initialCardsArray.filter(function (item) {
        return targetElement.querySelector('.content__card-heading').textContent !== item.name;
      })
    })
  })
}

remove();

// popupImageOpen

const popupImageTemplate = document.querySelector('.popupImageTemplate').content;
const popupImageCopy = popupImageTemplate.querySelector('.popup-img').cloneNode(true);
let popupImage;
let contentImageURL;

function popupImageOpen() {
  let targetImages = pageContent.querySelectorAll('.content__image');
  targetImages.forEach(function (item) {
    item.addEventListener('click', function (event) {
      console.log(event.target);
      if (event.target.innerHTML !== document.querySelector('.content__remove-button').innerHTML) {
        console.log(event.target);
        document.querySelector('.footer').after(popupImageCopy);
        popupImage = document.querySelector('.popup-img');
        contentImageURL = event.target.style.backgroundImage.slice(4, -1).replace(/"/g, "");
        popupImage.querySelector('.popup-img__image').setAttribute('src', `${contentImageURL}`);
        popupImage.querySelector('.popup-img__caption').textContent = event.target.parentNode.textContent;
        popupImage.classList.add('popup-img_opened');
        popupImageClose();
      }
    })
  })
}
popupImageOpen();

function popupImageClose() {
  imageCloseButton = document.querySelector('.popup-img__close-button');
  imageCloseButton.addEventListener('click', function() {
    popupImage.remove();
  })
}
