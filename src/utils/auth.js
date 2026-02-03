// src/utils/auth.js
const BASE_URL = 'https://se-register-api.en.tripleten-services.com/v1';

const headers = {
  'Content-Type': 'application/json',
};

const checkResponse = async (res) => {
  if (res.ok) return res.json();

  const error = await res.text();
  throw new Error(`Auth error ${res.status}: ${error}`);
};

// REGISTER
export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

// LOGIN
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

// TOKEN VALIDATION
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};


