import convert from './convert.js';
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

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

$('#weatherLocation').click(function() {
  const city = $('#location').val();
  $('#location').val("");

  let request = new XMLHttpRequest();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", url, true);
  request.send();

 function getElements(response) {
    $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  }
});

