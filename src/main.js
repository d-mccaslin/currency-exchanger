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
    console.log(response);
    console.log(response.conversion_rates[0]);
    console.log(response.conversion_rates);

    //const country = response.conversion_rates[0];
    const rate = response.conversion_rates['AED'];
    $('.showHumidity').text(`The conversion rate for AED is ${rate}%`);
    //$('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(city) {
  const response = await WeatherService.getWeather(city);
  getElements(response);
}

$('#weatherLocation').click(function() {
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

