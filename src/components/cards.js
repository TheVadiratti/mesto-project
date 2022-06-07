import { initialCards } from './initialCards.js';
import { openImagePopup } from './modal.js';

// addCards

const arrayLength = initialCards.length;
const cardTemplate = document.querySelector('.cardTemplate').content;
const pageContent = document.querySelector('.content');

// createCard !!!

function createCard(name, link) {
  const cardCopy = cardTemplate.querySelector('.content__card').cloneNode(true);
  cardCopy.querySelector('.content__image').style.backgroundImage = `url(${link})`;
  cardCopy.querySelector('.content__card-heading').textContent = name;
  const addedButton = cardCopy.querySelector('.content__like-button');
  addedButton.addEventListener('click', event => {
    event.target.classList.toggle('content__like-button_active');
  })
  removeCard(cardCopy);
  openImagePopup(cardCopy);
  return cardCopy;
}

  // addCards

function addCards() {
  for (let i = 0; i < arrayLength; i++) {
    pageContent.append(createCard(initialCards[i].name, initialCards[i].link));
  }
}

  // removeCard

  function removeCard(card) {
    const removeButton = card.querySelector('.content__remove-button');
    removeButton.addEventListener('click', event => {
      event.target.closest('.content__card').remove();
    })
  }  

export { addCards, pageContent };