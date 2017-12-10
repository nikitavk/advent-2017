const input = `147,37,249,1,31,2,226,0,161,71,254,243,183,255,30,70`;
let lengths = [].map.call(input, e => e.charCodeAt(0));
lengths = [...lengths, 17, 31, 73, 47, 23];
let elements = [...Array(256).keys()];

let current = 0;
let skipSize = 0;

for (let i = 0; i < 64; i++) {
    ({
        current,
        skipSize,
        elements
    } = round(current, skipSize, elements, lengths));
}

let xorRes = [];
for (let i = 0; i < 256; i += 16) {
    let sixteen = elements.slice(i, i + 16);
    xorRes.push(xor(sixteen));
}
res = xorRes.map(e => e.toString(16).padStart(2, '0')).join('');
console.log(res);

function xor(a) {
    return a.reduce((a, b) =>
        a ^ b);
}

function round(curret, skipSize, elements, lengths) {
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

    return {
        current,
        skipSize,
        elements
    };
}