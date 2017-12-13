const input = `0: 3
1: 2
2: 4
4: 4
6: 5
8: 8
10: 6
12: 6
14: 6
16: 6
18: 8
20: 8
22: 12
24: 10
26: 9
28: 8
30: 8
32: 12
34: 12
36: 12
38: 12
40: 8
42: 12
44: 14
46: 14
48: 10
50: 12
52: 12
54: 14
56: 14
58: 14
62: 12
64: 14
66: 14
68: 14
70: 12
74: 14
76: 14
78: 14
80: 18
82: 17
84: 30
88: 14`;

let layers = input
  .split('\n')
  .map(e => e.split(':'))
  .map(e => ({ index: +e[0], depth: +e[1].trim() }));

let maxIndex = Math.max.apply(null, layers.map(l => l.index));

let severity = 0;

for (let i = 0; i <= maxIndex; i++) {
  let layer = findLayer(i);
  if (layer && !(i % ((layer.depth - 1) * 2))) {
    severity += layer.depth * layer.index;
  }
}

console.log(severity);

function findLayer(index) {
  return layers.filter(l => l.index === index)[0];
}