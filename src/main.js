// UI Logic

$(document).ready(function() {
  $("#formMain").submit(function(event) {
    event.preventDefault();
    const amount = parseInt($("input#amount").val());
    const currency = $("select#currency").val();
    //console.log(amount);
    const convertedAmount = convert(amount,currency);
    $("#result").text(convertedAmount);
    $("#results-group").show();
  })
})

