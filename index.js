exports.checkEvenOdd = (num) => {
  let number = parseInt(num);
  if (number % 2 == 0) {
    return "Number is Even";
  } else {
    return "Number is Odd";
  }
};

exports.checkPalindrome = (num) => {
  var rem,
    temp,
    final = 0;
  let number = parseInt(num);
  temp = number;
  while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
  }
  if (final == temp) {
    return "Number is Palindrome";
  } else {
    return "Number is not Palindrome";
  }
};
