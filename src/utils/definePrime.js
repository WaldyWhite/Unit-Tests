export function definePrime(num) {
  let isPrime, result;
  isPrime = true;

  if (num > 1 && num <= 1000) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    result = isPrime
      ? `Number ${num} - Prime number`
      : `Number ${num} - Composite number`;
  } else if (num > 1000 || num < 1) {
    result = "Data is incorrect";
  }
  return result;
}
