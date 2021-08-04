exports.checkEvenOdd = (num) => {
  let number = parseInt(num);
  if (number % 2 == 0) {
    res.status(200).json({
      number: number,
      result: "Number is Even",
    });
  } else {
    res.status(200).json({
      number: number,
      result: "Number is Odd",
    });
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
    res.status(200).json({
      number: temp,
      result: "Number is Palindrome",
    });
  } else {
    res.status(200).json({
      number: temp,
      result: "Number is not Palindrome",
    });
  }
};
