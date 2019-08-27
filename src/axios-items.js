import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://ecommerce-project-d31ae.firebaseio.com/'
})

export default instance