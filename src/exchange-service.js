export default class ExchangeService {  
  static async getExchange(amount,target) {
    try {
      const key = process.env.API_KEY;
      const amountParam = amount;
      //const baseParam = 'USD';
      //const targetParam = target;
      console.log(target);

      const response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${amountParam}`);
      //const response = await fetch(`https://pro.exchangerate-api.com/v6/${key}/pair/${baseParam}}/${targetParam}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}