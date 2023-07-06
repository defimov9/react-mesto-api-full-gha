const BASE_URL = 'http://api.defimov9.mesto.nomoreparties.sbs';
const BASE_HEADER = { 'Content-Type': 'application/json' };

class Auth {
  constructor(baseUrl, baseHeader) {
    this._baseUrl = baseUrl;
    this._baseHeader = baseHeader;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(password, email) {
    return this._request(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._baseHeader,
      body: JSON.stringify({ password, email }),
    });
  }

  login(password, email) {
    return this._request(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._baseHeader,
      body: JSON.stringify({ password, email }),
    });
  }

  checkToken(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: { ...this._baseHeader, Authorization: `Bearer ${token}` },
    });
  }
}

const auth = new Auth(BASE_URL, BASE_HEADER);
export default auth;
