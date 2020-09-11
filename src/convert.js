// Business Logic

function convert(amount,currency) {
  let convertedAmount;
  if (currency === "europe") {
    convertedAmount = amount * 2;
  } else if (currency === "mexico") {
    convertedAmount = amount * 3;
  } else if (currency === "china") {
    convertedAmount = amount * .5;
  }
  return convertedAmount;
}