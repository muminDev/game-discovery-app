import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8ec47ff325ac457885ce17067d285228'
  }
})