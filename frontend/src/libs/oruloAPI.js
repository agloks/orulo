import axios from 'axios';
import ENV from "../env"

export default class OruloAPI {
  constructor() {
    this.header = {
      Authorization: ENV.ORULO_TOKEN
    }
    this.params = {
      city: "porto alegre",
      // state: "rs",
      results_per_page: 2,
      page: 1,
    }
    this.service = axios.create({
      baseURL: "https://www.orulo.com.br",
      // withCredentials: true,
    })
  }

  async showList() {
    const result = await this.service.get("/api/v2/buildings", {headers: this.header})
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