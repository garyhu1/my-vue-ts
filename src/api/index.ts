import { httpGet, httpPost } from './src'

export const getorglist = (params = {}) => httpGet({ url: 'apps/api/org/list', params })


class Http {
  save(data: Object) {
    return httpPost({
      url: 'apps/wechat/api/save_member',
      data
    })
  }

  // 该方法在MainPage.vue中测试
  getJson() {
    return httpGet({
      url: '/api/json'
    })
  }

  public getUser() {
    return httpGet({
      url: '/user'
    })
  }

}

export default Http
