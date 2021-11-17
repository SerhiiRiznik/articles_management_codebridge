import axios from "axios";

const API_KEY = '185b4b74e0b94507a1cdb596fe63766f'


const instance = axios.create({
  baseURL: 'https://newsapi.org'  
});

class Api {
   
   static getArticles() {
      return instance.get(`/v2/everything?q=tesla&from=2021-10-17&sortBy=publishedAt&apiKey=${API_KEY}`)
   }
}

export { Api };