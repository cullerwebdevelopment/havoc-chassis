var input1 = prompt ("please type a starting number");
var bottomNumber = parseInt(input1);
var input = prompt ("please type a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber +1)) + bottomNumber;
document.write(randomNumber);
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + "</P>"
