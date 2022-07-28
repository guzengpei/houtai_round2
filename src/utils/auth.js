import Cookies from 'js-cookie'

const TokenKey = 'houtai_round2_token' // 设置一个独一无二的key
const timeKey = 'timeKey'
export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getTime () {
  return Cookies.get(timeKey)
}
export function setTime () {
  return Cookies.set(timeKey, Date.now())
}
