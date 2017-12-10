const input = `147,37,249,1,31,2,226,0,161,71,254,243,183,255,30,70`;
let elements = [...Array(256).keys()];
const lengths = input.split(',').map(e => +e);

let current = 0;
let skipSize = 0;

for (let length of lengths) {
    let start = length;
    let i = current;
    let sub = [];
    while (start) {
        sub.push(elements[i]);
        start--;
        i++

        if (i > elements.length - 1) {
            i = 0;
        }

    }
    sub = sub.reverse();
    i = current;
    for (let s of sub) {
        elements[i] = s;
        i++

        if (i > elements.length - 1) {
            i = 0;
        }

    }
    current += (skipSize + length);
    if (current > elements.length - 1) {
        current = current % elements.length;
    }
    skipSize++;
}

console.log(elements[0] * elements[1]);