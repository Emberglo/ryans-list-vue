import { api } from './AxiosService'
import { AppState } from '../AppState'
import router from '../router'

class HouseService {
  async getHouses() {
    try {
      const res = await api.get('/houses')
      AppState.houses = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async getActiveHouse(houseId) {
    try {
      const res = await api.get('/houses/' + houseId)
      AppState.activeHouse = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async removeHouse(houseId) {
    try {
      if (window.confirm('Are you sure?')) {
        await api.delete('/houses/' + houseId)
        router.push({ name: 'Houses' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse(houseData) {
    try {
      const res = await api.post('/houses', houseData)
      router.push({ name: 'ActiveHouse', params: { houseId: res.data.data._id } })
    } catch (error) {
      console.error(error)
    }
  }

  setActiveHouse(houseData) {
    try {
      AppState.activeHouse = houseData
    } catch (error) {
      console.error(error)
    }
  }
}

export const houseService = new HouseService()
