let pattern = `.#.
..#
###`;

pattern = pattern.split('\n').map(e => e.split(''));

let rules = `../.. => .../.##/.##
#./.. => .#./.#./##.
##/.. => ##./.../..#
.#/#. => #../..#/##.
##/#. => .../.#./..#
##/## => #.#/.##/.##
.../.../... => ##../.#../##../#..#
#../.../... => ..#./##.#/#.##/....
.#./.../... => ####/#.##/..../...#
##./.../... => ####/...#/.###/..##
#.#/.../... => ..#./..#./##../##.#
###/.../... => ..#./..#./##../...#
.#./#../... => ##.#/###./###./#..#
##./#../... => .#../..##/#.#./#.#.
..#/#../... => .##./..../...#/.###
#.#/#../... => ##../#..#/#..#/....
.##/#../... => ..../#.../..##/##..
###/#../... => ####/#.../.##./#...
.../.#./... => ####/#.../.###/###.
#../.#./... => #.#./.###/#.../##.#
.#./.#./... => .##./##.#/..##/.#..
##./.#./... => ..##/.#../..##/##.#
#.#/.#./... => .##./.#.#/.#.#/....
###/.#./... => ..../##.#/#.#./.###
.#./##./... => ..#./#.../#.../..##
##./##./... => ##.#/##.#/#.##/#...
..#/##./... => .#../.#.#/#.##/####
#.#/##./... => ..#./#.##/..../.##.
.##/##./... => #.##/..##/...#/....
###/##./... => ..#./#.../#.##/.#.#
.../#.#/... => ..##/#.#./##../#...
#../#.#/... => #.#./..#./.#../..##
.#./#.#/... => #.#./.#.#/.#../..##
##./#.#/... => ###./##.#/#..#/####
#.#/#.#/... => ##.#/..##/#.../...#
###/#.#/... => ##.#/..##/###./##..
.../###/... => ..../...#/##../.###
#../###/... => .##./##.#/..../#...
.#./###/... => ###./..##/.##./#...
##./###/... => .##./#..#/.###/.#..
#.#/###/... => ..../#.#./#.../#..#
###/###/... => .#../#.#./#.##/##.#
..#/.../#.. => ##../...#/.#../###.
#.#/.../#.. => #..#/.#../#.#./..#.
.##/.../#.. => #.##/.#../...#/.#.#
###/.../#.. => .#.#/#.../.#.#/.#..
.##/#../#.. => ..#./..../###./#...
###/#../#.. => .##./##../.#.#/##.#
..#/.#./#.. => ###./.##./###./.###
#.#/.#./#.. => ..../..../#.##/.#..
.##/.#./#.. => .#.#/.#.#/#.../####
###/.#./#.. => #.../####/#.##/#.#.
.##/##./#.. => #.../#.##/#.../###.
###/##./#.. => ...#/.##./#.../.##.
#../..#/#.. => ##../##../..##/....
.#./..#/#.. => #.#./##../.###/#.##
##./..#/#.. => #.#./####/.###/...#
#.#/..#/#.. => #..#/##.#/.#../..#.
.##/..#/#.. => .###/.#../#.##/.##.
###/..#/#.. => .###/#.##/..#./..##
#../#.#/#.. => ####/#.../####/##.#
.#./#.#/#.. => .###/####/####/.#..
##./#.#/#.. => ##.#/...#/..../##.#
..#/#.#/#.. => .#../..#./.##./.#..
#.#/#.#/#.. => ...#/###./..##/.###
.##/#.#/#.. => ####/##../#..#/##..
###/#.#/#.. => .#.#/..##/.###/##..
#../.##/#.. => #..#/#.##/#..#/.###
.#./.##/#.. => ##../.###/..../###.
##./.##/#.. => .###/.###/##../.##.
#.#/.##/#.. => ..#./.##./##../#.#.
.##/.##/#.. => ####/#..#/..#./....
###/.##/#.. => #.../.#../#..#/.#..
#../###/#.. => ..../.#../.##./.#.#
.#./###/#.. => ..../####/#.##/###.
##./###/#.. => ...#/.#../#.../##.#
..#/###/#.. => ####/###./###./....
#.#/###/#.. => .#../.###/##.#/.###
.##/###/#.. => #.##/##../##../.#..
###/###/#.. => .###/###./#..#/.#.#
.#./#.#/.#. => ###./.###/.###/.##.
##./#.#/.#. => .#.#/##../###./..#.
#.#/#.#/.#. => .#.#/##../###./#.##
###/#.#/.#. => ..#./.#../.#../..#.
.#./###/.#. => #..#/..##/#.#./#.#.
##./###/.#. => .#../#..#/#.#./.##.
#.#/###/.#. => .#.#/.##./.###/....
###/###/.#. => #.#./#.#./##../.#..
#.#/..#/##. => .#.#/.#.#/#..#/.#.#
###/..#/##. => #.#./##.#/.#../#.##
.##/#.#/##. => #.##/#.##/#.##/##.#
###/#.#/##. => ###./##../.#.#/#...
#.#/.##/##. => ##.#/.#.#/.#.#/.#.#
###/.##/##. => .#.#/#.##/####/....
.##/###/##. => #.../####/###./.###
###/###/##. => .##./#.#./#.##/##..
#.#/.../#.# => #.../##.#/#.##/##.#
###/.../#.# => #.#./#.##/##.#/.##.
###/#../#.# => ##../.#.#/##.#/#...
#.#/.#./#.# => .##./.#../#.../.#.#
###/.#./#.# => #.#./..##/###./..##
###/##./#.# => .###/..##/..#./..#.
#.#/#.#/#.# => .#../##.#/.#.#/.#.#
###/#.#/#.# => ##.#/.#.#/...#/...#
#.#/###/#.# => ##.#/.#../####/#..#
###/###/#.# => ...#/..##/##../#..#
###/#.#/### => ..##/.##./.##./#.##
###/###/### => #.#./.#.#/#.../.##.`;

rules = rules
  .split('\n')
  .map(e => e.split(' => ').map(e => e.split('/').map(e => e.split(''))));

let side = pattern.length;

for (let i = 0; i < 18; i++) {
  let d = null;
  let newPattern = [];
  side = pattern.length;
  if (!(side % 2)) {
    d = 2;
  } else {
    d = 3;
  }

  for (let j = 0; j < side / d; j++) {
    for (let k = 0; k < side / d; k++) {
      let part = [];
      for (let l = 0; l < d; l++) {
        part.push(pattern[d * k + l].slice(j * d, j * d + d));
      }
      let rotatedAndFlipped = flipAndRotate(part);
      for (let rule of rules) {
        if (rule[0].length === d) {
          for (let m of rotatedAndFlipped) {
            if (equals(m, rule[0])) {
              for (let n = 0; n < rule[1].length; n++) {
                if (!newPattern[(d + 1) * k + n]) {
                  newPattern[(d + 1) * k + n] = [];
                }
                newPattern[(d + 1) * k + n].splice(
                  j * (d + 1),
                  0,
                  ...rule[1][n],
                );
              }
              break;
            }
          }
        }
      }
    }
  }
  pattern = newPattern;
}

console.log(
  pattern.reduce(function(sum, curr) {
    return (sum += curr.filter(e => e === '#').length);
  }, 0),
);

function mirrorHorisontal(m) {
  let newm = m.slice().map(r => r.slice().reverse());
  return newm;
}

function mirrorVertical(m) {
  let newm = m.slice().reverse();
  return newm;
}

function rotate90deg(m) {
  let newm = m.map(r => []);

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      newm[j][m.length - i - 1] = m[i][j];
    }
  }
  return newm;
}

function equals(m1, m2) {
  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m1.length; j++) {
      if (m1[i][j] !== m2[i][j]) {
        return false;
      }
    }
  }
  return true;
}

function flipAndRotate(m) {
  return [
    m,
    mirrorHorisontal(m),
    mirrorVertical(m),
    mirrorHorisontal(mirrorVertical(m)),
    rotate90deg(m),
    mirrorVertical(rotate90deg(m)),
    mirrorHorisontal(rotate90deg(m)),
    mirrorHorisontal(mirrorVertical(rotate90deg(m))),
  ];
}
