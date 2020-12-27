import axios from 'axios'
import config from 'config'

class CurrencyService {
  public async getAvailableCurrencies(): Promise<any> {
    const apiKey: string = config.get('fixerApi.apiKey')
    const baseUrl: string = config.get('fixerApi.url')
    const endpoint = `${baseUrl}/symbols?access_key=${apiKey}`

    const response = await axios.get(endpoint)
    const { data } = response

    return data
  }
 }

export default new CurrencyService()