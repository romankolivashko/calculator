// Business logic:

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// User interface logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
   event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});







// mine from prev lesson
// function add(num1, num2){
// 	return num1 + num2;
// }

// const num1 = parseInt(prompt("Enter a number:"));
// const num2 = parseInt(prompt("Enter a number:"));
// const result = add(num1, num2);
// alert(result);















// function substract(num1, num2) {
//   return num1 - num2;
// }

// const num1 = parseInt(prompt("Enter a number:"));
// const num2 = parseInt(prompt("Enter a number:"));
// const result = substract(num1, num2);
// alert(result);

// function multiply {
//   return num1 * num2;
  
// }

// const num1 = parseInt(prompt("Enter a number:"));
// const num2 = parseInt(prompt("Enter a number:"));
// const result = substract(num1, num2);
// alert(result);

// function divide {
//   return num1 / num2;
// }

// const num1 = parseInt(prompt("Enter a number:"));
// const num2 = parseInt(prompt("Enter a number:"));
// const result = substract(num1, num2);
// alert(result);