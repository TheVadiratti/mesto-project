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

export {
  getProfileData
}