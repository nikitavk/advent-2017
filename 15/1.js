let a = 783;
let b = 325;

let count = 0;

for (let i = 0; i < 5000000; i++) {
  a *= 16807;
  b *= 48271;

  a = a % 2147483647;
  b = b % 2147483647;

  if (
    a
      .toString(2)
      .padStart(32, '0')
      .slice(16, 32) ===
    b
      .toString(2)
      .padStart(32, '0')
      .slice(16, 32)
  ) {
    count++;
  }
}

console.log(count);
