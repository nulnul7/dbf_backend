import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://dbfworks.herokuapp.com/5R2I/"
})

export default axiosInstance