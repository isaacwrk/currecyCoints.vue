import axios from "axios";

const http =  axios.create({
    baseURL:'https://economia.awesomeapi.com.br/json'
})

export default http