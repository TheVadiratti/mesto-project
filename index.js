let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let input = document.querySelectorAll('.popup__input');

// editWindow

function editWindowToggle() {
  popup.classList.toggle('popup_opened');
  input[0].value = '';
  input[1].value = '';
};
editButton.addEventListener('click', editWindowToggle);
closeButton.addEventListener('click', editWindowToggle);

// like
let likeButtons = document.querySelectorAll('.content__like-button');
for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function (event) {
    event.target.classList.toggle('content__like-button_active');
    console.log(event.target);
  })
};