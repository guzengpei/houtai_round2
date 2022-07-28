// import { config } from '@vue/test-utils'
import axios from 'axios'
// 引入消息组件
import { Message } from 'element-ui'
import store from '@/store'
import { getTime } from './auth'
import router from '@/router'
const timeOut = 4800 // 定义超时时间
// create an axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})
// 请求拦截器
request.interceptors.request.use(config => {
  // config 是请求的配置信息
  if (store.getters.token) {
    if (checkTimeOut()) {
      // 先删除token 再删除
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token超时了'))
    }
    config.headers['Authorization'] = `Bearer ` + store.getters.token
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use(response => {
  const { message, success, data } = response.data
  if (success) {
    console.log(response.data)
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, error => {
  if (error.response && error.response.data && error.response.data.code === 10002) {
    // 表示token超时了
    store.dispatch('user/logout')
    router.push('/login')
  } else {
    Message.error(error.Message)
  }
  return Promise.reject(error)
})

function checkTimeOut () {
  const currentTime = Date.now()
  const localTime = getTime()
  console.log(localTime)
  return (currentTime - localTime) / 1000 > timeOut
}
export default request

