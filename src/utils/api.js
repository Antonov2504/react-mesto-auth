import handleOriginalResponse from './utils.js';

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
      .then(handleOriginalResponse);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards/`, {
      headers: this.headers
    })
      .then(handleOriginalResponse);
  }

  editProfile(userInfo) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about
      })
    })
      .then(handleOriginalResponse);
  }

  addCard(cardInfo) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: cardInfo.name,
        link: cardInfo.link
      })
    })
      .then(handleOriginalResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(handleOriginalResponse);
    ;
  }

  changeLikeCardStatus(cardId, setLike) {
    if (setLike) {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this.headers,
      })
        .then(handleOriginalResponse);
    } else {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: this.headers,
      })
        .then(handleOriginalResponse);
    }
  }

  updateAvatar(avatarLink) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
      .then(handleOriginalResponse);
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers: {
    authorization: 'c965dbbc-afa4-4385-8eef-dcc49737a825',
    'Content-Type': 'application/json'
  }
});

class Auth {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  register = (password, email) => {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(handleOriginalResponse)
      .then(data => {
        if (data) {
          return data;
        }
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  authorize = (password, email) => {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(handleOriginalResponse)
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          return data;
        }
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  getContent = (token) => {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
    })
      .then(handleOriginalResponse)
      .then(data => {
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}

export const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co',
})