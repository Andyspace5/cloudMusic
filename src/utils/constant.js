// 环境的切换
let baseUrl
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://localhost:3000'
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://172.16.33.240:3000'
}
export default baseUrl
