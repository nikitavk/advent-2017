let a = 783;
let b = 325;

let count = 0;

for (let i = 0; i < 5000000; i++) {
  do {
    a *= 16807;
    a = a % 2147483647;
  } while (a % 4);

  do {
    b *= 48271;
    b = b % 2147483647;
  } while (b % 8);

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
