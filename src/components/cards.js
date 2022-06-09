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

// getTemplate

function getTemplate(template) {
  const copy = template.firstElementChild.cloneNode(true);
  return copy;
}

// createCard

const cardTemplate = document.querySelector('.cardTemplate').content;

function createCard(name, link) {
  const cardCopy = getTemplate(cardTemplate);
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

// removeCard

function removeCard(card) {
  const removeButton = card.querySelector('.content__remove-button');
  removeButton.addEventListener('click', event => {
    event.target.closest('.content__card').remove();
  })
}

export { createCard };