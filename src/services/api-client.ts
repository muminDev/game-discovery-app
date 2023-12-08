import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a61a77eb285f4460808b029d864b4b08'
  }
})