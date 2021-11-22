import axios from "axios";

const API_KEY = '185b4b74e0b94507a1cdb596fe63766f'
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
const instance = axios.create({
  baseURL: 'https://newsapi.org'  
});

class Api {
   
   static getArticles() {
      return instance.get(`/v2/everything?q=tesla&from=${yyyy}-${mm}-${dd}&sortBy=publishedAt&apiKey=${API_KEY}`)
   }
}

export { Api };