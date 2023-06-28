import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios"
import { createDiscreteApi } from "naive-ui"

const message = createDiscreteApi(["message"]).message
const service: AxiosInstance = axios.create({
  url: import.meta.env.VITE_BASEURL,
  timeout: 3000
})

/* 请求拦截器 */
service.interceptors.request.use(
  config => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

/* 响应拦截器 */
service.interceptors.response.use(
  (response: AxiosResponse<Result>) => {
    const { code, message, data } = response.data // 根据自定义错误码判断请求是否成功
    if (code === 0) {
      // 将组件用的数据返回
      return data
    } else {
      // 处理业务错误。
      return Promise.reject(new Error(message))
    }
  },
  (error: AxiosError) => {
    // 处理 HTTP 网络错误
    let messages = ""
    // HTTP 状态码
    const status = error.response?.status
    switch (status) {
      case 401:
        messages = "token 失效，请重新登录"
        // 这里可以触发退出的 action
        break
      case 403:
        messages = "拒绝访问"
        break
      case 404:
        messages = "请求地址错误"
        break
      case 500:
        messages = "服务器故障"
        break
      default:
        messages = "网络连接故障"
    }
    message.error(messages)
    return Promise.reject(error)
  }
)

export default service
