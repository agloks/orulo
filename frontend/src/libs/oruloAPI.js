import axios from 'axios';
import qs from 'qs'
import ENV from "../env"

export default class OruloAPI {
  constructor() {
    this.header = {
      Authorization: ENV.ORULO_TOKEN
    }
    this.params = {
      // city: 'porto alegre',
      state: 'rs',
      results_per_page: 6,
      page: 1,
    }
    this.service = axios.create({
      baseURL: "https://www.orulo.com.br",
      // withCredentials: true,
    })
  }

  async showList() {
    const result = await this.service.get(`/api/v2/buildings?${qs.stringify(this.params)}`, {headers: this.header})
    return result
  }

  async getAllFavorites(favorites) {
    let requests = []
    favorites.forEach(async(favorite) => {
      const response = this.service.get(`/api/v2/buildings/${favorite}`, {headers: this.header})
      requests.push(response); 
    })
    const result = await Promise.all(requests)

    return result
  }
}