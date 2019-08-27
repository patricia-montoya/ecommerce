import axios from 'axios'

export const getItems = () => {
    return axios.get('https://ecommerce-project-d31ae.firebaseio.com/items.json')
}  