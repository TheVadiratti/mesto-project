let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupForm = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let input = document.querySelectorAll('.popup__input');

// editWindow

function editWindowToggle() {
  popup.classList.toggle('popup_opened');
  input[0].value = profileName.textContent;
  input[1].value = profileDescription.textContent;
};
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
editButton.addEventListener('click', editWindowToggle);
closeButton.addEventListener('click', editWindowToggle);

// formSubmit

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = input[0].value;
  profileDescription.textContent = input[1].value;
  editWindowToggle();
}

popupForm.addEventListener('submit', formSubmitHandler);

// like
const likeButtons = document.querySelectorAll('.content__like-button');
likeButtons.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.target.classList.toggle('content__like-button_active');
  })
});

const test = document.querySelector('.content__image');
console.log(test.src);