let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let likeButtons = document.querySelector('.content__like-button');

// editWindow

function editWindowToggle() {
  popup.classList.toggle('popup_opened');
};
editButton.addEventListener('click', editWindowToggle);
closeButton.addEventListener('click', editWindowToggle);

// like

function like() {
  likeButtons.classList.toggle('content__like-button_active');
};
likeButtons.addEventListener('click', like);