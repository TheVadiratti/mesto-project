// Загрузка данных профиля

import {
  getProfileData
} from "./api";

import {
  profileDescription,
  profileName,
  profileAvatar
} from "./utilis/constants";

// Вызов функции, возвращающей fetch

getProfileData()

.then(res => {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
})
.then(data => {
  setProfileData(data.name, data.about, data.avatar);
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