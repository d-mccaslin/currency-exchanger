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

$('#weatherLocation').click(function() {
  let city = $('#location').val();
  clearFields();
  let promise = WeatherService.getWeather(city);
  promise.then(function(response) {
    const body = JSON.parse(response);
    $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
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

