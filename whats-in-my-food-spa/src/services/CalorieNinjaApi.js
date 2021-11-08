import axios from "axios";

const url = "https://api.calorieninjas.com/v1/"; 

axios.defaults.headers.common['X-Api-Key'] = process.env.REACT_APP_API_KEY // for all requests

export default axios.create({
    baseURL: `${url}`
})