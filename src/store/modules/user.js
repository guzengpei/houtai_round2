import { getToken, setToken, removeToken, setTime } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'
const state = {
  token: getToken(), // 有cookie的token的话先读
  userInfo: {}
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
    setToken(payload)
  },
  removeToken () {
    state.token = null
    removeToken()
  },
  setUserInfo (state, payload) {
    state.userInfo = payload
  },
  removeUserInfo (state) {
    state.userInfo = {}
  }
}
const actions = {
  async login (context, data) {
    const res = await login(data)
    if (res) {
      context.commit('setToken', res)
      // 登陆时设置当前的时间戳
      setTime()
    }
  },
  async getUserInfo (context) {
    const res = await getUserInfo()
    // console.log(res)
    // 单独的一个接口获取用户的头像 用户的详情数据
    const res1 = await getUserDetailById(res.userId)

    context.commit('setUserInfo', { ...res, ...res1 })
    // 在做权限的时候才会用到 前期用不上
    return res
  },
  logout (context) {
    context.commit('removeUserInfo')
    context.commit('removeToken')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

