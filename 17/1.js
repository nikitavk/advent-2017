let input = 363;
let res = [0];
let pos = 0;

for (let i = 0; i <2017; i++) {
    pos = (pos + input + 1) % (i + 1);
    res.splice(pos + 1, 0, i + 1);
}

console.log(res[pos + 2]);