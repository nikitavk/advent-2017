let input = 363;
let res = 0
let pos = 0;

for (let i = 0; i <5e6; i++) {
    pos = (pos + input + 1) % (i + 1);
    if (pos === 0) {
        res = i + 1;
    }
}
console.log(res);