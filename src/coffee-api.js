/* eslint-disable no-throw-literal */
import request from 'superagent';

// would have liked to see this coming in from an environemtn variable
const URL = 'https://no-stars-no-bucks.herokuapp.com'


export function signUp(userData) {
  try {
    return request.post(`${URL}/auth/signup`, userData)
  } catch(e) {
    throw { error: e.message }
  }
}

export function signIn(userData) {
  try {
    return request.post(`${URL}/auth/signin`, userData)
  } catch(e) {
    throw { error: e.message }
  }
}


export function fetchCoffeeShops(location) {
  try {
    return request.get(`${URL}/coffeeList?location=${location}`)
  } catch (e) {
    throw {
      error: e.message
    }
  }
}

export function fetchFavorites() {
  const TOKEN = localStorage.getItem('TOKEN');

  try {
    return request
              .get(`${URL}/api/favorites`)
              .set('Authorization', TOKEN)
  } catch (e) {
    throw {
      error: e.message
    }
  }
}

export function fetchFavoriteById(id) {
  const TOKEN = localStorage.getItem('TOKEN');

  try {
    return request
              .get(`${URL}/api/favorites/${id}`)
              .set('Authorization', TOKEN)
  } catch (e) {
    throw {
      error: e.message
    }
  }
}

export function deleteFavorite(id) {
  const TOKEN = localStorage.getItem('TOKEN');

  try {
    return request
              .delete(`${URL}/api/favorites/${id}`)
              .set('Authorization', TOKEN)
  } catch (e) {
    throw {
      error: e.message
    }
  }
}

export function editFavorite(id, notes) {
  const TOKEN = localStorage.getItem('TOKEN');

  try {
    return request
              .put(`${URL}/api/favorites/${id}`, notes)
              .set('Authorization', TOKEN)
  } catch (e) {
    throw {
      error: e.message
    }
  }
}

export function addToFavorites(favorite) {
  const TOKEN = localStorage.getItem('TOKEN');

  try {
    return request
              .post(`${URL}/api/favorites`, favorite)
              .set('Authorization', TOKEN)
  } catch (e) {
    throw {
      error: e.message
    }
  }
}
