import convert from './convert.js';
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './currency-service.js'

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

async function makeApiCall(city) {
  const response = await WeatherService.getWeather(city);
  getElements(response);
}

$('#conversionForm').submit(function(event) {
  event.preventDefault();
  let city = $('#location').val();
  clearFields();
  makeApiCall(city);
});

$("#formMain").submit(function(event) {
  event.preventDefault();
  const amount = parseInt($("input#amount").val());
  const currency = $("select#currency").val();
  //console.log(amount);
  const convertedAmount = convert(amount,currency);
  console.log(convertedAmount);
  $("#result").text(convertedAmount);
  $("#results-group").show();
})

