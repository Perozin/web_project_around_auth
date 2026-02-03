// src/utils/api.js
class Api {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  _getHeaders() {
    return {
      authorization: this._token,
      'Content-Type': 'application/json',
    };
  }

  async _request(path, options = {}) {
    const res = await fetch(`${this._baseUrl}${path}`, {
      headers: this._getHeaders(),
      ...options,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API error ${res.status}: ${text}`);
    }

    return res.json();
  }

  // USER
  getUserInfo() {
    return this._request('/users/me');
  }

  setUserInfo(data) {
    return this._request('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  setUserAvatar(data) {
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // CARDS
  getInitialCards() {
    return this._request('/cards');
  }

  addCard(data) {
    return this._request('/cards', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  deleteCard(id) {
    return this._request(`/cards/${id}`, {
      method: 'DELETE',
    });
  }

  changeLikeCardStatus(id, like) {
    return this._request(`/cards/${id}/likes`, {
      method: like ? 'PUT' : 'DELETE',
    });
  }
}

const api = new Api({
  baseUrl: 'https://around-api.pt-br.tripleten-services.com/v1',
  token: '80bec454-e86a-45fb-87e6-90e02b604577', 
});

export default api;

