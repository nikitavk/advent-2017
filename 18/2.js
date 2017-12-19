const input = `set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 826
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`;

const instructions = input.split('\n').map(e => ({
  type: e.split(' ')[0],
  left: e.split(' ')[1],
  right: e.split(' ')[2],
}));

let registers1 = { p: 0 };
let registers2 = { p: 1 };
let snd1 = [];
let snd2 = [];

let waiting1 = false;
let waiting2 = false;

let snd1count = 0;
let snd2count = 0;

let j = 0;
let k = 0;
while (!(waiting1 && waiting2)) {
  let i = instructions[j];
  if (!i) {
    break;
  }
  switch (i.type) {
    case 'set':
      if (Number.isInteger(+i.right)) {
        registers1[i.left] = +i.right;
      } else {
        registers1[i.left] = registers1[i.right];
      }
      break;
    case 'add':
      if (Number.isInteger(+i.right)) {
        registers1[i.left] += +i.right;
      } else {
        registers1[i.left] += registers1[i.right];
      }
      break;
    case 'mul':
      if (Number.isInteger(+i.right)) {
        registers1[i.left] *= +i.right;
      } else {
        registers1[i.left] *= registers1[i.right];
      }
      break;
    case 'mod':
      if (Number.isInteger(+i.right)) {
        registers1[i.left] = registers1[i.left] % i.right;
      } else {
        registers1[i.left] = registers1[i.left] % registers1[i.right];
      }
      break;
    case 'snd':
      if (Number.isInteger(+i.left)) {
        snd1.push(+i.left);
      } else {
        snd1.push(registers1[i.left]);
      }
      snd1count++;
      break;
    case 'rcv':
      if (snd2.length) {
        registers1[i.left] = snd2.shift();
        waiting1 = false;
      } else {
        waiting1 = true;
      }
      break;
    case 'jgz':
      if (Number.isInteger(+i.left)) {
        if (+i.left > 0) {
          if (Number.isInteger(+i.right)) {
            j = j + +i.right - 1;
          } else {
            j = j + registers1[i.right] - 1;
          }
        }
      } else {
        if (registers1[i.left] > 0) {
          if (Number.isInteger(+i.right)) {
            j = j + +i.right - 1;
          } else {
            j = j + registers1[i.right] - 1;
          }
        }
      }
      break;
  }
  if (!waiting1) {
    j++;
  }

  i = instructions[k];
  if (!i) {
    break;
  }
  switch (i.type) {
    case 'set':
      if (Number.isInteger(+i.right)) {
        registers2[i.left] = +i.right;
      } else {
        registers2[i.left] = registers2[i.right];
      }
      break;
    case 'add':
      if (Number.isInteger(+i.right)) {
        registers2[i.left] += +i.right;
      } else {
        registers2[i.left] += registers2[i.right];
      }
      break;
    case 'mul':
      if (Number.isInteger(+i.right)) {
        registers2[i.left] *= +i.right;
      } else {
        registers2[i.left] *= registers2[i.right];
      }
      break;
    case 'mod':
      if (Number.isInteger(+i.right)) {
        registers2[i.left] = registers2[i.left] % i.right;
      } else {
        registers2[i.left] = registers2[i.left] % registers2[i.right];
      }
      break;
    case 'snd':
      if (Number.isInteger(+i.left)) {
        snd2.push(+i.left);
      } else {
        snd2.push(registers2[i.left]);
      }
      snd2count++;
      break;
    case 'rcv':
      if (snd1.length) {
        registers2[i.left] = snd1.shift();
        waiting2 = false;
      } else {
        waiting2 = true;
      }
      break;
    case 'jgz':
      if (Number.isInteger(+i.left)) {
        if (+i.left > 0) {
          if (Number.isInteger(+i.right)) {
            k = k + +i.right - 1;
          } else {
            k = k + registers2[i.right] - 1;
          }
        }
      } else {
        if (registers2[i.left] > 0) {
          if (Number.isInteger(+i.right)) {
            k = k + +i.right - 1;
          } else {
            k = k + registers2[i.right] - 1;
          }
        }
      }
  }
  if (!waiting2) {
    k++;
  }
}

console.log(snd1count, snd2count);
