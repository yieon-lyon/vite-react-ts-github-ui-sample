import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    // Note: In most cases, you can use Authorization: Bearer or Authorization: token to pass a token. However, if you are passing a JSON web token (JWT), you must use Authorization: Bearer.
    Authorization: 'SET_YOUR_TOKEN'
  }
})

export default api
