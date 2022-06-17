// Загрузка данных профиля

import {
  getUserData,
  getCards
} from "./api";

import {
  profileDescription,
  profileName,
  profileAvatar,
  pageContent
} from "./utilis/constants";

import {
  createCard
} from './utilis/utilis';

import {
  isMyCard,
  hasMyLike
} from './cards';

// Вызов функции, возвращающей fetch

let userID;

Promise.all([getUserData(), getCards()])

.then(([userData, cardsArr]) => {
  setProfileData(userData.name, userData.about, userData.avatar);

 userID = userData._id;

  cardsArr.forEach(card => {
    pageContent.append(createCard(
      // параметры
      card.name,
      card.link,
      card.likes.length,
      isMyCard(card),
      hasMyLike(card),
      card._id
      ));
  })
})
.catch(err => {
  console.log(err);
})

// Установка данных профиля с сервера

function setProfileData(name, description, link) {
  profileName.textContent = name;
  profileDescription.textContent = description;
  profileAvatar.setAttribute('src', link);
}

export {
  userID
}