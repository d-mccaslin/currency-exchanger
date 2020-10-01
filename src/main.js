import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js'

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}

function getElements(response) {
  if (response.result == "success") {

    const rate = response.conversion_rates['AED'];

    $("#results-group").show();
    $('.showRate').text(`The conversion rate for AED is ${rate}%`);
  } else {
    $("results-group").show();
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(amount,target) {
  const response = await ExchangeService.getExchange(amount,target);
  getElements(response);
}

$('#conversionForm').submit(function(event) {
  event.preventDefault();
  let dollarAmount = $('#dollarAmount').val();
  let targetCurrency = $('#targetCurrency').val();
  clearFields();
  makeApiCall(dollarAmount,targetCurrency);
});