export default class ExchangeService {  
  static async getExchange() {
    try {
      const key = process.env.API_KEY;
      const baseParam = 'USD';
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${baseParam}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}