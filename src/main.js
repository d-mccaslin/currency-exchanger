import convert from './convert.js';
import './css/styles.css';

$(document).ready(function() {
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
})

