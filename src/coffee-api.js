/* eslint-disable no-throw-literal */
import request from 'superagent';

const URL = 'https://no-stars-no-bucks.herokuapp.com';


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