import axios from 'axios'
import { AxiosResponse, AxiosRequestConfig } from 'axios';

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL = '/proxyApi' // 在vue.config.js做了跨域的代理
  axios.defaults.baseURL = ""
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://prod.xxx.com'// 根据需求填写自己的域名
}

// 请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token = window.localStorage.getItem("token");  
    token && (config.headers.Authorization = token)
    return config
  },
  (error: any) => {
    return Promise.reject(error)
})

axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 响应拦截器
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      return Promise.reject('请求错误！');
    } else {
      return Promise.resolve(response.data);
    }
  }, (error: any) => {
  return Promise.reject(error)
})

// get 请求
export function httpGet({
  url = "",
  params = {}
}){
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then((res) => {
      // console.log(res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// post请求
export function httpPost({
  url = "",
  data = {},
  params = {}
}) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      // 发送的数据
      data,
      // url参数
      params

    }).then(res => {
      resolve(res.data)
    })
  })
}

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url: string,data = {}){
    return new Promise((resolve,reject) => {
      axios.patch(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
}
  
/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url: string,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}
