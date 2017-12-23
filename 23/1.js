const input = `set b 99
set c b
jnz a 2
jnz 1 5
mul b 100
sub b -100000
set c b
sub c -17000
set f 1
set d 2
set e 2
set g d
mul g e
sub g b
jnz g 2
set f 0
sub e -1
set g e
sub g b
jnz g -8
sub d -1
set g d
sub g b
jnz g -13
jnz f 2
sub h -1
set g b
sub g c
jnz g 2
jnz 1 3
sub b -17
jnz 1 -23`;

const instructions = input.split('\n').map(e => ({
  type: e.split(' ')[0],
  left: e.split(' ')[1],
  right: e.split(' ')[2],
}));

let registers = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
};
let snd = 0;
let j = 0;
let mulcount = 0;
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
    case 'sub':
      if (+i.right) {
        registers[i.left] -= +i.right;
      } else {
        registers[i.left] -= registers[i.right];
      }
      break;
    case 'mul':
      if (+i.right) {
        registers[i.left] *= +i.right;
      } else {
        registers[i.left] *= registers[i.right];
      }
      mulcount++;
      break;
    case 'jnz':
      if (registers[i.left] != 0) {
        if (+i.right) {
          j = j + +i.right - 1;
        } else {
          j = j + registers[i.right] - 1;
        }
      }

      break;
  }
}

console.log(mulcount);