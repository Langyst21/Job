const sumNumber = (number) => {
  let sum = 0;
  for (i = 0; i < number.length; i++) {
      sum += +number[i];
      console.log(sum);
  }
  return sum;
};

console.log(sumNumber('1234'));

const isHappyNumber = (num) => {
  let number = num;
  for (let i = 0; i < 10; i += 1) {
    number = sumOfSquareDigits(number);
    if (number === 1) {
      return true;
    }
  }
  return false;
};
