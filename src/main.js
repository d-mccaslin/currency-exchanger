import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';

function clearFields() {
  $('#dollarAmount').val("");
  $('#targetCurrency').val("");
  $('.showErrors').text("");
  $('.showRate').text("");
}

function getElements(response,amount,target) {
  if (response.result == "success") {
    const rate = response.conversion_rates[target];
    if (!amount) {
      $('#results-group').show();
      $('.showRate').text('Please input a proper amount.');
    } else if (!rate) {
      $('#results-group').show();
      $('.showRate').text(`${target} is not a supported currency code. Please input a new target currency.`);
    } else {
      let convertedAmount = amount * rate;
      convertedAmount = convertedAmount.toFixed(2);
      $('#results-group').show();
      $('.showRate').text(`The converted amount from ${amount} USD to ${target} is ${convertedAmount}.`);
    }
  }
}

async function makeApiCall(amount,target) {
  const response = await ExchangeService.getExchange();
  getElements(response,amount,target);
}

$('#conversionForm').submit(function(event) {
  event.preventDefault();
  let dollarAmount = parseInt($('#dollarAmount').val());
  let targetCurrency = $('#targetCurrency').val();
  clearFields();
  makeApiCall(dollarAmount,targetCurrency);
});