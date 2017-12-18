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

let registers = {};
let snd = 0;
let j = 0;
top: for (j = 0; j < instructions.length; j++) {
  let i = instructions[j];
  switch (i.type) {
    case 'set':
      if (+i.right) {
        registers[i.left] = +i.right;
      } else {
        registers[i.left] = registers[i.right];
      }
      break;
    case 'add':
      if (+i.right) {
        registers[i.left] += +i.right;
      } else {
        registers[i.left] += registers[i.right];
      }
      break;
    case 'mul':
      if (+i.right) {
        registers[i.left] *= +i.right;
      } else {
        registers[i.left] *= registers[i.right];
      }
      break;
    case 'mod':
      if (+i.right) {
        registers[i.left] = registers[i.left] % i.right;
      } else {
        registers[i.left] = registers[i.left] % registers[i.right];
      }

      break;
    case 'snd':
      snd = registers[i.left];
      break;
    case 'rcv':
      if (registers[i.left]) {
        console.log('rvc', snd);
        break top;
      }
      break;
    case 'jgz':
      if (registers[i.left] > 0) {
        if (+i.right) {
          j = j + +i.right - 1;
        } else {
          j = j + registers[i.right] - 1;
        }
      }

      break;
  }
}
