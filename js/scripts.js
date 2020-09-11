$(document).ready(function() {
  $("#formMain").submit(function(event) {
    event.preventDefault();
    const amount = parseInt($("input#amount").val());
    console.log(amount);
  })
})