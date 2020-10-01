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
    if (rate) {
      let convertedAmount = amount * rate;
      convertedAmount = convertedAmount.toFixed(2);
      $('#results-group').show();
      $('.showRate').text(`The converted amount from USD to ${target} is ${convertedAmount}.`);
    } else {
      $('#results-group').show();
      $('.showRate').text(`${target} is not a supported currency code. Please input a new target currency.`);
    }
  } else {
    $('results-group').show();
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(amount,target) {
  const response = await ExchangeService.getExchange(amount,target);
  getElements(response,amount,target);
}

$('#conversionForm').submit(function(event) {
  event.preventDefault();
  let dollarAmount = parseInt($('#dollarAmount').val());
  let targetCurrency = $('#targetCurrency').val();
  clearFields();
  makeApiCall(dollarAmount,targetCurrency);
});