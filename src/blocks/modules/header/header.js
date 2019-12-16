function sayHi(name, age) {
  var phrase;
  if (age > 18) {
    phrase = "Здравсвуйте, " + name;
  } else  {
    phrase = "Привет, " + name; 
  }
  alert(phrase);
}