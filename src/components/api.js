const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-11',
  headers: {
    authorization: 'a16d7303-8582-4d3e-b6a0-b27a1c092457',
    'Content-Type': 'application/json'
  }
}

function checkResponse(res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function getUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization
    }
  })
  .then(checkResponse)
}

function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization
    }
  })
  .then(checkResponse)
}

function changeProfile(name, description) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: description
    })
  })
  .then(checkResponse)
}

function addCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
  .then(checkResponse)
}

function deleteCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization
    }
  })

  .then(checkResponse)
}

function putLike(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: {
      authorization: config.headers.authorization
    }
  })
  .then(checkResponse)
}

function deleteLike(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization
    }
  })
  .then(checkResponse)
}

function setAvatar(link) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
  .then(checkResponse)
}

export {
  getUserData,
  getCards,
  changeProfile,
  addCard,
  deleteCard,
  putLike,
  deleteLike,
  setAvatar
}