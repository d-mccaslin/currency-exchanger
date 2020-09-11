// Business Logic

function convert(amount,currency) {
  return amount * 2;
}

// UI Logic

$(document).ready(function() {
  $("#formMain").submit(function(event) {
    event.preventDefault();
    const amount = parseInt($("input#amount").val());
    //console.log(amount);
    const convertedAmount = convert(amount);
    $("#result").text(convertedAmount);
    $("#results-group").show();
  })
})