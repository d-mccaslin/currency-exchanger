export default class ExchangeService {  
  static async getExchange(amount,target) {
    try {
      const key = process.env.API_KEY;
      console.log(target);
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${amount}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}