const isHappyTicket = (number) => {
    let sum1 = 0;
    let sum2 = 0;
    const a = number.slice(number.length[0], number.length / 2);
    const b = number.slice(number.length / 2, number.length);
    const numb1 = Number(a);
    const numb2 = Number(b);
    console.log(numb1, numb2);
    for (let i = 0; i < numb1.length; i++) {
        sum1 += numb1[i];
    }
    for (let i = 0; i < numb2.length; i++) {
        sum2 += numb2[i];
    }
    console.log(sum1, sum2);
    if (sum1 === sum2 && number.length % 2 === 0) {
      return true;
    } else {
      return false;
    }
};
 
console.log(isHappyTicket('060006'))
console.log(isHappyTicket('123321'))
console.log(isHappyTicket('341800'))
console.log(isHappyTicket('812146'))
console.log(isHappyTicket('000001'))
console.log(isHappyTicket('123567'))
console.log(isHappyTicket('213612'))