const input = `42/37
28/28
29/25
45/8
35/23
49/20
44/4
15/33
14/19
31/44
39/14
25/17
34/34
38/42
8/42
15/28
0/7
49/12
18/36
45/45
28/7
30/43
23/41
0/35
18/9
3/31
20/31
10/40
0/22
1/23
20/47
38/36
15/8
34/32
30/30
30/44
19/28
46/15
34/50
40/20
27/39
3/14
43/45
50/42
1/33
6/39
46/44
22/35
15/20
43/31
23/23
19/27
47/15
43/43
25/36
26/38
1/10`;

let components = input.split('\n').map((e, i) => {
    let newe = e.split('/').map(e => +e);
    newe.sort((a, b) => {
        return a - b;
    });
    newe.push(i);
    return newe;
});
let zeros = components.filter(e => e[0] === 0);
// components = components.filter(e => e[0] !== 0);
let variants = [];
let current = [];
current.push(...zeros.map(e => [e]));
let flag = false;
let iter = 0;
let maxLength = 0;
let maxSum = 0;
do {
    flag = false;
    let buff = [];
    for (let c of current) {
        let b = components.filter(e => !c.filter(ce => ce[2] === e[2]).length && ~e.slice(0, 2).indexOf(c[c.length - 1][1]));
        if (b.length) {
            flag = true;
        }
        for (let a of b) {
            if (~c[c.length - 1].indexOf(a[1])) {
                let newa = a.slice();
                a = [...newa.slice(0, 2).reverse(), a[2]];
            }

            buff.push([...c, a]);
        }
    }
    // variants.push(...current);

    for (let v of current) {
        if (v.length > maxLength) {
            maxLength = v.length;
        }
    }

    let longest = current.filter(v => v.length === maxLength);
    maxSum = 0;

    for (l of longest) {
        let sum = l.reduce((sum, curr) => sum + (curr[0] + curr[1]), 0);
        if (sum > maxSum) {
            maxSum = sum;
            console.log(l);
        }
    }
    console.log('iter', iter);
    console.log('maxSum', maxSum);
    console.log('maxLength', maxLength);
    current = buff;
    iter++;
} while (flag)