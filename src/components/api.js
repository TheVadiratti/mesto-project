const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-11',
  headers: {
    authorization: 'a16d7303-8582-4d3e-b6a0-b27a1c092457',
    'Content-Type': 'application/json'
  }
}

function getProfileData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization
    }
  });
}

function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization
    }
  });
}

function changeProfile(name, description) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: description
    })
  });
}

function addCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  });
}

function deleteCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization
    }
  });
}

function putLike(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: {
      authorization: config.headers.authorization
    }
  });
}

function deleteLike(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization
    }
  });
}

function setAvatar(link) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  });
}

export {
  getProfileData,
  getCards,
  changeProfile,
  addCard,
  deleteCard,
  putLike,
  deleteLike,
  setAvatar
}