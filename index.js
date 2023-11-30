const isHappyTicket = (number) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    const a = number.slice(number.length[0], number.length / 2);
    const b = number.slice(number.length / 2, number.length);
    console.log(sum);
    let result = a + b;
    if (a === b) {
        return true;
    } else if (a !== b) {
        return false;
    }
    return result;
};

console.log(isHappyTicket([2, 4, 3, 3]));