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

