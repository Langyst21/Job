const isHappyTicket = (number) => {
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    for (let i = 0; i < number.length / 2; i++) {
      sumFirstHalf = sumFirstHalf + +number[i];
    }
    for (let i = number.length / 2; i < number.length; i++) {
      sumSecondHalf = sumSecondHalf + +number[i];
    }
    return sumFirstHalf === sumSecondHalf;
};

console.log(isHappyTicket('123123'));
console.log(isHappyTicket('1234'));
