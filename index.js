const num = +prompt("Введіть ціле число:");

if (num <= 1) {
    console.log(`${num} не є простим числом`);
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} є простим числом`);
    } else {
        console.log(`${num} не є простим числом`);
    }
}
